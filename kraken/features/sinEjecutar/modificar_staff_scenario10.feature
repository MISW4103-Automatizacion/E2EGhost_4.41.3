Feature: Escenario 10 Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Autor y validar que aparezca en la lista de staff, eliminarlos y validar que ya no aparezca en la lista, el mismo staff pasarlo ahora que sea de tipo Editor y validarlo nuevamente, sale de la aplicación
  
  @user1 @web
  Scenario: Como usuario quiero modificar un staff y eliminarlo de tipo Autor y pasarlo al tipo Editor
    Given Ir a la aplicacion Ghost "<URL>"
      And I wait for 5 seconds
    When Escribo el Site title "<NAMEBLOG>"
      And Escribo el Full name "<FULLNAME>"
      And Escribo el Email address "<USER>"
      And Escribo el Password "<PASSWORD>"
      And Capturo imagen "RegistrarUsuario_Escenario10"
      And Doy click on the button Create account & start publishing →
      And I wait for 5 seconds
      And Doy click on the button no invitar      
      And Capturo imagen "Dashboard_Escenario10"
    Then Deberia ver la palabra 'All done!' despues de crear el usuario
    When Doy click on the button Explore Ghost admin
      And Doy click en el boton del avatar inferior
      And Doy click en el menu Sign out
    When Escribo el email login "<USER>"
      And Escribo el password login "<PASSWORD>"
      And Capturo imagen "Login_Escenario10"
      And Doy clic en el boton Sing In
      And I wait for 2 seconds
    Then Deberia ver la palabra 'Dashboard' en el página principal
    When Doy clic en el boton settings 
      And Doy clic en el boton staff 
      And Capturo imagen "StaffInicio_Escenario10"
      And Doy clic en el boton invite people 
      And Escribo el correo electronico de la invitacion 
      And Doy click en el radio boton Autor 
      And Capturo imagen "StaffCrear_Escenario10"
      And Doy click en el boton Send invitation now 
      And I wait for 3 seconds
    When Doy clic en el boton settings 
      And Doy clic en el boton staff 
      And I wait for 3 seconds
    Then Debe aparecer el staff en la lista 'Exitoso' 
      And Capturo imagen "StaffValidar_Escenario10"
      And I wait for 3 seconds
    When Eliminar un staff creado previamente 'Eliminado'
      And I wait for 3 seconds
    Then Debe aparecer el staff en la lista 'No encontrado'
      And I wait for 3 seconds
    When Doy clic en el boton settings 
      And Doy clic en el boton staff 
      And Doy clic en el boton invite people 
      And Escribo el correo electronico de la invitacion 
      And Doy click en el radio boton Editor 
      And Doy click en el boton Send invitation now 
      And I wait for 3 seconds
    When Doy clic en el boton settings 
      And Doy clic en el boton staff 
      And I wait for 3 seconds
    Then Debe aparecer el staff en la lista 'Exitoso' 
      And I wait for 3 seconds
      And Capturo imagen "StaffValidar_Escenario10"
      And I wait for 3 seconds
    When Eliminar un staff creado previamente 'Eliminado'
      And I wait for 3 seconds
    Then Debe aparecer el staff en la lista 'No encontrado'
      And I wait for 3 seconds
      And Doy click en el boton del avatar inferior
      And Doy click en el menu Sign out