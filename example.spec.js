import { test, expect } from '@playwright/test';
test ('Playwright test demo' , async ({page}) => {
    await page.goto('https://www.naver.com');
    await expect(page).toHaveTitle(/naver/i);
    await page.screenshot({path: 'example.png'});
});
