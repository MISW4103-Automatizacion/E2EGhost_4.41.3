
describe('Escenario  24, Ingresar a la aplicacion, si el usuario no existe se crea. Se dirige al modulo Member. Crear un member unsubscribe y validar que aparezca en la lista de members, , sale de la aplicacion.', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')



    const memberAplicacion = require('../funcionalidades/memberAplication')

    const memberAplicacionBuscar = require('../funcionalidades/memberAplicacionBuscar')
    const memberAplicacionCrearUnsubscribe = require('../funcionalidades/memberAplicacionCrearUnsubscribe')
    const memberAplicacionEliminar = require('../funcionalidades/memberAplicacionEliminar')


    const { faker } = require('@faker-js/faker')

    let mail;
    let note;
    let name;

    
    beforeEach(()=> {
      cy.clearCookies()
        cy.visit('/')
        
        // if(Cypress.env('VersionEnPrueba') == 2) {
        //   cy.xpath('/html/body/div[2]/div/main/div/div/section/a').click()
        // }
        
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
    memberAplicacionCrearUnsubscribe.memberAplicacionCrearUnsubscribe(cy, name, mail, note)
    memberAplicacion.memberAplicacion(cy)
    memberAplicacionBuscar.memberAplicacionBuscar(cy, mail, true)
    memberAplicacion.memberAplicacion(cy)
    memberAplicacionEliminar.memberAplicacionEliminar(cy)
    salirAplicacion.salirAplicacion(cy)
    })
  })