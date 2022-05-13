const postAplicacionIrPrimerPost = function(cy, escenario,tomarScreenshot) {
    cy.xpath('//html/body/div[2]/div/main/section/section/ol/li[2]/a[1]').click();
    cy.wait(1000);
}
module.exports = {postAplicacionIrPrimerPost: postAplicacionIrPrimerPost}