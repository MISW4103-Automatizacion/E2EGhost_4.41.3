const staffAplicacion = function (cy) {
    cy.wait(1000)
    cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[2]/a').click() // settings
    cy.wait(1000)
    cy.xpath('/html/body/div[2]/div/main/section/section/div[2]/a[4]').click() // staff
    cy.wait(1000)
    cy.xpath('/html/body/div[2]/div/main/section/div/header/h2').should('contain', 'Staff')
    cy.wait(1000)
};
module.exports = {staffAplicacion: staffAplicacion};