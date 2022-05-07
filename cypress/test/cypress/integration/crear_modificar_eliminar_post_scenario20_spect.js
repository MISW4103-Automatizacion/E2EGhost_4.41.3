describe('Escenario 20 Ingresar a la aplicación, si el usuario no existe se crea. Crear un post y publicarlo. Salir de la aplicación, dirigirse a la página Web y validar que aparezca el post en la página. Ingresar a la aplicación, ir al módulo de posts y modificar el primer post. Salir de la aplicación, dirigirse a la página Web y validar que aparezca el post en la página. Ingresar a la aplicación, ir al módulo de posts y eliminar el primer post. Salir de la aplicación, dirigirse a la página Web y validar que ya no aparezca el post en la página.', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')
    const postAplicacionCrear = require('../funcionalidades/postAplicacionCrear')
    const postAplicacionComprobar = require('../funcionalidades/postAplicacionComprobar')
    const postAplicacionModificar = require('../funcionalidades/postAplicacionModificar')
    const postAplicacionEliminar = require('../funcionalidades/postAplicacionEliminar')
    
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
    
    it('Crear, modificar y eliminar un post', () => {
      let titulo = faker.lorem.sentence()
      let texto = faker.lorem.paragraph()
      let titulo2 = faker.lorem.sentence()
      postAplicacionCrear.postAplicacionCrear(cy,titulo, texto)
      salirAplicacion.salirAplicacion(cy)
      postAplicacionComprobar.postAplicacionComprobar(cy, titulo, true)
      cy.visit('/')
      loginUser.loginUser(cy, Cypress.env('USER'), Cypress.env('PASSWORD'))
      postAplicacionModificar.postAplicacionModificar(cy,titulo2)
      salirAplicacion.salirAplicacion(cy)
      postAplicacionComprobar.postAplicacionComprobar(cy, titulo2, true)
      cy.visit('/')
      loginUser.loginUser(cy, Cypress.env('USER'), Cypress.env('PASSWORD'))
      postAplicacionEliminar.postAplicacionEliminar(cy)
      salirAplicacion.salirAplicacion(cy)
      postAplicacionComprobar.postAplicacionComprobar(cy, titulo2, false)
    })
  })