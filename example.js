const { chromium } = require('playwright');

(async () => {
const browser = await chromium.launch({ headless: false }); // headless:false — чтобы видеть окно
const page = await browser.newPage();
await page.goto('https://example.com');
await page.screenshot({ path: 'screenshot.png' });
console.log('Открыл страницу и сделал screenshot.png');
await browser.close();
})();