import { test, expect } from '@playwright/test';

test('wadiz main connection', async ({ page }) => {
  await page.goto('https://www.wadiz.kr');
  await expect(page).toHaveURL(/wadiz/i);
});


test('로그인 버튼 찾기', async ({page}) => {

}
  await page.goto('/');
  const cosent = page.getbyRole('button', {name:/로그인/i});