const memberAplicacion = function (cy) {
    cy.wait(2000)
    cy.xpath("(//a[@href='#/members/'])[1]").click() // settings
    cy.wait(2000)
 
};
module.exports = {memberAplicacion: memberAplicacion};