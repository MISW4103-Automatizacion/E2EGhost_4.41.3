const tagAplicacionModificar = function (cy, nameTag) {
    if (Cypress.env('VersionEnPrueba') == 1) {
        cy.xpath('/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/h3').click() // Primer tag creado
    } else {
        cy.xpath('/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]/h3').click()
    } 
    cy.wait(1000)
    cy.get('#tag-name').type(nameTag)
    cy.xpath('/html/body/div[2]/div/main/section/form/div[1]/header/section/button/span').click() // Save
}
module.exports = {tagAplicacionModificar: tagAplicacionModificar};