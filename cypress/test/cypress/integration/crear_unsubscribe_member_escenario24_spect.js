
describe('Escenario  24, Ingresar a la aplicacion, si el usuario no existe se crea. Se dirige al modulo Member. Crear un member unsubscribe y validar que aparezca en la lista de members, , sale de la aplicacion.', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')



    const memberAplicacion = require('../funcionalidades/memberAplication')
    const memberAplicacionCrear = require('../funcionalidades/memberAplicacionCrear')
    const memberAplicacionBuscar = require('../funcionalidades/memberAplicacionBuscar')
    const memberAplicacionCrearUnsubscribe = require('../funcionalidades/memberAplicacionCrearUnsubscribe')


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
    
    it('crear un member', () => {
      let mail = faker.internet.email();
      let name = faker.name.findName();
      let note = faker.company.bs()

      
    memberAplicacion.memberAplicacion(cy)
    memberAplicacionCrearUnsubscribe.memberAplicacionCrearUnsubscribe(cy, name, mail, note)
    memberAplicacion.memberAplicacion(cy)
    memberAplicacionBuscar.memberAplicacionBuscar(cy, mail, true)
    salirAplicacion.salirAplicacion(cy)
    })
  })