const staffAplicacionEliminar = function (cy, email) {
    cy.wait(3000)
    cy.get('div.apps-grid').then(($div) => {
        if($div.length > 0) {
            for(let i = 0; i <= $div[0].children.length -1; i++) {   
                if($div[0].children[i].innerText.includes(email)) {
                    if($div[0].children[i].getElementsByTagName('article').length > 0){
                        if($div[0].children[i].getElementsByTagName('article')[0].querySelectorAll('a.apps-configured-action.red-hover')[0].innerText == 'REVOKE') {
                            return $div[0].children[i].getElementsByTagName('article')[0].querySelectorAll('a.apps-configured-action.red-hover')[0]
                        }
                    }
                }
            }
        }
      }).click()
    cy.wait(3000)
};
module.exports = {staffAplicacionEliminar: staffAplicacionEliminar};