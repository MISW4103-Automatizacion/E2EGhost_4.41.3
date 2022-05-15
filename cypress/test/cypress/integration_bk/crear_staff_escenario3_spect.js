describe('Escenario 3 Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Editor y validar que aparezca en la lista de staff, sale de la aplicación', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')
    const staffAplicacion = require('../funcionalidades/staffAplicacion')
    const staffAplicacionCrear = require('../funcionalidades/staffAplicacionCrear')
    const staffAplicacionBuscar = require('../funcionalidades/staffAplicacionBuscar')
    const staffAplicacionEliminar = require('../funcionalidades/staffAplicacionEliminar')
    const { faker } = require('@faker-js/faker')

    let mail;
    
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
    
    it('crear un staff de tipo Editor', () => {
      if(Cypress.env('isRegresionVisual') == false){
        mail = faker.internet.email();
      } else {
        mail = 'pruebaRegresion@regresion.com.co';
      }
      cy.screenshot('Escenario3_crear_staff_')
      staffAplicacion.staffAplicacion(cy)
      cy.screenshot('Escenario3_crear_staff_')
      staffAplicacionCrear.staffAplicacionCrear(cy, mail, 'Editor')
      cy.screenshot('Escenario3_crear_staff_')
      staffAplicacion.staffAplicacion(cy)
      cy.screenshot('Escenario3_crear_staff_')
      staffAplicacionBuscar.staffAplicacionBuscar(cy, mail, true)
      cy.screenshot('Escenario3_crear_staff_')
      if(Cypress.env('isRegresionVisual') == true) {
        staffAplicacionEliminar.staffAplicacionEliminar(cy, mail)
        staffAplicacionBuscar.staffAplicacionBuscar(cy, mail, false)
      }
      salirAplicacion.salirAplicacion(cy)
    })
  })