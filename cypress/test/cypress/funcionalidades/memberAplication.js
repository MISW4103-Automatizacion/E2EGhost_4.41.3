const memberAplicacion = function (cy) {
    cy.wait(2000)
    cy.xpath("/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a").click() // settings
    cy.wait(2000)
   

 
};
module.exports = {memberAplicacion: memberAplicacion};