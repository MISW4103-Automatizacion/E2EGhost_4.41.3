const postAplicacionEliminar = function(cy) {
    cy.wait(1000);
    cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[1]').click();
    cy.wait(1000);
    cy.xpath('//html/body/div[2]/div/main/section/section/ol/li[2]/a[1]').click();
    cy.xpath('/html/body/div[2]/div/main/button').click();
    cy.xpath('/html/body/div[2]/div/main/div/div/div/div/div[2]/form/button').click();
    cy.xpath('html/body/div[5]/div/div/div[2]/button[2]').click();
    cy.wait(2000);
};
module.exports = {postAplicacionEliminar: postAplicacionEliminar};