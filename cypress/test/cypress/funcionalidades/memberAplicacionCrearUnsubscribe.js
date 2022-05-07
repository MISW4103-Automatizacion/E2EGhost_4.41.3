const memberAplicacionCrearUnsubscribe = function (cy, name, email, note) {
    
    cy.xpath("//span[contains(.,'New member')]").should("be.visible").click();
    cy.wait(1000)   

    // cy.xpath("(//a[@href='#/members/'])[1]").click() // member
    cy.get('#member-name').type(name)
    cy.get('#member-email').type(email)
    cy.get('#member-note').type(note)

    cy.xpath("//span[@class='input-toggle-component']").should("be.visible").click()
    cy.wait(3000);

    cy.xpath("//span[contains(.,'Save')]").should("be.visible").click()
    cy.wait(1000);

    // cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[2]/button').click() // invitar ahora
};
module.exports = {memberAplicacionCrearUnsubscribe: memberAplicacionCrearUnsubscribe};