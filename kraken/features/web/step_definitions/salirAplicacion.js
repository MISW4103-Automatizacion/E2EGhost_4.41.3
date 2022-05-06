const { Given, When, Then } = require('@cucumber/cucumber');

When('Doy click en el boton del avatar inferior', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[1]/div[1]/div');
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.click();
});

When('Doy click en el menu Sign out', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/ul/li[9]/a');
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.click();
});