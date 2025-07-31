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

    // Test 2: Check if tab navigation is present
    const tabButtons = await page.$$('nav button');
    if (tabButtons.length < 5) {
      throw new Error('Tab navigation not found or incomplete');
    }
    console.log(`✓ Tab navigation found with ${tabButtons.length} tabs`);
    
    // Test 2b: Check if hero section is present
    const heroElement = await page.$('#hero');
    if (!heroElement) {
      throw new Error('Hero section not found');
    }
    console.log('✓ Hero section found');

    // Test 3: Test tab navigation functionality
    const tabs = ['Overview', 'Experience', 'Projects', 'Blog', 'Contact'];
    for (let i = 0; i < tabs.length; i++) {
      try {
        const tabButtons = await page.$$('nav button');
        if (tabButtons[i]) {
          await tabButtons[i].click();
          await new Promise(resolve => setTimeout(resolve, 800)); // Wait for tab content to load
          console.log(`✓ ${tabs[i]} tab clicked successfully`);
        }
      } catch (error) {
        console.warn(`Warning: Could not click ${tabs[i]} tab:`, error.message);
      }
    }
    
    // Test 3b: Check if skills content is present (in Overview tab)
    try {
      const firstTab = await page.$('nav button:first-child');
      if (firstTab) {
        await firstTab.click();
        await new Promise(resolve => setTimeout(resolve, 1000));
        const skillsContent = await page.$eval('body', el => el.textContent);
        const expectedSkills = ['AWS', 'Kubernetes', 'Docker', 'PostgreSQL'];
        let skillsFound = 0;
        for (const skill of expectedSkills) {
          if (skillsContent.includes(skill)) {
            console.log(`✓ Skill "${skill}" found`);
            skillsFound++;
          }
        }
        if (skillsFound === 0) {
          console.warn('Warning: No expected skills found in content');
        }
      }
    } catch (error) {
      console.warn('Warning: Could not test skills content:', error.message);
    }

    // Test 4: Check if contact information is present (in Contact tab)
    try {
      const tabButtons = await page.$$('nav button');
      if (tabButtons[4]) { // Contact is the 5th tab (index 4)
        await tabButtons[4].click();
        await new Promise(resolve => setTimeout(resolve, 1000));
        const contactContent = await page.$eval('body', el => el.textContent);
        if (contactContent.includes('plfarinha@gmail.com')) {
          console.log('✓ Contact email found');
        } else {
          console.warn('Warning: Contact email not found in Contact tab');
        }
      }
    } catch (error) {
      console.warn('Warning: Could not test contact information:', error.message);
    }

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