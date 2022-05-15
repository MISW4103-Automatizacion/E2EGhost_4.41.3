Feature: 'Escenario 13 Ingresar a la aplicación, si el usuario no existe se crea, se dirige al modulo de tags. Crear un tag, validar que aparezca en la lista de tags y salir de la aplicación

  @user1 @web
  Scenario: Como usuario quiero agregar un tag
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
      And Capturo imagen "13_crear_tag_1"
    Then Deberia ver la palabra 'Dashboard' en el página principal
    When Doy clic en el boton Tags
      And I wait for 2 seconds
      And Capturo imagen "13_crear_tag_2"
      And Doy clic en el boton New tag
      And I wait for 2 seconds
      And Capturo imagen "13_crear_tag_3"
      And Escribo el nombre del tag
      And Doy click en el Boton Save
    Given Ir a la aplicacion Ghost "<URL>"
    When Doy clic en el boton Tags
    Then Debe aparecer el Tag en la lista
    And I wait for 2 seconds
    And Capturo imagen "13_crear_tag_4"
    When Doy clic en el primer Tag creado 
    And I wait for 2 seconds
    And Doy click en el Boton Delete Tag
    And I wait for 2 seconds
    And Doy click en el Boton Delete
    And I wait for 2 seconds
    Then No debe aparecer el Tag eliminado en la lista
    And I wait for 2 seconds