const postAplicacionCrear = function(cy, title, body) {
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea').type(title);
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div').type(body);
    cy.wait(1000);
};
module.exports = {postAplicacionCrear: postAplicacionCrear};