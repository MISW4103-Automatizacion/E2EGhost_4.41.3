const postAplicacionComprobar = function (cy,titulo,siExiste){
    let tituloSave='' ;
    cy.visit(Cypress.env('URLMAIN'));
    cy.wait(4000); 
    cy.get("body").then($body => {
        if ($body.find("article").length > 0) {
            tituloSave= cy.xpath('/html/body/div[1]/div/main/div/div/article[1]/div/a/header/h2').then(
                        ($postPublicado) => {
                            return $postPublicado[0].outerText});
        } 
        if (siExiste == true){
            return tituloSave.should('eq', titulo);
        }else{
            return tituloSave.should('not.eq',titulo)
        }     
    });
};
module.exports = {postAplicacionComprobar: postAplicacionComprobar};