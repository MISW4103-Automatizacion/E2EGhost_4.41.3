const postAplicacionSalirCrearPost = function (cy) {
    cy.xpath('/html/body/div[2]/div/main/div/section/header/div/div[1]/a').click();
    cy.wait(1000)
};
module.exports = {postAplicacionSalirCrearPost: postAplicacionSalirCrearPost}