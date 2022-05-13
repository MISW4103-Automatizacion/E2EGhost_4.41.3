describe('Escenario 19 Ingresar a la aplicación, si el usuario no existe se crea. Crear un post y publicarlo. Salir de la aplicación, dirigirse a la pagina Web y validar que aparezca el post en la página. Ingresar a la aplicación, ir al módulo de posts y eliminar el primer post. Salir de la aplicación, dirigirse a la página Web y validar que ya no aparezca el post en la página.', () => {
  const loginUser = require('../funcionalidades/ingresarLogin')
  const registerUser = require('../funcionalidades/registrarUsuario')
  const salirAplicacion = require('../funcionalidades/salirAplicacion')
  const postAplicacionCrear = require('../funcionalidades/postAplicacionCrear')
  const postAplicacionPublicar = require('../funcionalidades/postAplicacionPublicar')
  const postAplicacionComprobar = require('../funcionalidades/postAplicacionComprobar')
  const postAplicacionPosts = require('../funcionalidades/postAplicacionPosts')
  const postAplicacionIrPrimerPost = require('../funcionalidades/postAplicacionIrPrimerPost')
  const postAplicacionIrNuevoPost = require('../funcionalidades/postAplicacionIrNuevoPost')
  const postAplicacionEliminar = require('../funcionalidades/postAplicacionEliminar')
  const postAplicacionSalirCrearPost = require('../funcionalidades/postAplicacionSalirCrearPost')
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
      let escenario = '_Escenario19_eliminar_post_'
      postAplicacionIrNuevoPost.postAplicacionIrNuevoPost(cy);
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + escenario);
      postAplicacionCrear.postAplicacionCrear(cy,titulo, texto);
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + escenario);
      postAplicacionPublicar.postAplicacionPublicar(cy);
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + escenario);
      postAplicacionSalirCrearPost.postAplicacionSalirCrearPost(cy);
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + escenario);
      salirAplicacion.salirAplicacion(cy);
      cy.wait(4000);
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + escenario);
      postAplicacionComprobar.postAplicacionComprobar(cy, titulo, true);
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + escenario);
      cy.visit('/')
      loginUser.loginUser(cy, Cypress.env('USER'), Cypress.env('PASSWORD'))
      postAplicacionPosts.postAplicacionPosts(cy);
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + escenario);
      postAplicacionIrPrimerPost.postAplicacionIrPrimerPost(cy);
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + escenario);
      postAplicacionEliminar.postAplicacionEliminar(cy);
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + escenario);
      salirAplicacion.salirAplicacion(cy);
      cy.wait(2000);
      postAplicacionComprobar.postAplicacionComprobar(cy, titulo, false);
      cy.screenshot('Ghost_' + Cypress.env('VersionEnPrueba') + escenario);
    })
  })