const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");
const assert = require("assert");
let json = require('../../../properties.json');

let nuevoTag = faker.name.jobType();
let modificadoTag = faker.name.jobType();

When ("Capturo imagen {string}", async function(escenario){
  let body = await this.driver.$('/html/body');
    // await body.saveScreenshot('screenshots/escenario'+escenario+'/Ghost_' + json.VersionEnPrueba + '_Escenario'+escenario);
    await body.saveScreenshot('./reports/Ghost_' + json.VersionEnPrueba + 'escenario'+escenario+'.png');
})

When("Doy clic en el boton Tags", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[3]/a"
  );
  return await element.click();
});

When("Doy clic en el boton New tag", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/section/div/header/section/a"
  );
  return await element.click();
});

When("Escribo el nombre del tag", async function () {
  if(json.isRegresionVisual == true){
    nuevoTag = 'Tag Prueba';
    modificadoTag = 'Modificado';
  }
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[1]/input"
  );
  return await element.setValue(nuevoTag);
});

When("Doy click en el Boton Save", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/section/form/div[1]/header/section/button/span"
  );
  return await element.click();
});

Then("Debe aparecer el Tag en la lista", async function () {
  if(json.isRegresionVisual == true){
    nuevoTag = 'Tag Prueba';
    modificadoTag = 'Modificado';
  }
  isMostrar = true;
  let i = 2;
  let tagSave;
  while (isMostrar) {
    let element = await this.driver.$$(
      "/html/body/div[2]/div/main/section/section/ol/li[" + i + "]/a[1]/h3"
    );
    
    if (element.length > 0)  {
        tagSave = await element[0].getText();
      if (tagSave == nuevoTag) {
        return assert.equal(tagSave, nuevoTag);
      } else {
        i++;
      }
    } else {
      return assert.equal("", nuevoTag);
    }
  }
});

When("Doy clic en el primer Tag creado", async function () {
  let element;
  if (json.VersionEnPrueba== 1) {
    element = await this.driver.$("/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/h3"); // Primer tag creado
} else {
    element = await this.driver.$("/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]/h3");
} 
  return await element.click();
});

When("Escribo el nombre del tag modificado", async function () {
  if(json.isRegresionVisual == true){
    nuevoTag = 'Tag Prueba';
    modificadoTag = 'Modificado';
  }
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[1]/input"
  );
  return await element.setValue(modificadoTag);
});

Then("Debe aparecer el Tag modificado en la lista", async function () {
  if(json.isRegresionVisual == true){
    nuevoTag = 'Tag Prueba';
    modificadoTag = 'Modificado';
  }
  isMostrar = true;
  let i = 2;
  let tagSave;
  while (isMostrar) {
    let element = await this.driver.$$(
      "/html/body/div[2]/div/main/section/section/ol/li[" + i + "]/a[1]/h3"
    );
    
    if (element.length > 0)  {
        tagSave = await element[0].getText();
      if (tagSave == modificadoTag) {
        return assert.equal(tagSave, modificadoTag);
      } else {
        i++;
      }
    } else {
      return assert.equal("", modificadoTag);
    }
  }
});

When("Doy click en el Boton Delete Tag", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/section/div/button/span"
  );
  return await element.click();
});

When("Doy click en el Boton Delete", async function () {
  let element;
  if (json.VersionEnPrueba== 1) {
      element = await this.driver.$("/html/body/div[5]/div/div/div/div/div[2]/section/div[2]/button[2]/span"); // Delete
} else {
    element = await this.driver.$("/html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]/span");
} 
   return await element.click();
});

Then("No debe aparecer el Tag eliminado en la lista", async function () {
  if(json.isRegresionVisual == true){
    nuevoTag = 'Tag Prueba';
    modificadoTag = 'Modificado';
  }
  isMostrar = true;
  let i = 2;
  let tagSave;

  while (isMostrar) {
    let element = await this.driver.$$("/html/body/div[2]/div/main/section/section/ol/li[" + i + "]/a[1]/h3");

    if (element.length > 0) {
        tagSave = await element[0].getText();
      if (tagSave == nuevoTag) {
        return assert.equal(tagSave, nuevoTag);
      } else {
        i++;
      }
    } else {
      return assert.notEqual("", nuevoTag);
    }
  }
});
