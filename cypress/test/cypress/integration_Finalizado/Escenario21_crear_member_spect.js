describe('Escenario  21, Ingresar a la aplicacion, si el usuario no existe se crea. Se dirige al modulo Member. Crear un member y validar que aparezca en la lista de members, sale de la aplicacion.', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')

    const memberAplicacion = require('../funcionalidades/memberAplication')
    const memberAplicacionCrear = require('../funcionalidades/memberAplicacionCrear')
    const memberAplicacionBuscar = require('../funcionalidades/memberAplicacionBuscar')
    const memberAplicacionEliminar = require('../funcionalidades/memberAplicacionEliminar')


    const { faker } = require('@faker-js/faker');
    let mail;
    let note;
    let name;
    let versionGhost;

    beforeEach(()=> {
      cy.clearCookies()
      cy.visit('/')
      
      cy.get('main').then(($main) => {
        if($main.find('form').length > 0){
          if($main.find('form')[0].id == 'setup') {            
            registerUser.registerUser(cy, Cypress.env('NAMEBLOG'), Cypress.env('FULLNAME'), Cypress.env('USER'), Cypress.env('PASSWORD'))
            cy.screenshot('Escenario1_registrarUsuario_')
            salirAplicacion.salirAplicacion(cy)
          }
        }
      })      
      loginUser.loginUser(cy, Cypress.env('USER'), Cypress.env('PASSWORD'))
      cy.screenshot('Escenario1_ingresoLogin_')
    })



    
    it('crear un member', () => {

        if(Cypress.env('isRegresionVisual') != true){
          mail = faker.internet.email();
          name = faker.name.findName();
          note = faker.company.bs()
          versionGhost=Cypress.env('VersionEnPrueba');
      
        } else {
          mail = 'pruebaRegresion_member@regresion.com.co';
          name = 'PruebaMemberUser';
          note = 'Prueba notas usuario';
        }

    // cy.screenshot('01-Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario21_crear_member_ingreso')
    memberAplicacion.memberAplicacion(cy)
    
    memberAplicacionCrear.memberAplicacionCrear(cy, name, mail, note)
    // cy.screenshot('03-Ghost_' + Cypress.env('VersionEnPrueba') + '_Escenario21_crear_member_crear')
    memberAplicacion.memberAplicacion(cy)
    memberAplicacionBuscar.memberAplicacionBuscar(cy, mail, true)
    memberAplicacion.memberAplicacion(cy)
    memberAplicacionEliminar.memberAplicacionEliminar(cy)
    salirAplicacion.salirAplicacion(cy)

    })



  })