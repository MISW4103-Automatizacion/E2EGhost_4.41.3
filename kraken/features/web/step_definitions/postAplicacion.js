const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { faker } = require('@faker-js/faker');

titulo = '';
texto = faker.lorem.paragraph();

When('Doy click en el boton New Post', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[2]');
    return await element.click();  
});


When('Escribo el titulo del post', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea');
    titulo = faker.lorem.sentence();
    return await element.setValue(titulo);
});

When('Escribo el texto del post', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div');
    return await element.setValue(texto);
});

When('Doy click en el menu de publicar post', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/section/div[2]/div[1]');
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.click();
});

When('Doy click en el boton Publish post', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/footer/button[2]');
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.click();
});

When('Doy click en la confirmacion de la publicacion del post', async function () {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]'); 
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.click();
});

When('Doy click en el boton Post', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/div/div[1]/a'); 
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.click();
});

When('Voy a la pagina de visualizacion {kraken-string}', async function (url) {
    return await this.driver.url(url);
});

When('Doy click en el boton Posts', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[1]');
    return await element.click();
});

When('Doy click en el post recien creado', async function(){
    let element = await this.driver.$('//html/body/div[2]/div/main/section/section/ol/li[2]/a[1]');
    return await element.click();
});

When('Borro el titulo del post', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div');
    return await element.setValue('');
}); 

When('Doy click en el menu de update post', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/section/div[1]/div[1]');
    let isExisting = await element.isExisting();
    if(isExisting)
        return await element.click();
});

When('Doy click en el boton Update post', async function(){
    let element = await this.driver.$('/html/body/div[1]/div/footer/button[2]');
    return await element.click();
});

When('Doy click en el boton settings del post', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/button');
    return await element.click();
});

When('Doy click en delete post', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/div/div/div/div/div[2]/form/button');
    return await element.click();
});

When('Doy click en confirmacion delete post', async function(){
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]');
    return await element.click();
});      

Then('Debe aparecer el post creado en la pagina', async function () {
    isMostrar = true;
    let i = 1;
    while(isMostrar) {
        let element = await this.driver.$('/html/body/div[1]/div/main/div/div/article['+ i +']/div/a/header/h2');
        let isExisting = await element.isExisting();
        if(isExisting) {
            let tituloSave = await element.getText();
            if(tituloSave == titulo) {
                return assert.equal(tituloSave, titulo);
            } else {
                i++;
            }
        } else {
            return assert.equal('', titulo);
        }
    }
});

Then('Debe desaparecer el post creado en la pagina', async function () {
    isMostrar = true;
    let i = 1;
    while(isMostrar) {
        let element = await this.driver.$('/html/body/div[1]/div/main/div/div/article['+ i +']/div/a/header/h2');
        let isExisting = await element.isExisting();
        if(isExisting) {
            let tituloSave = await element.getText();
            if(tituloSave == titulo) {
                return assert.notEqual(tituloSave, titulo);
            } else {
                i++;
            }
        } else {
            return assert.notEqual('', titulo);
        }
    }
});