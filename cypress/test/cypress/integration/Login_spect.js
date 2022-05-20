describe('Pruebas generales de Login', () => {
    const registerUser = require('../funcionalidades/registrarUsuario')
    const pageLogin = require('../funcionalidades/Login')
    const pageMenuRightAplicacion = require('../funcionalidades/MenuRightAplicacion')
    const datos = require('../datos/login.json')
    const { faker } = require('@faker-js/faker')

    beforeEach(()=> {
        cy.clearCookies()
        cy.visit('/')
        
        cy.get('main').then(($main) => {
            if($main.find('form').length > 0) {
                if($main.find('form')[0].id == 'setup') { 
                    cy.screenshot('Escenario01_registrarUsuario_')           
                    registerUser.registerUser(cy, Cypress.env('NAMEBLOG'), Cypress.env('FULLNAME'), Cypress.env('USER'), Cypress.env('PASSWORD'))
                    cy.wait(3000)
                    pageMenuRightAplicacion.clicAvatar(cy)
                    pageMenuRightAplicacion.clicSignOut(cy)
                }
            }
        })
    })

    it('Escenario 1 Prueba Negativa, clic Sign In, Validar usuario inexistente', () => {
        pageLogin.eMail(cy, faker.internet.email())
        pageLogin.password(cy, datos.PasswordNoValido)
        pageLogin.clicSignIn(cy)
        pageLogin.mensajeValidacionError(cy, 'There is no user with that email address.')
        cy.screenshot('Escenario 1 Prueba Negativa, clic Sign In, Validar usuario inexistente')
    })

    it('Escenario 2 Prueba Positiva, clic Sign In, Validar usuario correcto', () => {
        pageLogin.eMail(cy, datos.EmailValido)
        pageLogin.password(cy, datos.PasswordValido)
        pageLogin.clicSignIn(cy)
        pageMenuRightAplicacion.clicAvatar(cy)
        pageMenuRightAplicacion.clicSignOut(cy)
    })

    it('Escenario 3 Prueba Negativa, clic Sign In, Validar usuario email valido, password errorneo', () => {
        pageLogin.eMail(cy, datos.EmailValido)
        pageLogin.password(cy, datos.PasswordNoValido)
        pageLogin.clicSignIn(cy)
        pageLogin.mensajeValidacionError(cy, 'Your password is incorrect.')
        cy.screenshot('Escenario 3 Prueba Negativa, clic Sign In, Validar usuario email valido, password errorneo')
    })

    it('Escenario 4 Prueba Negativa, clic Sign In, Validar usuario email vacio, password vacio', () => {
        pageLogin.eMail(cy, datos.EmailVacio)
        pageLogin.password(cy, datos.PasswordVacio)
        pageLogin.clicSignIn(cy)
        pageLogin.mensajeValidacionError(cy, 'Please fill out the form to sign in.')
        cy.screenshot('Escenario 4 Prueba Negativa, clic Sign In, Validar usuario email vacio, password vacio')
    })

    it('Escenario 5 Prueba Negativa, clic Sign In, Validar usuario no es un mail', () => {
        pageLogin.eMail(cy, datos.NoEsEmail)
        pageLogin.password(cy, datos.PasswordVacio)
        pageLogin.clicSignIn(cy)
        pageLogin.mensajeValidacionError(cy, 'Please fill out the form to sign in.')
        cy.screenshot('Escenario 5 Prueba Negativa, clic Sign In, Validar usuario no es un mail')
    })

    it('Escenario 6 Prueba Negativa, clic Forgot, Validar usuario inexistente', () => {
        pageLogin.eMail(cy, faker.internet.email())
        pageLogin.password(cy, datos.PasswordNoValido)
        pageLogin.clicForgotUser(cy)
        pageLogin.mensajeValidacionError(cy, 'User not found.')
        cy.screenshot('Escenario 7 Prueba Negativa, clic Forgot, Validar usuario inexistente')
    })

    it('Escenario 7 Prueba Negativa, clic Forgot, Validar usuario no es un mail', () => {
        pageLogin.eMail(cy, datos.NoEsEmail)
        pageLogin.password(cy, datos.PasswordNoValido)
        pageLogin.clicForgotUser(cy)
        pageLogin.mensajeValidacionError(cy, 'We need your email address to reset your password!')
        cy.screenshot('Escenario 8 Prueba Negativa, clic Forgot, Validar usuario no es un mail')
    })

    it('Escenario 8 Prueba Positiva, clic Forgot, Validar usuario correcto', () => {
        pageLogin.eMail(cy, datos.EmailValido)
        pageLogin.password(cy, datos.PasswordNoValido)
        pageLogin.clicForgotUser(cy)
        cy.wait(3000)
        cy.screenshot('Escenario 9 Prueba Positiva, clic Forgot, Validar usuario correcto')
    })

    afterEach(() => { });
})
