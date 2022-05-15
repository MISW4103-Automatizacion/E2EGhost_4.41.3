const tagAplicacionCrear = function (cy, nameTag) {
    cy.xpath('/html/body/div[2]/div/main/section/div/header/section/a').click() // NewTag
    cy.wait(3000)
    cy.get('#tag-name').type(nameTag)
    cy.xpath('/html/body/div[2]/div/main/section/form/div[1]/header/section/button/span').click() // Save
}
module.exports = {tagAplicacionCrear: tagAplicacionCrear};