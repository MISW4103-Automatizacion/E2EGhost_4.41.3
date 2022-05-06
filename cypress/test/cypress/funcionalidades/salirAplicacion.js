const salirAplicacion = function (cy) {
    cy.wait(1000)
    cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[1]/div[1]/div').click()
    cy.xpath('/html/body/div[1]/div/ul/li[9]/a').click()
};
module.exports = { salirAplicacion: salirAplicacion };