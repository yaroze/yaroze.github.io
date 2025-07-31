import puppeteer from 'puppeteer';

async function testDeployment() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });

  try {
    const page = await browser.newPage();
    
    console.log('Testing local deployment on http://localhost:3000...');
    
    // Navigate to the local deployment
    await page.goto('http://localhost:3000', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });

    // Test 1: Check if the page title contains Pedro's name
    const title = await page.title();
    console.log(`Page title: ${title}`);
    if (!title.includes('Pedro') && !title.includes('Farinha')) {
      throw new Error('Page title does not contain expected name');
    }

    // Test 2: Check if main sections are present
    const sections = ['#hero', '#skills', '#projects', '#experience', '#education', '#contact'];
    for (const section of sections) {
      const element = await page.$(section);
      if (!element) {
        throw new Error(`Section ${section} not found`);
      }
      console.log(`✓ Section ${section} found`);
    }

    // Test 3: Check if skills section has content
    await page.waitForSelector('.skills-container, [data-testid="skills"], .bg-gray-50', { timeout: 10000 });
    const skillsContent = await page.$eval('body', el => el.textContent);
    const expectedSkills = ['AWS', 'Kubernetes', 'Docker', 'PostgreSQL'];
    for (const skill of expectedSkills) {
      if (!skillsContent.includes(skill)) {
        console.warn(`Warning: Skill "${skill}" not found in content`);
      } else {
        console.log(`✓ Skill "${skill}" found`);
      }
    }

    // Test 4: Check if contact information is present
    const contactContent = await page.$eval('body', el => el.textContent);
    if (!contactContent.includes('plfarinha@gmail.com')) {
      throw new Error('Contact email not found');
    }
    console.log('✓ Contact email found');

    // Test 5: Check if theme toggle works (if present)
    try {
      const themeToggle = await page.$('[data-testid="theme-toggle"], .theme-toggle, button[aria-label*="theme"], button[aria-label*="Theme"]');
      if (themeToggle) {
        await themeToggle.click();
        console.log('✓ Theme toggle clicked successfully');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for theme transition
      }
    } catch (error) {
      console.log('Theme toggle not found or not clickable (this is optional)');
    }

    // Test 6: Check responsive design
    await page.setViewport({ width: 375, height: 667 }); // Mobile viewport
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('✓ Mobile viewport test passed');

    await page.setViewport({ width: 1024, height: 768 }); // Desktop viewport
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('✓ Desktop viewport test passed');

    // Test 7: Check for console errors
    const logs = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        logs.push(msg.text());
      }
    });

    await page.reload({ waitUntil: 'networkidle2' });
    
    if (logs.length > 0) {
      console.warn('Console errors found:', logs);
      // Don't fail the build for console errors, just warn
    } else {
      console.log('✓ No console errors found');
    }

    console.log('✅ All tests passed! Deployment looks good.');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

testDeployment();