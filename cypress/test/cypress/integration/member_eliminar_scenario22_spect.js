describe('Escenario 22 Crear un member y validar que aparezca en la lista de member, eliminarlos y validar que ya no aparezca en la lista', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')


    const memberAplicacion = require('../funcionalidades/memberAplication')
    const memberAplicacionCrear = require('../funcionalidades/memberAplicacionCrear')
    const memberAplicacionBuscar = require('../funcionalidades/memberAplicacionBuscar')
    const memberAplicacionEliminar = require('../funcionalidades/memberAplicacionEliminar')



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
    
    it('Eliminar un staff de tipo Contributor', () => {

      let mail = faker.internet.email();
      let name = faker.name.findName();
      let note = faker.company.bs()


      memberAplicacion.memberAplicacion(cy)
      memberAplicacionCrear.memberAplicacionCrear(cy, name, mail, note)
      memberAplicacion.memberAplicacion(cy)
      // memberAplicacionBuscar.memberAplicacionBuscar(cy, mail, true)
     
      memberAplicacionEliminar.memberAplicacionEliminar(cy, name)

      // memberAplicacionBuscar.memberAplicacionBuscar(cy, mail, false)
      salirAplicacion.salirAplicacion(cy)




    })
  })