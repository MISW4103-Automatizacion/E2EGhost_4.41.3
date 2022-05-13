const postAplicacionModificar = function (cy, titulo) {
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea').clear();
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea').type(titulo);
};
module.exports = {postAplicacionModificar, postAplicacionModificar};