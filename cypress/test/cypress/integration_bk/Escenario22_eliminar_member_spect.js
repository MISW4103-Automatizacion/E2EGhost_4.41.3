describe('Escenario  22, Ingresar a la aplicacion, si el usuario no existe se crea. Se dirige al modulo Member. Crear un member y validar que aparezca en la lista de member, eliminarlos y validar que ya no aparezca en la lista, , sale de la aplicacion.', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')


    const memberAplicacion = require('../funcionalidades/memberAplication')
    const memberAplicacionCrear = require('../funcionalidades/memberAplicacionCrear')

    const memberAplicacionEliminar = require('../funcionalidades/memberAplicacionEliminar')

    let mail;
    let note;
    let name;

    const { faker } = require('@faker-js/faker')
    
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

    
    it('Eliminar un staff de tipo Contributor', () => {



      if(Cypress.env('isRegresionVisual') != true){
        mail = faker.internet.email();
        name = faker.name.findName();
        note = faker.company.bs()
    
      } else {
        mail = 'pruebaRegresion_member@regresion.com.co';
        name = 'PruebaMemberUser';
        note = 'Prueba notas usuario';
      }


      memberAplicacion.memberAplicacion(cy)
      memberAplicacionCrear.memberAplicacionCrear(cy, name, mail, note)
      memberAplicacion.memberAplicacion(cy)
      // memberAplicacionBuscar.memberAplicacionBuscar(cy, mail, true)
     
      memberAplicacionEliminar.memberAplicacionEliminar(cy)

      // memberAplicacionBuscar.memberAplicacionBuscar(cy, mail, false)
      salirAplicacion.salirAplicacion(cy)




    })
  })