describe('Escenario 15 Ingresar a la aplicación, si el usuario no existe se crea, se dirige al modulo de tags. Crea un tag y valida la creación. Elimina un tag y valida que no aparezca en la lista de tags y sale de la aplicación', () => {
  const loginUser = require('../funcionalidades/ingresarLogin')
  const registerUser = require('../funcionalidades/registrarUsuario')
  const salirAplicacion = require('../funcionalidades/salirAplicacion')
  const tagAplicacion = require('../funcionalidades/tagAplicacion')
  const tagAplicacionCrear = require('../funcionalidades/tagAplicacionCrear')
  const tagAplicacionBuscar = require('../funcionalidades/tagAplicacionBuscar')
  const tagAplicacionEliminar = require('../funcionalidades/tagAplicacionEliminar')
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
  
  it('Eliminar un tag', () => {
    let nameTag = faker.name.jobType();
    let nameUpdateTag = faker.name.jobType();
    tagAplicacion.tagAplicacion(cy)
    tagAplicacionCrear.tagAplicacionCrear(cy, nameTag)
    tagAplicacion.tagAplicacion(cy)
    tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag, true)
    tagAplicacion.tagAplicacion(cy)
    tagAplicacionEliminar.tagAplicacionEliminar(cy,nameUpdateTag)
    tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag, false)
    salirAplicacion.salirAplicacion(cy)
  })
})