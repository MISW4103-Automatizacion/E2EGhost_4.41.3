const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");
const assert = require("assert");
const { debug } = require("console");

nuevoTag = faker.name.jobType();
modificadoTag = faker.name.jobType();

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
  isMostrar = true;
  let i = 2;
  let tagSave;
  while (isMostrar) {
    let element = await this.driver.$(
      "/html/body/div[2]/div/main/section/section/ol/li[" + i + "]/a[1]/h3"
    );
    let isExisting = await element.isExisting()

    if (isExisting)  {
        tagSave = await element.getText();
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
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/h3"
  );
  return await element.click();
});

When("Escribo el nombre del tag modificado", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[1]/input"
  );
  return await element.setValue(modificadoTag);
});

Then("Debe aparecer el Tag modificado en la lista", async function () {
  isMostrar = true;
  let i = 2;
  let tagSave;
  while (isMostrar) {
    let element = await this.driver.$(
      "/html/body/div[2]/div/main/section/section/ol/li[" + i + "]/a[1]/h3"
    );
    
    let isExisting = await element.isExisting()

    if (isExisting)  {
        tagSave = await element.getText();
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
  let element = await this.driver.$(
    "/html/body/div[5]/div/div/div/div/div[2]/section/div[2]/button[2]/span"
  );
  return await element.click();
});

Then("No debe aparecer el Tag eliminado en la lista", async function () {
  isMostrar = true;
  let i = 2;
  let tagSave;

  while (isMostrar) {
    let element = await this.driver.$("/html/body/div[2]/div/main/section/section/ol/li[" + i + "]/a[1]/h3");
    let isExisting = await element.isExisting()

    if (isExisting) {
        tagSave = await element.getText();
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
