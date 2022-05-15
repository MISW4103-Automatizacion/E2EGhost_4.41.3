const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");
const assert = require("assert");
let json = require('../../../properties.json');

let nuevoTag = faker.name.jobType();
let modificadoTag = faker.name.jobType();

When ("Capturo imagen {string}", async function(escenario){
  let body = await this.driver.$('/html/body');
  await body.saveScreenshot('./reports/Ghost_' + json.VersionEnPrueba + '_' + escenario + '.png');
})
