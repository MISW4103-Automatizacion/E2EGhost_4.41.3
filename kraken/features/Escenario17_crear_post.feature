Feature: Escenario 17 Ingresar a la aplicacion, si el usuario no existe se crea. Crear un post y publicarlo. Salir de la aplicacion, dirigirse a la pagina Web y validar que aparezca el post en la pagina.

@user1 @web
  Scenario: Como usuario quiero crear un Post
    Given Ir a la aplicacion Ghost "<URL>"
      And I wait for 5 seconds
    When Escribo el Site title "<NAMEBLOG>"
      And Escribo el Full name "<FULLNAME>"
      And Escribo el Email address "<USER>"
      And Escribo el Password "<PASSWORD>"
      And Capturo imagen "RegistrarUsuario_Escenario17"
      And Doy click on the button Create account & start publishing →
      And I wait for 5 seconds
      And Doy click on the button no invitar
      And Capturo imagen "Dashboard_Escenario17"
    Then Deberia ver la palabra 'All done!' despues de crear el usuario
    When Doy click on the button Explore Ghost admin
      And Doy click en el boton del avatar inferior
      And Doy click en el menu Sign out
    When Escribo el email login "<USER>"
      And Escribo el password login "<PASSWORD>"
      And Capturo imagen "Login_Escenario17"
      And Doy clic en el boton Sing In
      And I wait for 2 seconds
    Then Deberia ver la palabra 'Dashboard' en el página principal
      And Doy click en el boton New Post
      And Capturo imagen "PostCreacion_Escenario17"
      And Escribo el titulo del post
      And Escribo el texto del post
      And Doy click en el menu de publicar post
      And Capturo imagen "PostPublicacion_Escenario17"
      And Doy click en el boton Publish post
      And I wait for 2 seconds
      And Doy click en la confirmacion de la publicacion del post
      And I wait for 5 seconds
      And Capturo imagen "PostConfirmacion_Escenario17"
      And Doy click en el boton Post      
      And Doy click en el boton del avatar inferior
      And Doy click en el menu Sign out
      And I wait for 2 seconds
      And Voy a la pagina de visualizacion "<URLMAIN>"
      And I wait for 4 seconds
    Then Debe aparecer el post creado en la pagina
    When Ir a la aplicacion Ghost "<URL>"
      And I wait for 5 seconds
      And Escribo el email login "<USER>"
      And Escribo el password login "<PASSWORD>"
      And Doy clic en el boton Sing In
      And I wait for 2 seconds
      And Doy click en el boton Posts
      And I wait for 2 seconds
      And Doy click en el post recien creado
      And Doy click en el boton settings del post
      And Doy click en delete post
      And Doy click en confirmacion delete post
      And Doy click en el boton Post
      And Doy click en el boton del avatar inferior
      And Doy click en el menu Sign out
      And I wait for 2 seconds