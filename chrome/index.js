

const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');

(async ()=>{

    const url = 'https://chromestatus.com/features';

    // Use Puppeteer to launch headful Chrome
    // - Omit `--enable-automation` (See https://github.com/GoogleChrome/lighthouse/issues/12988)
    // - Don't use 800x600 default viewport
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      ignoreDefaultArgs: ['--enable-automation']
    });
    const page = await browser.newPage();
    
    // Wait for Lighthouse to open url, then inject our stylesheet.
    browser.on('targetchanged', async target => {
      if (page && page.url() === url) {
        await page.addStyleTag({content: '* {color: red}'});
      }
    });
    
    // Lighthouse will open the URL.
    // Puppeteer will observe `targetchanged` and inject our stylesheet.
    const {lhr} = await lighthouse(url, undefined, undefined, page);
    
    console.log(`Lighthouse scores: ${Object.values(lhr.categories).map(c => c.score).join(', ')}`);
    
})()
