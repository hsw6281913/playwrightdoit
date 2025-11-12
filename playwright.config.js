/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  use: {
    baseURL: 'https://www.wadiz.kr',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};
