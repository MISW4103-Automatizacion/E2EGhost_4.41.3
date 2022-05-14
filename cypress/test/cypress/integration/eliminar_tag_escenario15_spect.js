describe('Escenario 15 Ingresar a la aplicación, si el usuario no existe se crea, se dirige al modulo de tags. Crea un tag y valida la creación. Elimina un tag y valida que no aparezca en la lista de tags y sale de la aplicación', () => {
  const loginUser = require('../funcionalidades/ingresarLogin')
  const registerUser = require('../funcionalidades/registrarUsuario')
  const salirAplicacion = require('../funcionalidades/salirAplicacion')
  const tagAplicacion = require('../funcionalidades/tagAplicacion')
  const tagAplicacionCrear = require('../funcionalidades/tagAplicacionCrear')
  const tagAplicacionBuscar = require('../funcionalidades/tagAplicacionBuscar')
  const tagAplicacionEliminar = require('../funcionalidades/tagAplicacionEliminar')
  const { faker } = require('@faker-js/faker')
  let nameTag;
  let nameUpdateTag;
  
  beforeEach(()=> {
    cy.clearCookies()
    cy.visit('/')
    // if(Cypress.env('VersionEnPrueba') == 2) {
    //   cy.xpath('/html/body/div[2]/div/main/div/div/section/a').click()
    // }
    
    cy.get('main').then(($main) => {
      if($main.find('form').length > 0){
        if($main.find('form')[0].id == 'setup') {
          registerUser.registerUser(cy, Cypress.env('NAMEBLOG'), Cypress.env('FULLNAME'), Cypress.env('USER'), Cypress.env('PASSWORD'))
          salirAplicacion.salirAplicacion(cy)
        }
      }
    })
    loginUser.loginUser(cy, Cypress.env('USER'), Cypress.env('PASSWORD'))
})
  
  it('Eliminar un tag', () => {
    if(Cypress.env('isRegresionVisual') == false){
      nameTag = faker.name.jobType();
      nameUpdateTag = faker.name.jobType();
    } else {
      nameTag = 'Tag Prueba';
      nameUpdateTag = 'Modificado';
    }
    cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario15_eliminar_tag_')
    tagAplicacion.tagAplicacion(cy)
    cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario15_eliminar_tag_')
    tagAplicacionCrear.tagAplicacionCrear(cy, nameTag)
    cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario15_eliminar_tag_')
    tagAplicacion.tagAplicacion(cy)
    cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario15_eliminar_tag_')
    tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag, true)
    cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario15_eliminar_tag_')
    tagAplicacion.tagAplicacion(cy)
    cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario15_eliminar_tag_')
    tagAplicacionEliminar.tagAplicacionEliminar(cy,nameTag)
    cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario15_eliminar_tag_')
    tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag, false)
    cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario15_eliminar_tag_')
    salirAplicacion.salirAplicacion(cy)
  })

  afterEach(() => {
    
  });
})