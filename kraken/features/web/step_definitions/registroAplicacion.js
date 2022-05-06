const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('Escribo el Site title {kraken-string}', async function (title) {
    let element = await this.driver.$$('#blog-title');
    if(element.length > 0) {
        return await element[0].setValue(title);  
    }
});

When('Escribo el Full name {kraken-string}', async function (name) {
    let element = await this.driver.$$('#name');
    if(element.length > 0) {
        return await element[0].setValue(name);  
    }
});

When('Escribo el Email address {kraken-string}', async function (email) {
    let element = await this.driver.$$('#email');
    if(element.length > 0) {
        return await element[0].setValue(email);
    }
});

When('Escribo el Password {kraken-string}', async function (password) {
    let element = await this.driver.$$('#password');
    if(element.length > 0) {
        return await element[0].setValue(password);
    }
});

When('Doy click on the button Create account & start publishing →', async function () {
    let element = await this.driver.$$('#ember9');
    if(element.length > 0) {
        return await element[0].click();       
    }
});

When('Doy click on the button Explore Ghost admin', async function () {
    let element = await this.driver.$$('#ember24');
    if(element.length > 0) {
        return await element[0].click();
    }
});

Then('Deberia ver la palabra {string} despues de crear el usuario', async function (title) {
    let element = await this.driver.$$('/html/body/div[2]/div/main/div/main/div[1]/div/div/div/div/header/h1');
    if(element.length > 0) {
        return assert.equal(await element[0].getText(), title);
    }
});
