describe('Pruebas de Tag', () => {
  const registerUser = require('../funcionalidades/registrarUsuario')
  const pageLogin = require('../funcionalidades/Login')
  const pageMenuLeftAplicacion = require('../funcionalidades/MenuLeftAplicacion')
  const pageTag = require('../funcionalidades/tag')
  const json = require('../fixtures/tag')
  const { faker } = require('@faker-js/faker')
  let contador=0;

  beforeEach(()=> {
    cy.clearCookies()
    cy.visit('/')
    
    cy.get('main').then(($main) => {
        if($main.find('form').length > 0) {
            if($main.find('form')[0].id == 'setup') { 
                cy.screenshot('Escenario01_registrarUsuario_')           
                registerUser.registerUser(cy, Cypress.env('NAMEBLOG'), Cypress.env('FULLNAME'), Cypress.env('USER'), Cypress.env('PASSWORD'))
                cy.wait(3000)
                pageMenuLeftAplicacion.clicAvatar(cy)
                pageMenuLeftAplicacion.clicSignOut(cy)
            }
        }
    })
    pageLogin.eMail(cy, datos.EmailValido)
        pageLogin.password(cy, datos.PasswordValido)
        pageLogin.clicSignIn(cy)
        cy.wait(3000)
  })

//   it('Escenario 1 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Contributor y validar que aparezca en la lista de staff, sale de la aplicación', () => {
//     pageLogin.eMail(cy, datos.EmailValido)
//     pageLogin.password(cy, datos.PasswordValido)
//     pageLogin.clicSignIn(cy)
//     cy.wait(3000)
//     pageMenuLeftAplicacion.clicSettings(cy)
//     pageSetting.clicStaff(cy)
//     pageStaff.clicInvitePeople(cy)        
//     pageStaff.setEmailAAddress(cy, email)
//     pageStaff.checkContributor(cy)
//     cy.screenshot('Escenario 1 Prueba Positiva, Crear un staff de tipo Contributor')
//     pageStaff.clicSendInvitationNow(cy)
//     cy.reload()
//     cy.wait(3000)
//     pageStaff.validarIntitedUser(cy, email, true)
//     if(Cypress.env('isRegresionVisual') == false){
//         cy.wait(3000)
//         pageStaff.clicRevokeStaff(cy, email)
//         cy.wait(3000)
//         pageStaff.validarIntitedUser(cy, email, false)
//         cy.reload()
//     }
//     pageMenuLeftAplicacion.clicAvatar(cy)
//     pageMenuLeftAplicacion.clicSignOut(cy)
// })


it(`Escenario ${contador+1}, Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de tag. Crear y validar en la lista tag, sale de la aplicación`, () => {
  if(Cypress.env('isRegresionVisual') == false){
    nameTag = faker.name.jobType();
    
  } else {
    nameTag = 'Tag Prueba';
  }
  cy.screenshot('Escenario13_crear_tag_')
  pageTag.tagAplicacion.tagAplicacion(cy)
  cy.screenshot('Escenario13_crear_tag_')
  pageTag.tagAplicacionCrear.tagAplicacionCrear(cy, nameTag, json[0].color,json[0].slug,json[0].description,json[0].meta_title,json[0].meta_description,json[0].canonical_url)
  cy.screenshot('Escenario13_crear_tag_')
  pageTag.tagAplicacion.tagAplicacion(cy)
  cy.screenshot('Escenario13_crear_tag_')
  pageTag.tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag, true)
  cy.screenshot('Escenario13_crear_tag_')
  if(Cypress.env('isRegresionVisual') != false) {
    pageTag.tagAplicacionEliminar.tagAplicacionEliminar(cy, nameTag)
    pageTag.tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag, false)
  }
  pageMenuLeftAplicacion.clicAvatar(cy)
  pageMenuLeftAplicacion.clicSignOut(cy)

})

// it(`Escenario ${contador+1}, Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de tag. Crear y validar en la lista tag, sale de la aplicación`, () => {
//       tagAplicacion.tagAplicacion(cy)
//       tagAplicacionCrear.tagAplicacionCrear(cy, json[0].tag_name,json[0].color,json[0].slug,json[0].description,json[0].meta_title,json[0].meta_description,json[0].canonical_url)
//       cy.wait(1000)
//       salirAplicacion.salirAplicacion(cy)
//     })

//     contador+=1;
//     it(`Escenario ${contador+1}, crear un tag  con datos en Name y demas datos vacios`, () => {
//         tagAplicacion.tagAplicacion(cy)
//         tagAplicacionCrear.tagAplicacionCrear(cy, json[1].tag_name,json[1].color,json[1].slug,json[1].description,json[1].meta_title,json[1].meta_description,json[1].canonical_url)
//         cy.wait(1000)
//         salirAplicacion.salirAplicacion(cy)
//       })

//       contador+=1;
//       it(`Escenario ${contador+1}, crear un tag ingresando en el campo Name caracters especiales`, () => {
//         tagAplicacion.tagAplicacion(cy)
//         tagAplicacionCrear.tagAplicacionCrear(cy, json[2].tag_name,json[2].color,json[2].slug,json[2].description,json[2].meta_title,json[2].meta_description,json[2].canonical_url)
//         cy.wait(1000)
//         salirAplicacion.salirAplicacion(cy)
//     })

//     contador+=1;
//     it(`Escenario ${contador+1}, crear un tag ingresando un color invalido`, () => {
//       tagAplicacion.tagAplicacion(cy)
//       tagAplicacionCrear.tagAplicacionCrear(cy, json[3].tag_name,json[3].color,json[3].slug,json[3].description,json[3].meta_title,json[3].meta_description,json[3].canonical_url)
//       cy.wait(1000)
//       salirAplicacion.salirAplicacion(cy)
//   })

//   contador+=1;
//   it(`Escenario ${contador+1}, crear un tag dejando el campo color vacio  `, () => {
//     tagAplicacion.tagAplicacion(cy)
//     tagAplicacionCrear.tagAplicacionCrear(cy, json[4].tag_name,json[4].color,json[4].slug,json[4].description,json[4].meta_title,json[4].meta_description,json[4].canonical_url)
//     cy.wait(1000)
//     salirAplicacion.salirAplicacion(cy)
// })

// contador+=1;
// it(`Escenario ${contador+1}, crear un tag dejando el campo slug vacio`, () => {
//   tagAplicacion.tagAplicacion(cy)
//   tagAplicacionCrear.tagAplicacionCrear(cy, json[5].tag_name,json[5].color,json[5].slug,json[5].description,json[5].meta_title,json[5].meta_description,json[5].canonical_url)
//   cy.wait(1000)
//   salirAplicacion.salirAplicacion(cy)
// })

// contador+=1;
// it(`Escenario ${contador+1}, crear un tag dejando el campo description vacio`, () => {
//   tagAplicacion.tagAplicacion(cy)
//   tagAplicacionCrear.tagAplicacionCrear(cy, json[6].tag_name,json[6].color,json[6].slug,json[6].description,json[6].meta_title,json[6].meta_description,json[6].canonical_url)
//   cy.wait(1000)
//   salirAplicacion.salirAplicacion(cy)
// })

// contador+=1;
// it(`Escenario ${contador+1}, crear un tag dejando el campo meta title vacio`, () => {
//   tagAplicacion.tagAplicacion(cy)
//   tagAplicacionCrear.tagAplicacionCrear(cy, json[7].tag_name,json[7].color,json[7].slug,json[7].description,json[7].meta_title,json[7].meta_description,json[7].canonical_url)
//   cy.wait(1000)
//   salirAplicacion.salirAplicacion(cy)
// })

// contador+=1;
// it(`Escenario ${contador+1}, crear un tag dejando el campo meta description vacio`, () => {
//   tagAplicacion.tagAplicacion(cy)
//   tagAplicacionCrear.tagAplicacionCrear(cy, json[8].tag_name,json[8].color,json[8].slug,json[8].description,json[8].meta_title,json[8].meta_description,json[8].canonical_url)
//   cy.wait(1000)
//   salirAplicacion.salirAplicacion(cy)
// })

// contador+=1;
// it(`Escenario ${contador+1}, crear un tag dejando el campo canonical url vacio`, () => {
//   tagAplicacion.tagAplicacion(cy)
//   tagAplicacionCrear.tagAplicacionCrear(cy, json[9].tag_name,json[9].color,json[9].slug,json[9].description,json[9].meta_title,json[9].meta_description,json[9].canonical_url)
//   cy.wait(1000)
//   salirAplicacion.salirAplicacion(cy)
// })


      // for(let j = 0; j < nameTag.length; j++){
      //   cy.screenshot('Escenario13_crear_tag_')
      //   tagAplicacion.tagAplicacion(cy)
      //   cy.screenshot('Escenario13_crear_tag_')
      //   tagAplicacionCrear.tagAplicacionCrear(cy, nameTag[j])
      //   cy.screenshot('Escenario13_crear_tag_')
      //   tagAplicacion.tagAplicacion(cy)
      //   cy.screenshot('Escenario13_crear_tag_')
      //   tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag[j], true)
      //   cy.screenshot('Escenario13_crear_tag_')
      //   if(Cypress.env('isRegresionVisual') != false) {
      //     tagAplicacionEliminar.tagAplicacionEliminar(cy, nameTag[j])
      //     tagAplicacionBuscar.tagAplicacionBuscar(cy, nameTag[j], false)
      //   }
      // }
    //   for(let j = 1; j < json.length; j++){
    //     console.log("json" +json);
    //     cy.screenshot('Escenario13_crear_tag_')
    //     tagAplicacion.tagAplicacion(cy)
    //     cy.screenshot('Escenario13_crear_tag_')
    //     tagAplicacionCrear.tagAplicacionCrear(cy, json[j].tag_name)
    //     cy.screenshot('Escenario13_crear_tag_')
    //     tagAplicacion.tagAplicacion(cy)
    //     cy.screenshot('Escenario13_crear_tag_')
    //     tagAplicacionBuscar.tagAplicacionBuscar(cy, json[j].tag_name, true)
    //     cy.screenshot('Escenario13_crear_tag_')
    //   }
  
    //   salirAplicacion.salirAplicacion(cy)
    
  
    afterEach(() => {
      
    });
  })