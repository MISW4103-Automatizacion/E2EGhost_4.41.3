const { Given, When, Then } = require('@cucumber/cucumber');

Given('Ir a la aplicacion Ghost {kraken-string}', async function (url) {
    return await this.driver.url(url);
});
