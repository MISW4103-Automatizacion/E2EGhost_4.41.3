describe('Escenario  23, Ingresar a la aplicacion, si el usuario no existe se crea. Se dirige al modulo Member. Modificar un member y validar que aparezca en la lista de members, , sale de la aplicacion.', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')



    const memberAplicacion = require('../funcionalidades/memberAplication')
    const memberAplicacionCrear = require('../funcionalidades/memberAplicacionCrear')
    const memberAplicacionEliminar = require('../funcionalidades/memberAplicacionEliminar')
    const memberAplicacionModificar = require('../funcionalidades/memberAplicacionModificar')


    const { faker } = require('@faker-js/faker')

    let mail;
    let note;
    let name;

    let new_mail;
    let new_note;
    let new_name;
    
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

        new_mail = faker.internet.email();
        new_name = faker.name.findName();
        new_note = faker.company.bs()
  
    
      } else {
        mail = 'pruebaRegresion_member@regresion.com.co';
        name = 'PruebaMemberUser';
        note = 'Prueba notas usuario';

        new_mail = 'changed_pruebaRegresion_member@regresion.com.co'
        new_name = 'ChangedPruebaMemberUser';
        new_note = 'Prueba notas usuario cambiado';
      }



      
    memberAplicacion.memberAplicacion(cy)
    memberAplicacionCrear.memberAplicacionCrear(cy, name, mail, note)
    memberAplicacion.memberAplicacion(cy)
    memberAplicacionModificar.memberAplicacionModificar(cy, new_name, new_mail, new_note)

    // memberAplicacionBuscar.memberAplicacionBuscar(cy, mail, true)
    memberAplicacionEliminar.memberAplicacionEliminar(cy)
    salirAplicacion.salirAplicacion(cy)
    })
  })