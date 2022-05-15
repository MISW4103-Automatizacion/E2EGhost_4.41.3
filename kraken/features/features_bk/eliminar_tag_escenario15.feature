Feature: Escenario 15 Ingresar a la aplicación, si el usuario no existe se crea, se dirige al modulo de tags. Crea un tag y valida la creación. Elimina un tag y valida que no aparezca en la lista de tags y sale de la aplicación

  @user1 @web
  Scenario: Como usuario quiero agregar un tag y eliminarlo
    Given Ir a la aplicacion Ghost "<URL>"
      And I wait for 5 seconds
    When Escribo el Site title "<NAMEBLOG>"
      And Escribo el Full name "<FULLNAME>"
      And Escribo el Email address "<USER>"
      And Escribo el Password "<PASSWORD>"
      And Capturo imagen "RegistrarUsuario_Escenario15"
      And Doy click on the button Create account & start publishing →
      And I wait for 5 seconds
      And Doy click on the button no invitar
      And Capturo imagen "Dashboard_Escenario15"
    Then Deberia ver la palabra 'All done!' despues de crear el usuario
    When Doy click on the button Explore Ghost admin
      And Doy click en el boton del avatar inferior
      And Doy click en el menu Sign out
    When Escribo el email login "<USER>"
      And Escribo el password login "<PASSWORD>"
      And Capturo imagen "Login_Escenario15"
      And Doy clic en el boton Sing In
      And I wait for 2 seconds
      Then Deberia ver la palabra 'Dashboard' en el página principal
    When Doy clic en el boton Tags
      And I wait for 2 seconds
      And Capturo imagen "TagsInicio_Escenario15"
      And Doy clic en el boton New tag
      And I wait for 2 seconds
      And Capturo imagen "TagsCrear_Escenario15"
      And Escribo el nombre del tag
      And Doy click en el Boton Save
    Given Ir a la aplicacion Ghost "<URL>"
    When Doy clic en el boton Tags
    Then Debe aparecer el Tag en la lista
    And I wait for 2 seconds
    And Capturo imagen "TagsValidacion_Escenario15"
    When Doy clic en el primer Tag creado
    And I wait for 2 seconds
    And Capturo imagen "TagsEliminar_Escenario15"
    And Doy click en el Boton Delete Tag
    And Doy click en el Boton Delete
    Then No debe aparecer el Tag eliminado en la lista
    And I wait for 2 seconds
    And Capturo imagen "TagsValidacionEliminar_Escenario15"
    And I wait for 2 seconds
    And I wait for 2 seconds