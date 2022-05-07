describe('Escenario 6 Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Autor y validar que aparezca en la lista de staff, eliminarlos y validar que ya no aparezca en la lista, sale de la aplicación', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')
    const staffAplicacion = require('../funcionalidades/staffAplicacion')
    const staffAplicacionCrear = require('../funcionalidades/staffAplicacionCrear')
    const staffAplicacionBuscar = require('../funcionalidades/staffAplicacionBuscar')
    const staffAplicacionEliminar = require('../funcionalidades/staffAplicacionEliminar')
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
    
    it('Eliminar un staff de tipo Autor', () => {
      let mail = faker.internet.email();
      staffAplicacion.staffAplicacion(cy)
      staffAplicacionCrear.staffAplicacionCrear(cy, mail, 'Autor')
      staffAplicacion.staffAplicacion(cy)
      staffAplicacionBuscar.staffAplicacionBuscar(cy, mail, true)
      staffAplicacionEliminar.staffAplicacionEliminar(cy, mail)
      staffAplicacionBuscar.staffAplicacionBuscar(cy, mail, false)
      salirAplicacion.salirAplicacion(cy)
    })
  })