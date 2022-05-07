const tagAplicacion = function (cy) {
    cy.wait(1000)
    cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[3]/a').click() // tag
    cy.wait(1000)
    cy.xpath('/html/body/div[2]/div/main/section/div/header/h2').should('contain', 'Tags')
    cy.wait(1000)
};
module.exports = {tagAplicacion: tagAplicacion};