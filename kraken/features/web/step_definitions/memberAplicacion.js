

const { Given, When, Then } = require("@cucumber/cucumber");


When('Doy click en member', async function() {
    let element = await this.driver.$("(//a[@href='#/members/'])[1]");
    return await element.click();
})

When('Doy click en newMember', async function() {
    let element = await this.driver.$("//span[contains(.,'New member')]");
    return await element.click();
})

When('Escribo el nombre {kraken-string}', async function (email) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(email);
});

When('Escribo el email {kraken-string}', async function (email) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(email);
});

When('Doy click en Label', async function() {
    let element = await this.driver.$("(//div[@tabindex='0'])[2]");
    return await element.click();
});

When('Escribo el Label {kraken-string}', async function (memberLabel) {
    let element = await await this.driver.$("(//div[@tabindex='0'])[2]");
    return await element.setValue(memberLabel);
});

When('Escribo una nota {kraken-string}', async function (email) {
    let element = await this.driver.$('#member-note');
    return await element.setValue(email);
});

When('Doy click en save', async function() {
    let element = await this.driver.$("//span[contains(.,'Save')]");
    return await element.click();
});

When('Doy click en memberPrueba_1', async function() {
    let element = await this.driver.$("//h3[contains(.,'memberPrueba2022_1')]");
    return await element.click();
});

When('Doy click en memberPrueba_2', async function() {
    let element = await this.driver.$("//h3[contains(.,'memberPrueba2022_2')]");
    return await element.click();
});


When('Doy click en memberPrueba_3', async function() {
    let element = await this.driver.$("//h3[contains(.,'memberPrueba2022_3')]");
    return await element.click();
});

When('Doy click en memberPrueba_4', async function() {
    let element = await this.driver.$("//h3[contains(.,'memberPrueba2022_changed')]");
    return await element.click();
});


When('Doy click en memberPrueba_5', async function() {
    let element = await this.driver.$("//h3[contains(.,'memberPrueba2022_unsubscribed')]");
    return await element.click();
});




When('Doy click en boton settings', async function() {
    let element = await this.driver.$("/html/body/div[2]/div/main/section/div[1]/header/section/span/button");
    return await element.click();
});




When('Doy click en Delete Member', async function() {
    let element = await this.driver.$("//span[@class='red'][contains(.,'Delete member')]");
    return await element.click();
});



When('Doy click en Confirm Delete Member', async function() {
    let element = await this.driver.$("(//span[contains(.,'Delete member')])[3]");
    return await element.click();
});


// When('Doy click en Avatar', async function() {
//     let element = await this.driver.$(".gh-user-avatar");
//     return await element.click();
// });

// When('Doy click en Logout', async function() {
//     let element = await this.driver.$("//a[@tabindex='-1'][contains(.,'Sign out')]");
//     return await element.click();
// });


When('Doy click en unsubscribe', async function() {
    let element = await this.driver.$("//span[@class='input-toggle-component']");
    return await element.click();
});