

const { Given, When, Then } = require("@cucumber/cucumber");

let json = require('../../../properties.json');


const { faker } = require('@faker-js/faker');

let mail;
let name;
let label; 
let note;

let new_mail;
let new_name; 
let new_note;


if(json.isRegresionVisual!=true){
     mail = faker.internet.email();
     name = faker.name.findName();
     label = faker.company.bs();
     note = faker.company.bs();

     new_mail = faker.internet.email();
     new_name = faker.name.findName();
     new_note = faker.company.bs();
}
else{
    mail = "prueba_member_kraken@gmail.com";
    name = "Prueba Member Kraken";
    label = "Label Prueba Member Kraken";
    note = "Note Prueba Member Kraken";

    new_mail = "new_prueba_member_kraken@gmail.com";
    new_name = "Prueba Member Kraken changed";
    new_note = "Note Prueba Member Kraken changed";

}

if(json.VersionEnPrueba==1){
When('Escenario23 Doy click en member', async function() {
    let element = await this.driver.$("(//a[@href='#/members/'])[1]");
    return await element.click();
})

When('Escenario23 Doy click en newMember', async function() {
    let element = await this.driver.$("//span[contains(.,'New member')]");
    return await element.click();
})

When('Escenario23 Escribo el nombre', async function () {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
});


When('Escenario23 Escribo el nuevo nombre', async function () {
    let element = await this.driver.$('#member-name');
    return await element.setValue(new_name);
});

When('Escenario23 Escribo el nuevo email', async function () {
    let element = await this.driver.$('#member-email');
    return await element.setValue(new_mail);
});

When('Escenario23 Escribo una nueva nota', async function () {
    let element = await this.driver.$('#member-note');
    return await element.setValue(new_note);
});


When('Escenario23 Escribo el email', async function () {
    let element = await this.driver.$('#member-email');
    return await element.setValue(mail);
});

When('Escenario23 Doy click en Label', async function() {
    let element = await this.driver.$("(//div[@tabindex='0'])[2]");
    return await element.click();
});

When('Escenario23 Escribo el Label', async function () {
    let element = await await this.driver.$("(//div[@tabindex='0'])[2]");
    return await element.setValue(label);
});

When('Escenario23 Escribo una nota', async function () {
    let element = await this.driver.$('#member-note');
    return await element.setValue(note);
});

When('Escenario23 Doy click en save', async function() {
    let element = await this.driver.$("//span[contains(.,'Save')]");


    let body = await this.driver.$('/html/body');
    

    return await element.click();


});


Then("Escenario23 Debe aparecer el Member en la lista y lo selecciono", async function () {
    isMostrar = true;
    let i = 2;
    let memberSave;
    let elementoEliminar = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]');
    await elementoEliminar.click();  
    let body = await this.driver.$('/html/body');
    
     

  });


When('Escenario23 Doy click en boton settings', async function() {
    let element = await this.driver.$("/html/body/div[2]/div/main/section/div[1]/header/section/span/button");
    return await element.click();
});


When('Escenario23 Doy click en Delete Member', async function() {

    let element = await this.driver.$("//span[@class='red'][contains(.,'Delete member')]");
    return await element.click();
});


When('Escenario23 Doy click en Confirm Delete Member', async function() {
    let body = await this.driver.$('/html/body/div[5]/div/div/div/div/div[2]/section');
    
    let element = await this.driver.$("(//span[contains(.,'Delete member')])[3]");
    return await element.click();
});

When('Escenario23 Doy click en unsubscribe', async function() {
    let element = await this.driver.$("//span[@class='input-toggle-component']");
    return await element.click();
});

}




if(json.VersionEnPrueba==2){
    When('Escenario23 Doy click en member', async function() {
        let element = await this.driver.$("(//a[@href='#/members/'])[1]");
        return await element.click();
    })
    
    When('Escenario23 Doy click en newMember', async function() {
        let element = await this.driver.$("//span[contains(.,'New member')]");
        return await element.click();
    })
    
    When('Escenario23 Escribo el nombre', async function () {
        let element = await this.driver.$('#member-name');
        return await element.setValue(name);
    });
    
    
    When('Escenario23 Escribo el nuevo nombre', async function () {
        let element = await this.driver.$('#member-name');
        return await element.setValue(new_name);
    });
    
    When('Escenario23 Escribo el nuevo email', async function () {
        let element = await this.driver.$('#member-email');
        return await element.setValue(new_mail);
    });
    
    When('Escenario23 Escribo una nueva nota', async function () {
        let element = await this.driver.$('#member-note');
        return await element.setValue(new_note);
    });
    
    
    When('Escenario23 Escribo el email', async function () {
        let element = await this.driver.$('#member-email');
        return await element.setValue(mail);
    });
    
    When('Escenario23 Doy click en Label', async function() {
        let element = await this.driver.$("(//div[@tabindex='0'])[2]");
        return await element.click();
    });
    
    When('Escenario23 Escribo el Label', async function () {
        let element = await await this.driver.$("(//div[@tabindex='0'])[2]");
        return await element.setValue(label);
    });
    
    When('Escenario23 Escribo una nota', async function () {
        let element = await this.driver.$('#member-note');
        return await element.setValue(note);
    });
    
    When('Escenario23 Doy click en save', async function() {
        let element = await this.driver.$("//span[contains(.,'Save')]");
    
    
        let body = await this.driver.$('/html/body');
        
    
        return await element.click();
    
    
    });
    
    
    Then("Escenario23 Debe aparecer el Member en la lista y lo selecciono", async function () {
        isMostrar = true;
        let i = 2;
        let memberSave;
        let elementoEliminar = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]');
        await elementoEliminar.click();  
        let body = await this.driver.$('/html/body');
        
         
    
      });
    
    
        When('Escenario23 Doy click en boton settings', async function() {
            console.log("paso")
        });
        
    
    When('Escenario23 Doy click en Delete Member', async function() {
    
        let element = await this.driver.$("/html/body/div[2]/div/main/section/div[2]/div/div/button/span");
        return await element.click();
    });
    
    
    When('Escenario23 Doy click en Confirm Delete Member', async function() {
        let body = await this.driver.$('/html/body/div[4]/div/div/div/div/div[2]/section');
        
        let element = await this.driver.$("/html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]/span");
        return await element.click();
    });
    
    When('Escenario23 Doy click en unsubscribe', async function() {
        let element = await this.driver.$("//span[@class='input-toggle-component']");
        return await element.click();
    });
    
    }


