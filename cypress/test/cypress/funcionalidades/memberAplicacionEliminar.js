const memberAplicacionEliminar = function (cy, name) {

    cy.wait(2000)
    cy.xpath("(//a[@href='#/members/'])[1]").click() // settings

    cy.wait(1000)
    cy.get('tbody.ember-view').then(($div) => {
        if($div.length > 0) {
            return cy.xpath(" /html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]")
        }
      }).click()
    cy.wait(1000)

    // Click boton settings
    cy.xpath("/html/body/div[2]/div/main/section/div[1]/header/section/span/button").click();
    cy.wait(3000);
    
    
    // Click Delete Member
    cy.xpath("//span[@class='red'][contains(.,'Delete member')]").click();
    cy.wait(5000);
           
    // Click Delete Member
    cy.xpath("(//span[contains(.,'Delete member')])[3]").click();
    cy.wait(3000);    


};
module.exports = {memberAplicacionEliminar: memberAplicacionEliminar};