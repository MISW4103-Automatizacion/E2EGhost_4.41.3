describe('Escenario 14 Ingresar a la aplicación, si el usuario no existe se crea, se dirige al modulo de tags. Crear un tag, lo valida. Modifica un tag y valida que aparezca en la lista de tags y sale de la aplicación', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')
    const tagAplicacion = require('../funcionalidades/tagAplicacion')
    const tagAplicacionCrear = require('../funcionalidades/tagAplicacionCrear')
    const tagAplicacionBuscar = require('../funcionalidades/tagAplicacionBuscar')
    const tagAplicacionModificar = require('../funcionalidades/tagAplicacionModificar')
    const tagAplicacionEliminar = require('../funcionalidades/tagAplicacionEliminar')
    const { faker } = require('@faker-js/faker')
    let nameTag;
    let nameUpdateTag;
    
    beforeEach(()=> {
      cy.clearCookies()
      cy.visit('/')
      
      cy.get('main').then(($main) => {
        if($main.find('form').length > 0){
          if($main.find('form')[0].id == 'setup') {            
            registerUser.registerUser(cy, Cypress.env('NAMEBLOG'), Cypress.env('FULLNAME'), Cypress.env('USER'), Cypress.env('PASSWORD'))
            cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario1_registrarUsuario_')
            salirAplicacion.salirAplicacion(cy)
          }
        }
      })      
      loginUser.loginUser(cy, Cypress.env('USER'), Cypress.env('PASSWORD'))
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario1_ingresoLogin_')
  })
    it('modificar un tag', () => {
      if(Cypress.env('isRegresionVisual') == false){
        nameTag = faker.name.jobType();
        nameUpdateTag = faker.name.jobType();
      } else {
        nameTag = 'Tag Prueba';
        nameUpdateTag = 'Modificado';
      }
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario14_modificar_tag_')
      tagAplicacion.tagAplicacion(cy)
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario14_modificar_tag_')
      tagAplicacionCrear.tagAplicacionCrear(cy, nameTag)
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario14_modificar_tag_')
      tagAplicacion.tagAplicacion(cy)
      tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag, true)
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario14_modificar_tag_')
      tagAplicacion.tagAplicacion(cy)
      tagAplicacionModificar.tagAplicacionModificar(cy,nameUpdateTag)
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario14_modificar_tag_')
      tagAplicacion.tagAplicacion(cy)
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario14_modificar_tag_')
      tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag, true)
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario14_modificar_tag_')
      if(Cypress.env('isRegresionVisual') != false) {
        tagAplicacionEliminar.tagAplicacionEliminar(cy, nameUpdateTag)
        tagAplicacionBuscar.tagAplicacionBuscar(cy, nameUpdateTag, false)
      }
      salirAplicacion.salirAplicacion(cy)
  })

  afterEach(() => {
    
  });
})