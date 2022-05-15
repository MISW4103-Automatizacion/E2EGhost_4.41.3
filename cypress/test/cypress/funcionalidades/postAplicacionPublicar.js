const postAplicacionPublicar = function (cy) {
    cy.xpath('/html/body/div[2]/div/main/div/section/header/section/div[2]/div[1]').click();
    cy.xpath('/html/body/div[1]/div/footer/button[2]').click();
    cy.wait(1000);
    if (Cypress.env('VersionEnPrueba')==1){
        cy.xpath('/html/body/div[5]/div/div/div[2]/button[2]').click();
    } else {
        cy.xpath('/html/body/div[4]/div/div/div[2]/button[2]').click();
    }
    cy.wait(8000);
};
module.exports = {postAplicacionPublicar: postAplicacionPublicar}