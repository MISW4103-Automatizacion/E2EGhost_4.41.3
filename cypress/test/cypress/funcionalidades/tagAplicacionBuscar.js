const tagAplicacionBuscar = function (cy, nameTag, nameTagEsperado) {
    cy.xpath('/html/body/div[2]/div/main/section/section/ol').then(($div) => {
        if($div.length > 0) {
            for(let i = 0; i <= $div[0].children.length -1; i++) {
                if($div[0].children[i].innerText.includes(nameTag)) {
                    return true;
                }
            }
            return false;
        }
      })
};
module.exports = {tagAplicacionBuscar: tagAplicacionBuscar};