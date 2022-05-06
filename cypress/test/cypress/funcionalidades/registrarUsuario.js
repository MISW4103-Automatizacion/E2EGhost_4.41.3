const registerUser = function (cy, titleBlog, fullName, email, password) {
    cy.get('#blog-title').type(titleBlog)
    cy.get('#name').type(fullName)
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#ember9').click()
    cy.xpath('/html/body/div[2]/div/main/div/main/div[1]/div/div/div/div/header/h1').should('contain', 'All done!')
    cy.get('#ember24').click()
};
module.exports = { registerUser: registerUser };