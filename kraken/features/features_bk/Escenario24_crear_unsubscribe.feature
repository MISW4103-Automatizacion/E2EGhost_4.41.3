Feature: Escenario  24 Ingresar a la aplicacion, si el usuario no existe se crea. Se dirige al modulo Member. Crear un member. Darle opción de  unsubscribe y validar que aparezca en la lista de members. Eliminar el member y sale de la aplicacion.
    @user1 @web
    Scenario: Como usuario deseo crear un member sin subscripcion
        Given Ir a la aplicacion Ghost "<URL>"
            And I wait for 5 seconds
        When Escribo el Site title "<NAMEBLOG>"
            And Escribo el Full name "<FULLNAME>"
            And Escribo el Email address "<USER>"
            And Escribo el Password "<PASSWORD>"
            And Capturo imagen "RegistrarUsuario_Escenario24"
            And Doy click on the button Create account & start publishing →
            And I wait for 5 seconds
            And Doy click on the button no invitar
            And Capturo imagen "Dashboard_Escenario24"
        Then Deberia ver la palabra 'All done!' despues de crear el usuario
        When Doy click on the button Explore Ghost admin
            And Capturo imagen "01_DashBoard_Escenario_24"
            And Doy click en el boton del avatar inferior
            And Doy click en el menu Sign out
        When Escribo el email login "<USER>"
            And Escribo el password login "<PASSWORD>"
            And Capturo imagen "Login_Escenario24"
            And Doy clic en el boton Sing In
            And I wait for 2 seconds
        Then Deberia ver la palabra 'Dashboard' en el página principal
        When Escenario24 Doy click en member
            And I wait for 3 seconds
            And Escenario24 Doy click en newMember
            And I wait for 3 seconds
        When Escenario24 Escribo el nombre
            And I wait for 3 seconds
        When Escenario24 Escribo el email
            And I wait for 3 seconds
            And Escenario24 Doy click en Label
            And I wait for 3 seconds
        When Escenario24 Escribo el Label
            And I wait for 3 seconds
        When Escenario24 Escribo una nota
            And I wait for 3 seconds

        When Escenario24 Doy click en unsubscribe
            And I wait for 3 seconds
            And Escenario24 Doy click en save
            And I wait for 3 seconds
        When Escenario24 Doy click en member
            And I wait for 3 seconds
        Then Escenario24 Debe aparecer el Member en la lista y lo selecciono
            And I wait for 3 seconds

            And Escenario24 Doy click en boton settings
            And I wait for 3 seconds
            
            And Escenario24 Doy click en Delete Member
            And I wait for 3 seconds

            And Escenario24 Doy click en Confirm Delete Member
            And I wait for 3 seconds

            And Doy click en el boton del avatar inferior
            And I wait for 3 seconds
            And Doy click en el menu Sign out
            And I wait for 5 seconds