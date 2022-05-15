const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const assert = require('assert');

mail = faker.internet.email();

When('Doy clic en el boton settings {string}', async function (version) {
    if(version == 1) {
        let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[2]/a');
    } else {

    }
    
    return await element.click();  
});

When('Doy clic en el boton staff {string}', async function (version) {
    if(version == 1) {
        let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[2]/a[4]');
    }
    return await element.click();  
});

When('Doy clic en el boton invite people {string}', async function (version) {
    if(version == 1) {
     let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/button');
    }
    return await element.click();  
});

When('Escribo el correo electronico de la invitacion {string}', async function (version) {
    if(version == 1) {
     let element = await this.driver.$('#new-user-email');
    }
    return await element.setValue(mail);
});

When('Doy click en el radio boton Contributor {string}', async function (version) {
    if(version == 1) {
        let element = await this.driver.$('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[1]');
    }
    return await element.click();
});

When('Doy click en el radio boton Autor {string}', async function (version) {
    if(version == 1) {
        let element = await this.driver.$('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[2]');
    }
    return await element.click();
});

When('Doy click en el radio boton Editor {string}', async function (version) {
    if(version == 1) {
        let element = await this.driver.$('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[3]');
    }
    return await element.click();
});

When('Doy click en el radio boton Administrador {string}', async function (version) {
    if(version == 1) {
        let element = await this.driver.$('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[4]');
    }
    return await element.click();
});

When('Doy click en el boton Send invitation now {string}', async function (version) {
    if(version == 1) {
        let element = await this.driver.$('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[2]/button');
    }
    return await element.click();
});

Then('Debe aparecer el staff en la lista {string},{string}', async function (Esperado, version) {
    isMostrar = true;
    let i = 1;
    let resultado;
    while(isMostrar) {
        if(version == 1) {
            let element = await this.driver.$$('/html/body/div[2]/div/main/section/section/section[1]/div/div['+ i +']/article/div[1]/div/h3');
        }
        if(element.length > 0) {
            let emailSave = await element[0].getText();
            if(emailSave == mail) {
                resultado = 'Exitoso';
                isMostrar = false;
            }
            i++;
        } else {
            resultado = 'No encontrado';
            isMostrar = false;
        }
    }
    return await assert.equal(Esperado, resultado);
});

When('Eliminar un staff creado previamente {string}, {string}', async function (Esperado, version) {
    isMostrar = true;
    let i = 1;
    let resultado;
    while(isMostrar) {
        if(version == 1) {
            let element = await this.driver.$$('/html/body/div[2]/div/main/section/section/section[1]/div/div['+ i +']/article/div[1]/div/h3');
        }
        if(element.length > 0) {
            let emailSave = await element[0].getText();
            if(emailSave == mail) {
                if(version == 1) {
                    let elementoEliminar = await this.driver.$('/html/body/div[2]/div/main/section/section/section[1]/div/div['+ i +']/article/div[2]/div/a[1]');
                }
                await elementoEliminar.click();
                resultado = 'Eliminado';
                isMostrar = false;
            }
            i++;
        } else {
            resultado = 'No encontrado';
            isMostrar = false;
        }
    }
    return await assert.equal(Esperado, resultado);
});