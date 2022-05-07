describe('Escenario 2 Ingresar a la aplicación, si el usuario no existe se crea. Crea un post, validar que aparezca en la pagina Web, entrar a la aplicacion, modificar el post y comprobar que aparezca la modificacion en la pagina.', () => {
    const loginUser = require('../funcionalidades/ingresarLogin')
    const registerUser = require('../funcionalidades/registrarUsuario')
    const salirAplicacion = require('../funcionalidades/salirAplicacion')
    const postAplicacionCrear = require('../funcionalidades/postAplicacionCrear')
    const postAplicacionComprobar = require('../funcionalidades/postAplicacionComprobar')
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
    
    it('Crear y eliminar un post', () => {
      let titulo = faker.lorem.sentence()
      let texto = faker.lorem.paragraph()
      let titulo2 = faker.lorem.sentence()
      postAplicacionEliminar.postAplicacionEliminar(cy)
      postAplicacionCrear.postAplicacionCrear(cy,titulo, texto)
      salirAplicacion.salirAplicacion(cy)
      postAplicacionComprobar.postAplicacionComprobar(cy, titulo, true)
      cy.visit('/')
      loginUser.loginUser(cy, Cypress.env('USER'), Cypress.env('PASSWORD'))
      postAplicacionEliminar.postAplicacionEliminar(cy)
      salirAplicacion.salirAplicacion(cy)
      postAplicacionComprobar.postAplicacionComprobar(cy, titulo, false)
    })
  })