Feature: Escenario 4 Crear, Modificación de Member, activar unsubscribe
    @user1 @web
    Scenario: Escenario 24 Crear un member unsubscribe y validar que aparezca en la lista de members
        Given Ir a la aplicacion Ghost "<URL>"
        And I wait for 15 seconds
        When Escribo el email login "<USER>"
        And I wait for 3 seconds
        And Escribo el password login "<PASSWORD>"
        And I wait for 3 seconds
        And Doy clic en el boton Sing In
        And I wait for 5 seconds
        And Doy click en member
        And I wait for 3 seconds
        And Doy click en newMember
        And I wait for 3 seconds
        When Escribo el nombre "<NEW_MEMBER_UNSUBSCRIBE>"
        And I wait for 3 seconds
        When Escribo el email "<NEW_MEMBER_EMAIL_UNSUBSCRIBE>"
        And I wait for 3 seconds
        And Doy click en Label
        And I wait for 3 seconds
        When Escribo el Label "<MEMBER_LABEL>"
        And I wait for 3 seconds
        When Escribo una nota "<MEMBER_NOTE>"
        And I wait for 3 seconds


        And Doy click en unsubscribe
        And I wait for 3 seconds


        And Doy click en save
        And I wait for 3 seconds
        And Doy click en member
        And I wait for 3 seconds

        And Doy click en memberPrueba_5
        And I wait for 3 seconds

        And Doy click en boton settings
        And I wait for 3 seconds

        And Doy click en Delete Member
        And I wait for 3 seconds

        And Doy click en Confirm Delete Member
        And I wait for 3 seconds

        And Doy click en el boton del avatar inferior
        And I wait for 3 seconds
        And Doy click en el menu Sign out
        And I wait for 5 seconds