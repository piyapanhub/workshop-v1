const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME)
  .usingServer('http://35.198.193.61:4444/wd/hub')
  .build();
  try {
    await driver.get('http://35.198.193.61:3000/');
    await driver.findElement(By.name('value')).sendKeys('GLI1', Key.RETURN);
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
