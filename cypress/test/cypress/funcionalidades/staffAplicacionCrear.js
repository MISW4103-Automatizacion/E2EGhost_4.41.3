const staffAplicacionCrear = function (cy, email, tipo) {
    cy.xpath('/html/body/div[2]/div/main/section/div/header/section/button').click() // people
    cy.wait(1000)
    cy.get('#new-user-email').type(email)
    switch(tipo) {
        case 'Contributor':
            cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[1]').click()
            break;
        case 'Autor':
            cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[2]').click()
            break;
        case 'Editor':
            cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[3]').click()
            break;
        case 'Administrador':
            cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[4]').click()
            break;
    }
    cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div/div[2]/button').click() // invitar ahora
};
module.exports = {staffAplicacionCrear: staffAplicacionCrear};