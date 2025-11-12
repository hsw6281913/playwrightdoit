import { test, expect } from '@playwright/test';
import { timeout } from './playwright.config';

test('wadiz main connection', async ({ page }) => {
  await page.goto('https://www.wadiz.kr');
  await expect(page).toHaveURL(/wadiz/i);
});


test('로그인 버튼 찾기', async ({page}) => {
  await page.goto('/');
  await page.waitForSelector('text=로그인/회원가입', { timeout: 15000});
  const loginbtn = page.getByRole('button', {name:/로그인\/회원가입/i});
  await expect(loginbtn).toBeVisible();
})