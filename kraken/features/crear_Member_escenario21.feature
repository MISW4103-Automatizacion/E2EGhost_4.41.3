Feature: Escenario 1 Creacion de Member
    @user1 @web
    Scenario: Escenario 21 Crear un member y validar que aparezca en la lista de members
        Given Ir a la aplicacion Ghost "<URL>"
        And I wait for 10 seconds
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
        When Escribo el nombre "<MEMBER_NAME>"
        And I wait for 3 seconds
        When Escribo el email "<MEMBER_EMAIL>"
        And I wait for 3 seconds
        And Doy click en Label
        And I wait for 3 seconds
        When Escribo el Label "<MEMBER_LABEL>"
        And I wait for 3 seconds
        When Escribo una nota "<MEMBER_NOTE>"
        And I wait for 3 seconds
        And Doy click en save
        And I wait for 3 seconds
        And Doy click en member
        And I wait for 3 seconds

        And Doy click en memberPrueba_1
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
