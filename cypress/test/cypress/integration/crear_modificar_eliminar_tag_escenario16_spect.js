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
    
    beforeEach(()=> {
      cy.clearCookies()
      cy.visit('/')
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
    
    it('crear, Modificar y Eliminar un tag', () => {
      let nameTag = faker.name.jobType();
      let nameUpdateTag = faker.name.jobType();
      tagAplicacion.tagAplicacion(cy)
      tagAplicacionCrear.tagAplicacionCrear(cy, nameTag)
      tagAplicacion.tagAplicacion(cy)
      tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag, true)
      tagAplicacion.tagAplicacion(cy)
      tagAplicacionModificar.tagAplicacionModificar(cy,nameUpdateTag)
      tagAplicacion.tagAplicacion(cy)
      tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag, true)
      tagAplicacion.tagAplicacion(cy)
      tagAplicacionEliminar.tagAplicacionEliminar(cy,nameUpdateTag)
      tagAplicacionBuscar.tagAplicacionBuscar(cy, nameUpdateTag, false)
      salirAplicacion.salirAplicacion(cy)
    })
  })