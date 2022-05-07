const postAplicacionCrear = function(cy, title, body) {
    cy.wait(1000);
    cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[2]').click();
    cy.wait(1000);
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea').type(title);
    cy.xpath('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div').type(body);
    cy.xpath('/html/body/div[2]/div/main/div/section/header/section/div[2]/div[1]').click();
    cy.xpath('/html/body/div[1]/div/footer/button[2]').click();
    cy.wait(1000);
    cy.xpath('/html/body/div[5]/div/div/div[2]/button[2]').click();
    cy.wait(8000);
    cy.xpath('/html/body/div[2]/div/main/div/section/header/div/div[1]/a').click();
    cy.wait(1000)
};
module.exports = {postAplicacionCrear: postAplicacionCrear};