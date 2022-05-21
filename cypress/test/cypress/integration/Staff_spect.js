describe('Pruebas de Staff', () => {
    const registerUser = require('../funcionalidades/registrarUsuario')
    const pageLogin = require('../funcionalidades/Login')
    const pageMenuLeftAplicacion = require('../funcionalidades/MenuLeftAplicacion')
    const pageSetting = require('../funcionalidades/Settings')
    const pageStaff = require('../funcionalidades/Staff')
    const datos = require('../datos/login.json')
    const datosStaff = require ('../datos/staff.json')
    const { faker } = require('@faker-js/faker')

    let email

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

        if(Cypress.env('isRegresionVisual') == false){
            email = faker.internet.email();
        } else {
            email = 'pruebaRegresion@regresion.com.co';
        }
    })

    it('Escenario 1 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Contributor y validar que aparezca en la lista de staff, sale de la aplicación', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkContributor(cy)
        cy.screenshot('Escenario 1 Prueba Positiva, Crear un staff de tipo Contributor')
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        if(Cypress.env('isRegresionVisual') == false){
            cy.wait(3000)
            pageStaff.clicRevokeStaff(cy, email)
            cy.wait(3000)
            pageStaff.validarIntitedUser(cy, email, false)
            cy.reload()
        }
        pageMenuLeftAplicacion.clicAvatar(cy)
        pageMenuLeftAplicacion.clicSignOut(cy)
    })

    it('Escenario 2 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Autor y validar que aparezca en la lista de staff, sale de la aplicación', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkAutor(cy)
        cy.screenshot('Escenario 2 Prueba Positiva, Crear un staff de tipo Autor')
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        if(Cypress.env('isRegresionVisual') == false){
            cy.wait(3000)
            pageStaff.clicRevokeStaff(cy, email)
            cy.wait(3000)
            pageStaff.validarIntitedUser(cy, email, false)
            cy.reload()
        }
        pageMenuLeftAplicacion.clicAvatar(cy)
        pageMenuLeftAplicacion.clicSignOut(cy)
    })

    it('Escenario 3 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Editor y validar que aparezca en la lista de staff, sale de la aplicación', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkEditor(cy)
        cy.screenshot('Escenario 3 Prueba Positiva, Crear un staff de tipo Editor')
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        if(Cypress.env('isRegresionVisual') == false){
            cy.wait(3000)
            pageStaff.clicRevokeStaff(cy, email)
            cy.wait(3000)
            pageStaff.validarIntitedUser(cy, email, false)
            cy.reload()
        }
        pageMenuLeftAplicacion.clicAvatar(cy)
        pageMenuLeftAplicacion.clicSignOut(cy)
    })

    it('Escenario 4 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Administrador y validar que aparezca en la lista de staff, sale de la aplicación', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkAdministrador(cy)
        cy.screenshot('Escenario 4 Prueba Positiva, Crear un staff de tipo Administrador')
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        if(Cypress.env('isRegresionVisual') == false){
            cy.wait(3000)
            pageStaff.clicRevokeStaff(cy, email)
            cy.wait(3000)
            pageStaff.validarIntitedUser(cy, email, false)
            cy.reload()
        }
        pageMenuLeftAplicacion.clicAvatar(cy)
        pageMenuLeftAplicacion.clicSignOut(cy)
    })

    it('Escenario 5 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Contributor y validar que aparezca en la lista de staff, elimina el staff creado, sale de la aplicación', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkContributor(cy)
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        cy.wait(3000)
        cy.screenshot('Escenario 5 Prueba Positiva, Crear un staff de tipo Contributor y eliminardo')
        pageStaff.clicRevokeStaff(cy, email)
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, false)
        cy.reload()
        pageMenuLeftAplicacion.clicAvatar(cy)
        pageMenuLeftAplicacion.clicSignOut(cy)
    })

    it('Escenario 6 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Autor y validar que aparezca en la lista de staff, elimina el staff creado, sale de la aplicación', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkAutor(cy)        
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        cy.wait(3000)
        cy.screenshot('Escenario 6 Prueba Positiva, Crear un staff de tipo Autor y eliminarlo')
        pageStaff.clicRevokeStaff(cy, email)
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, false)
        cy.reload()
        pageMenuLeftAplicacion.clicAvatar(cy)
        pageMenuLeftAplicacion.clicSignOut(cy)
    })

    it('Escenario 7 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Editor y validar que aparezca en la lista de staff, elimina el staff creado, sale de la aplicación', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkEditor(cy)
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        cy.wait(3000)
        cy.screenshot('Escenario 7 Prueba Positiva, Crear un staff de tipo Editor y eliminarlo')
        pageStaff.clicRevokeStaff(cy, email)
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, false)
        cy.reload()
        pageMenuLeftAplicacion.clicAvatar(cy)
        pageMenuLeftAplicacion.clicSignOut(cy)
    })

    it('Escenario 8 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Administrador y validar que aparezca en la lista de staff, elimina el staff creado, sale de la aplicación', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkAdministrador(cy)
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        cy.wait(3000)
        cy.screenshot('Escenario 8 Prueba Positiva, Crear un staff de tipo Administrador y eliminarlo')
        pageStaff.clicRevokeStaff(cy, email)
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, false)
        cy.reload()
        pageMenuLeftAplicacion.clicAvatar(cy)
        pageMenuLeftAplicacion.clicSignOut(cy)
    })

    it('Escenario 9 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Contributor y validar que aparezca en la lista de staff, elimina el staff creado, y se debe cambiar a de tipo Autor, sale de la aplicación', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkContributor(cy)        
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        cy.wait(3000)
        pageStaff.clicRevokeStaff(cy, email)
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, false)
        cy.reload()
        pageStaff.clicInvitePeople(cy)
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkAutor(cy)
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        if(Cypress.env('isRegresionVisual') == false){
            cy.wait(3000)
            pageStaff.clicRevokeStaff(cy, email)
            cy.wait(3000)
            pageStaff.validarIntitedUser(cy, email, false)
            cy.reload()
        }
        pageMenuLeftAplicacion.clicAvatar(cy)
        pageMenuLeftAplicacion.clicSignOut(cy)
    })

    it('Escenario 10 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Author y validar que aparezca en la lista de staff, elimina el staff creado, y se debe cambiar a de tipo Editor, sale de la aplicación', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkAutor(cy)        
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        cy.wait(3000)
        pageStaff.clicRevokeStaff(cy, email)
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, false)
        cy.reload()
        pageStaff.clicInvitePeople(cy)
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkEditor(cy)
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        if(Cypress.env('isRegresionVisual') == false){
            cy.wait(3000)
            pageStaff.clicRevokeStaff(cy, email)
            cy.wait(3000)
            pageStaff.validarIntitedUser(cy, email, false)
            cy.reload()
        }
        pageMenuLeftAplicacion.clicAvatar(cy)
        pageMenuLeftAplicacion.clicSignOut(cy)
    })

    it('Escenario 11 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Editor y validar que aparezca en la lista de staff, elimina el staff creado, y se debe cambiar a de tipo Administrator, sale de la aplicación', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkEditor(cy)        
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        cy.wait(3000)
        pageStaff.clicRevokeStaff(cy, email)
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, false)
        cy.reload()
        pageStaff.clicInvitePeople(cy)
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkAdministrador(cy)
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        if(Cypress.env('isRegresionVisual') == false){
            cy.wait(3000)
            pageStaff.clicRevokeStaff(cy, email)
            cy.wait(3000)
            pageStaff.validarIntitedUser(cy, email, false)
            cy.reload()
        }
        pageMenuLeftAplicacion.clicAvatar(cy)
        pageMenuLeftAplicacion.clicSignOut(cy)
        pageLogin.eMail(cy, datos.EmailValido)
        pageLogin.password(cy, datos.PasswordValido)
        pageLogin.clicSignIn(cy)
        cy.wait(3000)
    })

    it('Escenario 12 Prueba Positiva, Ingresar a la aplicación, se dirige hasta el modulo de staff. Crear un staff de tipo Administrator y validar que aparezca en la lista de staff, elimina el staff creado, y se debe cambiar a de tipo Contributor, sale de la aplicación', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkAdministrador(cy)        
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        cy.wait(3000)
        pageStaff.clicRevokeStaff(cy, email)
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, false)
        cy.reload()
        pageStaff.clicInvitePeople(cy)
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkContributor(cy)
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.validarIntitedUser(cy, email, true)
        if(Cypress.env('isRegresionVisual') == false){
            cy.wait(3000)
            pageStaff.clicRevokeStaff(cy, email)
            cy.wait(3000)
            pageStaff.validarIntitedUser(cy, email, false)
            cy.reload()
        }
        pageMenuLeftAplicacion.clicAvatar(cy)
        pageMenuLeftAplicacion.clicSignOut(cy)
    })

    it('Escenario 13 Prueba Negativa, Crear un staff con un mail incorrector, de tipo Contributor', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, datosStaff.NoEsEmail)
        pageStaff.checkContributor(cy)
        pageStaff.clicSendInvitationNow(cy)
        pageStaff.mensajeValidacionError(cy, 'Invalid Email.')
        cy.screenshot('Escenario 13 Prueba Negativa, Crear un staff con un mail incorrector, de tipo Contributor')
    })

    it('Escenario 14 Prueba Negativa, Crear un staff con un mail incorrector, de tipo Author', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, datosStaff.NoEsEmail)
        pageStaff.checkAutor(cy)
        pageStaff.clicSendInvitationNow(cy)
        pageStaff.mensajeValidacionError(cy, 'Invalid Email.')
        cy.screenshot('scenario 14 Prueba Negativa, Crear un staff con un mail incorrector, de tipo Author')
    })

    it('Escenario 15 Prueba Negativa, Crear un staff con un mail incorrector, de tipo Editor', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, datosStaff.NoEsEmail)
        pageStaff.checkEditor(cy)
        pageStaff.clicSendInvitationNow(cy)
        pageStaff.mensajeValidacionError(cy, 'Invalid Email.')
        cy.screenshot('scenario 14 Prueba Negativa, Crear un staff con un mail incorrector, de tipo Editor')
    })

    it('Escenario 16 Prueba Negativa, Crear un staff con un mail incorrector, de tipo Administrator', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, datosStaff.NoEsEmail)
        pageStaff.checkAdministrador(cy)
        pageStaff.clicSendInvitationNow(cy)
        pageStaff.mensajeValidacionError(cy, 'Invalid Email.')
        cy.screenshot('scenario 14 Prueba Negativa, Crear un staff con un mail incorrector, de tipo Administrator')
    })

    it('Escenario 17 Prueba Negativa, Crear un staff sin mail, de tipo Contributor', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)
        pageStaff.setEmailAAddress(cy, '')
        pageStaff.checkContributor(cy)
        pageStaff.clicSendInvitationNow(cy)
        pageStaff.mensajeValidacionError(cy, 'Please enter an email.')
        cy.screenshot('Escenario 17 Prueba Negativa, Crear un staff sin mail, de tipo Contributor')
    })

    it('Escenario 18 Prueba Negativa, Crear un staff sin mail, de tipo Author', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)
        pageStaff.setEmailAAddress(cy, '')
        pageStaff.checkAutor(cy)
        pageStaff.clicSendInvitationNow(cy)
        pageStaff.mensajeValidacionError(cy, 'Please enter an email.')
        cy.screenshot('Escenario 18 Prueba Negativa, Crear un staff sin mail, de tipo Author')
    })

    it('Escenario 19 Prueba Negativa, Crear un staff sin mail, de tipo Editor', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)
        pageStaff.setEmailAAddress(cy, '')
        pageStaff.checkEditor(cy)
        pageStaff.clicSendInvitationNow(cy)
        pageStaff.mensajeValidacionError(cy, 'Please enter an email.')
        cy.screenshot('Escenario 18 Prueba Negativa, Crear un staff sin mail, de tipo Editor')
    })

    it('Escenario 20 Prueba Negativa, Crear un staff sin mail, de tipo Administrator', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)
        pageStaff.setEmailAAddress(cy, '')
        pageStaff.checkAdministrador(cy)
        pageStaff.clicSendInvitationNow(cy)
        pageStaff.mensajeValidacionError(cy, 'Please enter an email.')
        cy.screenshot('Escenario 18 Prueba Negativa, Crear un staff sin mail, de tipo Administrator')
    })

    it('Escenario 21 Prueba Negative, crear un staff de tipo Contributor e intentar asignarle de tipo Author', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkContributor(cy)
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkAutor(cy)
        pageStaff.clicSendInvitationNow(cy)
        pageStaff.mensajeValidacionError(cy, 'A user with that email address was already invited.')
        cy.screenshot('Escenario 21 Prueba Negative, crear un staff de tipo Contributor e intentar asignarle de tipo Author')
    })

    it('Escenario 22 Prueba Negative, crear un staff de tipo Author e intentar asignarle de tipo Editor', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkAutor(cy)
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkEditor(cy)
        pageStaff.clicSendInvitationNow(cy)
        pageStaff.mensajeValidacionError(cy, 'A user with that email address was already invited.')
        cy.screenshot('Escenario 22 Prueba Negative, crear un staff de tipo Author e intentar asignarle de tipo Editor')
    })

    it('Escenario 23 Prueba Negative, crear un staff de tipo Editor e intentar asignarle de tipo Administrator', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkEditor(cy)
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkAdministrador(cy)
        pageStaff.clicSendInvitationNow(cy)
        pageStaff.mensajeValidacionError(cy, 'A user with that email address was already invited.')
        cy.screenshot('Escenario 23 Prueba Negative, crear un staff de tipo Editor e intentar asignarle de tipo Administrator')
    })

    it('Escenario 24 Prueba Negative, crear un staff de tipo Administrator e intentar asignarle de tipo Contributor', () => {
        pageMenuLeftAplicacion.clicSettings(cy)
        pageSetting.clicStaff(cy)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkAdministrador(cy)
        pageStaff.clicSendInvitationNow(cy)
        cy.reload()
        cy.wait(3000)
        pageStaff.clicInvitePeople(cy)        
        pageStaff.setEmailAAddress(cy, email)
        pageStaff.checkContributor(cy)
        pageStaff.clicSendInvitationNow(cy)
        pageStaff.mensajeValidacionError(cy, 'A user with that email address was already invited.')
        cy.screenshot('Escenario 24 Prueba Negative, crear un staff de tipo Administrator e intentar asignarle de tipo Contributor')
    })

    afterEach(() => { });
})
