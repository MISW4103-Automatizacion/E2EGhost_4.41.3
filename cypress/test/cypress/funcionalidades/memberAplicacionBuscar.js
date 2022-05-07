const memberAplicacionBuscar = function (cy, email, esperado) {
    
    cy.get('tbody.ember-view').then(($div) => {
        if($div.length > 0) {
            for(let i = 0; i <= $div[0].children.length -1; i++) {
                if($div[0].children[i].innerText.includes(email)) {
                    return true;
                }
            }
            return false;
        }
      }).should('eq', esperado)
};
module.exports = {memberAplicacionBuscar: memberAplicacionBuscar};