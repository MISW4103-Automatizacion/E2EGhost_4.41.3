

const { Given, When, Then } = require("@cucumber/cucumber");

const { faker } = require('@faker-js/faker');
let mail = faker.internet.email();
let name = faker.name.findName();
let label = faker.company.bs();
let note = faker.company.bs();

let new_mail = faker.internet.email();
let new_name = faker.name.findName();
let new_note = faker.company.bs();


When('Doy click en member', async function() {
    let element = await this.driver.$("(//a[@href='#/members/'])[1]");
    return await element.click();
})

When('Doy click en newMember', async function() {
    let element = await this.driver.$("//span[contains(.,'New member')]");
    return await element.click();
})

When('Escribo el nombre', async function () {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
});


When('Escribo el nuevo nombre', async function () {
    let element = await this.driver.$('#member-name');
    return await element.setValue(new_name);
});

When('Escribo el nuevo email', async function () {
    let element = await this.driver.$('#member-email');
    return await element.setValue(new_mail);
});

When('Escribo una nueva nota', async function () {
    let element = await this.driver.$('#member-note');
    return await element.setValue(new_note);
});


When('Escribo el email', async function () {
    let element = await this.driver.$('#member-email');
    return await element.setValue(mail);
});

When('Doy click en Label', async function() {
    let element = await this.driver.$("(//div[@tabindex='0'])[2]");
    return await element.click();
});

When('Escribo el Label', async function () {
    let element = await await this.driver.$("(//div[@tabindex='0'])[2]");
    return await element.setValue(label);
});

When('Escribo una nota', async function () {
    let element = await this.driver.$('#member-note');
    return await element.setValue(note);
});

When('Doy click en save', async function() {
    let element = await this.driver.$("//span[contains(.,'Save')]");
    return await element.click();
});


Then("Debe aparecer el Member en la lista y lo selecciono", async function () {
    isMostrar = true;
    let i = 2;
    let memberSave;

    let elementoEliminar = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]');
    await elementoEliminar.click();  
     

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




When('Doy click en unsubscribe', async function() {
    let element = await this.driver.$("//span[@class='input-toggle-component']");
    return await element.click();
});