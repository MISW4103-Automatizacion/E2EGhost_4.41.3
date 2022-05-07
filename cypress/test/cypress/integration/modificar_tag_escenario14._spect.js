describe('Escenario 14 Ingresar a la aplicación, si el usuario no existe se crea, se dirige al modulo de tags. Crear un tag, lo valida. Modifica un tag y valida que aparezca en la lista de tags y sale de la aplicación', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')
    const tagAplicacion = require('../funcionalidades/tagAplicacion')
    const tagAplicacionCrear = require('../funcionalidades/tagAplicacionCrear')
    const tagAplicacionBuscar = require('../funcionalidades/tagAplicacionBuscar')
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
    
    it('modificar un tag', () => {
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
      salirAplicacion.salirAplicacion(cy)
    })
  })