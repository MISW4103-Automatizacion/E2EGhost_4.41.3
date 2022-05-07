describe('Escenario 9 Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Administrador y validar que aparezca en la lista de staff, eliminarlos y validar que ya no aparezca en la lista, el mismo staff pasarlo ahora que sea de tipo Autor y validarlo nuevamente, sale de la aplicación', () => {
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
        if($main.find('form').length > 0) {
          if($main.find('form')[0].id == 'setup') {
            registerUser.registerUser(cy, Cypress.env('NAMEBLOG'), Cypress.env('FULLNAME'), Cypress.env('USER'), Cypress.env('PASSWORD'))
            salirAplicacion.salirAplicacion(cy)
          }
        }
      })
      loginUser.loginUser(cy, Cypress.env('USER'), Cypress.env('PASSWORD'))
    })
    
    it('Modificar un staff de tipo Administrador', () => {
      let mail = faker.internet.email()
      staffAplicacion.staffAplicacion(cy)
      staffAplicacionCrear.staffAplicacionCrear(cy, mail, 'Administrador')
      staffAplicacion.staffAplicacion(cy)
      staffAplicacionBuscar.staffAplicacionBuscar(cy, mail, true)
      staffAplicacionEliminar.staffAplicacionEliminar(cy, mail)
      staffAplicacionBuscar.staffAplicacionBuscar(cy, mail, false)
      staffAplicacion.staffAplicacion(cy)
      staffAplicacionCrear.staffAplicacionCrear(cy, mail, 'Autor')
      staffAplicacion.staffAplicacion(cy)
      staffAplicacionBuscar.staffAplicacionBuscar(cy, mail, true)
      salirAplicacion.salirAplicacion(cy)
    })
  })