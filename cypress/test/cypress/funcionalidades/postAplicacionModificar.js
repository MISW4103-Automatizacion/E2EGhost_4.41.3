const postAplicacionModificar = function (cy, titulo) {
    cy.wait(2000);
    cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[1]').click();
    cy.wait(3000);
    cy.xpath('//html/body/div[2]/div/main/section/section/ol/li[2]/a[1]').click();
    cy.wait(2000)
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea').clear();
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea').type(titulo);
    cy.xpath('/html/body/div[2]/div/main/div/section/header/section/div[1]/div[1]').click();
    cy.xpath('/html/body/div[1]/div/footer/button[2]').click();
    cy.wait(8000);
    cy.xpath('/html/body/div[2]/div/main/div/section/header/div/div[1]/a').click();
    cy.wait(1000)
};
module.exports = {postAplicacionModificar, postAplicacionModificar};