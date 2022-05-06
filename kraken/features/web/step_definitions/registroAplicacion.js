const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('Escribo el Site title {kraken-string}', async function (title) {
    let element = await this.driver.$('#blog-title');
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.setValue(title);
});

When('Escribo el Full name {kraken-string}', async function (name) {
    let element = await this.driver.$('#name');
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.setValue(name);
});

When('Escribo el Email address {kraken-string}', async function (email) {
    let element = await this.driver.$('#email');
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.setValue(email);
});

When('Escribo el Password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.setValue(password);
});

When('Doy click on the button Create account & start publishing →', async function () {
    let element = await this.driver.$('#ember9');
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.click();
});

When('Doy click on the button Explore Ghost admin', async function () {
    let element = await this.driver.$('#ember24');
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.click();
});

Then('Deberia ver la palabra {string} despues de crear el usuario', async function (title) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/main/div[1]/div/div/div/div/header/h1');
    let isExisting = await element.isExisting();
    if(isExisting)
        return assert.equal(await element.getText(), title);
});
