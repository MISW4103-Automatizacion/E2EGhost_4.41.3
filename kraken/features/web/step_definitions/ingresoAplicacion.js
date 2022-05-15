const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('Escribo el email login {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);     
});

When('Escribo el password login {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember9');
    return await element.setValue(password);
});

When('Doy clic en el boton Sing In', async function () {
    let element = await this.driver.$('#ember11');
    return await element.click();  
});

Then('Deberia ver la palabra {string} en el página principal', async function (title) {
    let element = await this.driver.$('h2.gh-canvas-title');
    
    return assert.equal(await element.getText(), title);
});