const staffAplicacionCrear = function (cy, email, tipo) {
    cy.xpath('/html/body/div[2]/div/main/section/div/header/section/button').click() // people
    cy.wait(1000)
    cy.get('#new-user-email').type(email)
    switch(tipo) {
        case 'Contributor':
            if (Cypress.env('VersionEnPrueba') != 1) {
                cy.xpath('/html/body/div[4]/div/div/div/div/div[2]/section/div[1]/fieldset/div[2]/div[1]').click()
            } else {
                cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[1]').click()
            }    
            break;
        case 'Autor':
            if (Cypress.env('VersionEnPrueba') != 1) {
                cy.xpath('/html/body/div[4]/div/div/div/div/div[2]/section/div[1]/fieldset/div[2]/div[2]').click()
            } else {
                cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[2]').click()
            }            
            break;
        case 'Editor':
            if (Cypress.env('VersionEnPrueba') != 1) {
                cy.xpath('/html/body/div[4]/div/div/div/div/div[2]/section/div[1]/fieldset/div[2]/div[5]').click()
            } else {
                cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[3]').click()
            }
            break;
        case 'Administrador':
            if (Cypress.env('VersionEnPrueba') != 1) {
                cy.xpath('/html/body/div[4]/div/div/div/div/div[2]/section/div[1]/fieldset/div[2]/div[4]').click()
            } else {
                cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[4]').click()    
            }
            break;
    }
    if (Cypress.env('VersionEnPrueba') != 1) {
        cy.xpath('/html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button').click() // invitar ahora
    } else {
        cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[2]/button').click() // invitar ahora
    }        
};
module.exports = {staffAplicacionCrear: staffAplicacionCrear};