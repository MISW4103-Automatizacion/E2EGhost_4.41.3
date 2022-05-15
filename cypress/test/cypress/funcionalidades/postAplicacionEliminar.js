const postAplicacionEliminar = function(cy) {
    cy.xpath('/html/body/div[2]/div/main/button').click();
    cy.xpath('/html/body/div[2]/div/main/div/div/div/div/div[2]/form/button').click();
    if (Cypress.env('VersionEnPrueba')==1){
        cy.xpath('html/body/div[5]/div/div/div[2]/button[2]').click();
    } else {
        cy.xpath('/html/body/div[4]/div/div/div[2]/button[2]').click();
    }
    cy.wait(2000);
};

module.exports = {postAplicacionEliminar: postAplicacionEliminar};