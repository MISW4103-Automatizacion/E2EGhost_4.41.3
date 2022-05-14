const memberAplicacionModificar = function (cy, new_name, new_email, new_note) {


    cy.wait(1000)
    cy.get('tbody.ember-view').then(($div) => {
        if($div.length > 0) {
            return cy.xpath(" /html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]/a[1]")
        }
      }).click()
    cy.wait(1000)
    

    // cy.xpath("(//a[@href='#/members/'])[1]").click() // member
    cy.get("#member-name").should("be.visible").clear();
    cy.get("#member-email").should("be.visible").clear();
    cy.get("#member-note").should("be.visible").clear();

    cy.get('#member-name').type(new_name)
    cy.get('#member-email').type(new_email)
    cy.get('#member-note').type(new_note)

    cy.xpath("//span[contains(.,'Save')]").should("be.visible").click()
    cy.wait(1000);

    // cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[2]/button').click() // invitar ahora
    cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario23_Modificar_Member')
};
module.exports = {memberAplicacionModificar: memberAplicacionModificar};