const postAplicacionPosts = function(cy) {
    cy.wait(1000);
    cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[1]').click();
    cy.wait(1000);
}
module.exports = {postAplicacionPosts: postAplicacionPosts}