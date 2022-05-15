const loginUser = function (cy, email, password) {
    cy.get('#ember7').type(email)
    cy.get('#ember9').type(password)
    cy.get('#ember11').click()
    //cy.get('h2.gh-canvas-title').should('contain', 'Dashboard')
};
module.exports = {loginUser: loginUser};