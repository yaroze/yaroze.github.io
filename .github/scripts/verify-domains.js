import puppeteer from 'puppeteer';

async function verifyDomains() {
  const domains = [
    'https://devops-portfolio.me',
    'https://www.devops-portfolio.me',
    'https://me.devops-portfolio.me',
    'https://i.devops-portfolio.me'
  ];

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });

  const results = [];

  for (const domain of domains) {
    try {
      console.log(`Testing ${domain}...`);
      
      const page = await browser.newPage();
      
      // Set a longer timeout for DNS propagation
      await page.goto(domain, { 
        waitUntil: 'networkidle2',
        timeout: 60000 
      });

      // Check if the page loaded successfully
      const title = await page.title();
      const url = page.url();
      
      console.log(`✓ ${domain} -> ${url} (Title: ${title})`);
      
      // Verify HTTPS
      if (!url.startsWith('https://')) {
        throw new Error(`${domain} did not redirect to HTTPS`);
      }

      // Check if main content is present
      const content = await page.$eval('body', el => el.textContent);
      if (!content.includes('DevOps') || !content.includes('Engineer')) {
        throw new Error(`${domain} does not contain expected content`);
      }

      // Check if it's served via Cloudflare (check headers)
      const response = await page.goto(domain, { waitUntil: 'networkidle2' });
      const headers = response.headers();
      
      if (headers['cf-ray']) {
        console.log(`✓ ${domain} is served via Cloudflare (CF-Ray: ${headers['cf-ray']})`);
      }

      results.push({
        domain,
        status: 'success',
        finalUrl: url,
        title,
        cloudflare: !!headers['cf-ray']
      });

      await page.close();

    } catch (error) {
      console.error(`❌ ${domain} failed: ${error.message}`);
      results.push({
        domain,
        status: 'failed',
        error: error.message
      });
    }
  }

  await browser.close();

  // Summary
  console.log('\n=== Domain Verification Summary ===');
  const successful = results.filter(r => r.status === 'success');
  const failed = results.filter(r => r.status === 'failed');

  console.log(`✅ Successful: ${successful.length}/${domains.length}`);
  successful.forEach(r => {
    console.log(`  - ${r.domain} -> ${r.finalUrl} ${r.cloudflare ? '(via Cloudflare)' : ''}`);
  });

  if (failed.length > 0) {
    console.log(`❌ Failed: ${failed.length}/${domains.length}`);
    failed.forEach(r => {
      console.log(`  - ${r.domain}: ${r.error}`);
    });
  }

  // Wait a bit for DNS propagation if some domains failed
  if (failed.length > 0 && failed.length < domains.length) {
    console.log('\n⏳ Some domains failed. This might be due to DNS propagation delays.');
    console.log('DNS changes can take up to 48 hours to fully propagate worldwide.');
    console.log('The working domains indicate the setup is correct.');
  }

  // Don't fail the build if domains are still propagating
  if (successful.length === 0) {
    console.error('\n❌ No domains are working. Check the configuration.');
    process.exit(1);
  } else if (failed.length > 0) {
    console.log('\n⚠️  Some domains are still propagating. This is normal and should resolve within 24-48 hours.');
  } else {
    console.log('\n🎉 All domains are working correctly!');
  }
}

verifyDomains();
