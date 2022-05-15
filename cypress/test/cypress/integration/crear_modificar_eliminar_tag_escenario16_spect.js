describe('Escenario 16 Ingresar a la aplicación, si el usuario no existe se crea, se dirige al modulo de tags. Crear y validar tag, modificar y validar tag, eliminar un tag y validar que no aparezca en la lista de tags y salir de la aplicación', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')
    const tagAplicacion = require('../funcionalidades/tagAplicacion')
    const tagAplicacionCrear = require('../funcionalidades/tagAplicacionCrear')
    const tagAplicacionBuscar = require('../funcionalidades/tagAplicacionBuscar')
    const tagAplicacionEliminar = require('../funcionalidades/tagAplicacionEliminar')
    const tagAplicacionModificar = require('../funcionalidades/tagAplicacionModificar')
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
            cy.screenshot('Escenario01_registrarUsuario_')
            salirAplicacion.salirAplicacion(cy)
          }
        }
      })      
      loginUser.loginUser(cy, Cypress.env('USER'), Cypress.env('PASSWORD'))
      cy.screenshot('Escenario02_ingresoLogin_')
    })
    
    it('crear, Modificar y Eliminar un tag', () => {
      if(Cypress.env('isRegresionVisual') == false){
        nameTag = faker.name.jobType();
        nameUpdateTag = faker.name.jobType();
      } else {
        nameTag = 'Tag Prueba';
        nameUpdateTag = 'Modificado';
      }
      cy.screenshot('Escenario16_crear_modificar_eliminar_tag_')
      tagAplicacion.tagAplicacion(cy)
      cy.screenshot('Escenario16_crear_modificar_eliminar_tag_')
      tagAplicacionCrear.tagAplicacionCrear(cy, nameTag)
      cy.screenshot('Escenario16_crear_modificar_eliminar_tag_')
      tagAplicacion.tagAplicacion(cy)
      cy.screenshot('Escenario16_crear_modificar_eliminar_tag_')
      tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag, true)
      cy.screenshot('Escenario16_crear_modificar_eliminar_tag_')
      tagAplicacion.tagAplicacion(cy)
      cy.screenshot('Escenario16_crear_modificar_eliminar_tag_')
      tagAplicacionModificar.tagAplicacionModificar(cy,nameUpdateTag)
      cy.screenshot('Escenario16_crear_modificar_eliminar_tag_')
      tagAplicacion.tagAplicacion(cy)
      cy.screenshot('Escenario16_crear_modificar_eliminar_tag_')
      tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag, true)
      cy.screenshot('Escenario16_crear_modificar_eliminar_tag_')
      tagAplicacion.tagAplicacion(cy)
      cy.screenshot('Escenario16_crear_modificar_eliminar_tag_')
      tagAplicacionEliminar.tagAplicacionEliminar(cy,nameUpdateTag)
      cy.screenshot('Escenario16_crear_modificar_eliminar_tag_')
      tagAplicacionBuscar.tagAplicacionBuscar(cy, nameUpdateTag, false)
      cy.screenshot('Escenario16_crear_modificar_eliminar_tag_')
      salirAplicacion.salirAplicacion(cy)
    })
  })