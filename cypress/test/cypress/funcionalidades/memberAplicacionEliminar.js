const memberAplicacionEliminar = function (cy) {
    
    if(Cypress.env('VersionEnPrueba')==1){
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
    cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario22_DeleteMemberA')
  
    cy.wait(3000);

  
    
    
    // Click Delete Member
    cy.xpath("//span[@class='red'][contains(.,'Delete member')]").click();
    cy.wait(2000);
    cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario22_DeleteMemberB')
    cy.wait(5000);
           
    // Click Delete Member
    cy.xpath("(//span[contains(.,'Delete member')])[3]").click();
    cy.wait(3000);    
    }

    if(Cypress.env('VersionEnPrueba')==2){

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
        cy.xpath("//span[contains(.,'Save')]").click();
        cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario22_DeleteMemberA')
        cy.wait(3000);
        
        
        // Click Delete Member
        cy.xpath("//span[contains(.,'Delete member')]").click();


    
        cy.wait(2000);
        cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario22_DeleteMemberB')
        cy.wait(5000);
               
        // Click Delete Member
        cy.xpath("(//span[contains(.,'Delete member')])[2]").click();
        cy.wait(3000);   

    }


};
module.exports = {memberAplicacionEliminar: memberAplicacionEliminar};