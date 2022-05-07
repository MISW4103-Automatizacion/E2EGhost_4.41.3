Feature: Escenario 14 Ingresar a la aplicación, si el usuario no existe se crea, se dirige al modulo de tags. Crear un tag, lo valida. Modifica un tag y valida que aparezca en la lista de tags y sale de la aplicación

  @user1 @web
  Scenario: Como usuario quiero agregar un tag y modificarlo
    Given Ir a la aplicacion Ghost "<URL>"
      And I wait for 5 seconds
    When Escribo el Site title "<NAMEBLOG>"
      And Escribo el Full name "<FULLNAME>"
      And Escribo el Email address "<USER>"
      And Escribo el Password "<PASSWORD>"
      And Doy click on the button Create account & start publishing →
      And I wait for 5 seconds
    Then Deberia ver la palabra 'All done!' despues de crear el usuario
    When Doy click on the button Explore Ghost admin
      And Doy click en el boton del avatar inferior
      And Doy click en el menu Sign out
    When Escribo el email login "<USER>"
      And Escribo el password login "<PASSWORD>"
      And Doy clic en el boton Sing In
      And I wait for 2 seconds
    Then Deberia ver la palabra 'Dashboard' en el página principal
    When Doy clic en el boton Tags
    And I wait for 2 seconds
      And Doy clic en el boton New tag
      And I wait for 2 seconds
      And Escribo el nombre del tag
      And I wait for 2 seconds
      And Doy click en el Boton Save
      And I wait for 2 seconds
    Given Ir a la aplicacion Ghost "<URL>"
    When Doy clic en el boton Tags
    And I wait for 2 seconds
    Then Debe aparecer el Tag en la lista
    And I wait for 2 seconds
    When Doy clic en el primer Tag creado
    And I wait for 2 seconds
    And Escribo el nombre del tag modificado
    And I wait for 2 seconds
    And Doy click en el Boton Save
    And I wait for 2 seconds
    Given Ir a la aplicacion Ghost "<URL>"
    When Doy clic en el boton Tags
    Then Debe aparecer el Tag modificado en la lista
    And I wait for 2 seconds