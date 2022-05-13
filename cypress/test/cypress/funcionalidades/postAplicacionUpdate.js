const postAplicacionUpdate = function (cy) {
    cy.xpath('/html/body/div[2]/div/main/div/section/header/section/div[1]/div[1]').click();
    cy.xpath('/html/body/div[1]/div/footer/button[2]').click();
    cy.wait(8000);
};
module.exports = {postAplicacionUpdate: postAplicacionUpdate};