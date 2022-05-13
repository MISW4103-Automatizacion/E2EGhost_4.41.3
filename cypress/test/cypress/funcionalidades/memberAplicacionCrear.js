// const memberAplicacionCrear = function (cy, name, email, note) {
    
//     cy.xpath("//span[contains(.,'New member')]").should("be.visible").click();
//     cy.wait(1000)   

//     // cy.xpath("(//a[@href='#/members/'])[1]").click() // member
//     cy.get('#member-name').type(name)
//     cy.get('#member-email').type(email)
//     cy.get('#member-note').type(note)

//     cy.xpath("//span[contains(.,'Save')]").should("be.visible").click()
//     cy.wait(1000);

//     // cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[2]/button').click() // invitar ahora
// };
// module.exports = {memberAplicacionCrear: memberAplicacionCrear};


const memberAplicacionCrear = function (cy, name, email, note) {
    
    // let datetime = new Date();
    // let day=datetime.getDay();
    cy.xpath("/html/body/div[2]/div/main/section/div/header/section/div[2]/a/span").should("be.visible").click();
    cy.wait(1000)   

    // cy.xpath("(//a[@href='#/members/'])[1]").click() // member
    cy.get('#member-name').type(name)
    cy.get('#member-email').type(email)
    cy.get('#member-note').type(note)

    // cy.screenshot(`Escenario21_CrearMember4_41_3_${day}`);

    // cy.xpath("//span[contains(.,'Save')]").should("be.visible").click()

    cy.xpath("//span[@class='input-toggle-component']").should("be.visible").click()
    cy.wait(1000);

    cy.xpath("//span[@class='input-toggle-component']").should("be.visible").click()
    cy.wait(1000);
    cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario21_crear_member')
    cy.wait(1000);

    cy.xpath("/html/body/div[2]/div/main/section/div[1]/header/section/button").should("be.visible").click()
   
    cy.wait(1000);

};
module.exports = {memberAplicacionCrear: memberAplicacionCrear};