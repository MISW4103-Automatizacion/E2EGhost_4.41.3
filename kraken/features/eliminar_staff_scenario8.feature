Feature: Escenario 8 Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Administrador y validar que aparezca en la lista de staff, eliminarlos y validar que ya no aparezca en la lista, sale de la aplicación
  
  @user1 @web
  Scenario: Como usuario quiero agregar un staff y eliminarlo de tipo Administrador
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
    When Doy clic en el boton settings "<VersionEnPrueba>"
      And Doy clic en el boton staff "<VersionEnPrueba>"
      And Doy clic en el boton invite people "<VersionEnPrueba>"
      And Escribo el correo electronico de la invitacion "<VersionEnPrueba>"
      And Doy click en el radio boton Administrador "<VersionEnPrueba>"
      And Doy click en el boton Send invitation now "<VersionEnPrueba>"
    Given Ir a la aplicacion Ghost "<URL>"
      And I wait for 3 seconds 
    When Doy clic en el boton settings "<VersionEnPrueba>"
      And Doy clic en el boton staff "<VersionEnPrueba>"
      And I wait for 3 seconds
    Then Debe aparecer el staff en la lista 'Exitoso', "<VersionEnPrueba>"
      And I wait for 3 seconds
    When Eliminar un staff creado previamente 'Eliminado', "<VersionEnPrueba>"
      And I wait for 3 seconds
    Then Debe aparecer el staff en la lista 'No encontrado', "<VersionEnPrueba>"