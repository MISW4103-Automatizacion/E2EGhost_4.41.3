const tagAplicacionEliminar = function (cy, nameTag) {
    cy.wait(1000)
    if (Cypress.env('VersionEnPrueba') == 1) {
        cy.xpath('/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/h3').click() // Primer tag creado
    } else {
        cy.xpath('/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]/h3').click()
    } 
    cy.wait(1000)
    cy.xpath('/html/body/div[2]/div/main/section/div/button/span').click() //Delete tag
    cy.wait(1000)
    if (Cypress.env('VersionEnPrueba') == 1) {
        cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/section/div[2]/button[2]/span').click() // Delete
    } else {
        cy.xpath('/html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]/span').click()
    } 
}
module.exports = {tagAplicacionEliminar: tagAplicacionEliminar};