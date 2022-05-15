## Especificaciones de la máquina

| Característica      | Especificación                      |
| -------------------- | ----------------------------------- |
| Sistema Operativos   | Linux Ubuntu. Versión 20.04 LTS     |
| Memoria Ram          | 6GB                                 |
| Disco Duro           | 100GB SS                            |
| Git ubuntu 20.04 LTS |  https://git-scm.com/download/linux |
| Node.js              | 16.14.2 LTS https://nodejs.org/es/                        |

## Aplicaciones a Probar
| Característica     | Especificación                      |
| -------------------- | ----------------------------------- |
| Nombre              | Ghost | |
| Version             | 4.41.3 | Original |
| Version             | 4.30.0 | Nueva |

## Pasos Instalacion Cypress ubuntu 20.04 LTS
| Caracteristica.      | Especificación                      |
| -------------------- | ----------------------------------- |
| Descargar el proyecto actual de pruebas    | git clone https://github.com/MISW4103-Automatizacion/E2EGhost\_4.41.3.git |
| Ingresar a la carpeta del proyecto                      | cd E2EGhost_4.41.3 |
| Ingresar a la carpeta                      | cd cypress |
| Instalar dependencias                      | npm install |
| Prerrequisitos para cypress cliente        | apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb |
| Instalacion cypress                        | npm install cypress --save-dev |

## Pasos Instalacion Kraken ubuntu 20.04 LTS
| Característica      | Comandos                      |
| -------------------- | ----------------------------------- |
| Instalar kraken de forma global                    | npm install kraken-node -g |
| Descargar el proyecto actual de pruebas            | git clone https://github.com/MISW4103-Automatizacion/E2EGhost\_4.41.3.git |
| Ingresar a la carpeta                              | cd kraken |
| Instalar dependencias                              | npm install |
| Instalar kraken de forma local para no generar problemas con cucumber| npm install kraken-node |
| Instalar appium                                    | npm install -g appium |
| libreria para los dispositivos en ubuntu 20.04 LTS | sudo apt install adb -y |
            
Desde la consola de la terminal y en la misma carpeta donde descargo las fuente ejecutas los siguientes comandos,  importante antes de ejecutar estos comandos asegurese que su maquina no esta ejecutando ninguna version de ghots, estos script aseguran que la ejecucion se realice desde la url que genera por defecto esta herramienta http://localhost:2368/ghost/. en caso que por fuerza mayor necesite configurar otro puerto de la aplicación por favor debe realizarlos en los sigientes archivos: 

| Herramienta | Archivos configuración Ghost 4.41.3.                                                                                                                                                          | Archivos configuración Ghost 4.30.0.                                                                                                                                                                  |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cypress     |  https://github.com/MISW4103-Automatizacion/E2EGhost\_4.41.3/blob/main/cypress/test/cypress1.json                                                                                             | https://github.com/MISW4103-Automatizacion/E2EGhost\_4.41.3/blob/main/cypress/test/cypress12.json |
| Kraken      | https://github.com/MISW4103-Automatizacion/E2EGhost\_4.41.3/blob/main/kraken/properties1.json | https://github.com/MISW4103-Automatizacion/E2EGhost\_4.41.3/blob/main/kraken/properties2.json         |

Ghost ls para valiar que ninguna versión de ghost se este ejecutando.

## no cambie el nombre del archivo o sus extensiones esto puede provocar que el proceso no se ejecute correctamente.

| Descripcion                       | Comando                                                                                                                                                                           | Carpeta evidencias resember | Evidencias Ghost 4.41.3  | Evidencias Ghost 4.30.0  |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------ | ------------------------ |
| Ejecutar regresión visual cypress | ./ejecutarRegresionVisualCypress.sh | ./reporteFinal\_Cypress     |                          |                          |
| Ejecutar regresión visual kraken  | ./ejecutarRegresionVisualKraken.sh                                                                                                                                                | ./reporteFinal\_Kraken      |                          |                          |
| Ejecutar proceso completo cypress | ./ejecutarProcesoCypress.sh                                                                                                                                                       |                             | ./imagenes1\_All         | ./imagenes2\_All         |
| Ejecutar proceso completo kraken  | ./ejecutarRegresionVisualKraken.sh                                                                                                                                               |                             | ./imagenes1\_Kraken\_All | ./imagenes1\_Kraken\_All |


Nota: estos archivos se pueden ejecutar segun la preferencia de la persona, no dependen el uno al otro.

Nota: El repositorio cuenta con dos carpetas que hacen referencia a las herramientas que se utilizarón para estas pruebas de E2E, cypress y kraken en cada una contiene un archivo readme.md con las consideraciones y pasos para ejecutar exitosamente cada set de pruebas.

[Ver Pros y Contras de las herramientas](https://github.com/MISW4103-Automatizacion/E2EGhost_4.41.3/wiki)

## Lista de funcionalidades a probar

| Módulo           | Funcionalidad |
| ---------------- | ------------- |
| Login - Registro | Consultar     |
|                  | Crear         |
| Members          | Consultar     |
|                  | Crear         |
|                  | Modificar     |
|                  | Actualizar    |
| Posts            | Consultar     |
|                  | Crear         |
|                  | Modificar     |
|                  | Actualizar    |
| Tags             | Consultar     |
|                  | Crear         |
|                  | Modificar     |
|                  | Actualizar    |
| Staff            | Consultar     |
|                  | Crear         |
|                  | Modificar     |
|                  | Actualizar    |
| Página            | Consultar     |
|                  | Crear         |
|                  | Modificar     |
|                  | Actualizar    |



## Lista de escenarios

| Módulo              | Escenarios | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  Gestión de Staff   | 1          |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Contributor y validar que aparezca en la lista de staff, sale de la aplicación                                                                                                                                                                                                                                                                                                                                             |
|  Gestión de Staff   | 2          |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Autor y validar que aparezca en la lista de staff, sale de la aplicación                                                                                                                                                                                                                                                                                                                                                   |
|  Gestión de Staff   | 3          |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Editor y validar que aparezca en la lista de staff, sale de la aplicación                                                                                                                                                                                                                                                                                                                                                  |
|  Gestión de Staff   | 4          |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Administrador y validar que aparezca en la lista de staff, sale de la aplicación                                                                                                                                                                                                                                                                                                                                           |
|  Gestión de Staff   | 5          |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Contributor y validar que aparezca en la lista de staff, eliminarlos y validar que ya no aparezca en la lista, sale de la aplicación                                                                                                                                                                                                                                                                                       |
|  Gestión de Staff   | 6          |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Autor y validar que aparezca en la lista de staff, eliminarlos y validar que ya no aparezca en la lista, sale de la aplicación                                                                                                                                                                                                                                                                                             |
|  Gestión de Staff   | 7          |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Editor y validar que aparezca en la lista de staff, eliminarlos y validar que ya no aparezca en la lista, sale de la aplicación                                                                                                                                                                                                                                                                                            |
|  Gestión de Staff   | 8          |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Administrador y validar que aparezca en la lista de staff, eliminarlos y validar que ya no aparezca en la lista, sale de la aplicación                                                                                                                                                                                                                                                                                     |
|  Gestión de Staff   | 9          |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Administrador y validar que aparezca en la lista de staff, eliminarlos y validar que ya no aparezca en la lista, el mismo staff pasarlo ahora que sea de tipo Autor y validarlo nuevamente, sale de la aplicación                                                                                                                                                                                                          |
|  Gestión de Staff   | 10         |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Autor y validar que aparezca en la lista de staff, eliminarlos y validar que ya no aparezca en la lista, el mismo staff pasarlo ahora que sea de tipo Editor y validarlo nuevamente, sale de la aplicación                                                                                                                                                                                                                 |
|  Gestión de Staff   | 11         |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Editor y validar que aparezca en la lista de staff, eliminarlos y validar que ya no aparezca en la lista, el mismo staff pasarlo ahora que sea de tipo Administrador y validarlo nuevamente, sale de la aplicación                                                                                                                                                                                                         |
|  Gestión de Staff   | 12         |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige hasta el modulo de staff. Crear un staff de tipo Contributor y validar que aparezca en la lista de staff, eliminarlos y validar que ya no aparezca en la lista, el mismo staff pasarlo ahora que sea de tipo Autor y validarlo nuevamente, sale de la aplicación                                                                                                                                                                                                            |
|  Gestión de Tag     | 13         |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige al modulo de tags. Crear un tag, validar que aparezca en la lista de tags y salir de la aplicación                                                                                                                                                                                                                                                                                                                                                                          |
|  Gestión de Tag     | 14         |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige al modulo de tags. Crear un tag, lo valida. Modifica un tag y valida que aparezca en la lista de tags y sale de la aplicación                                                                                                                                                                                                                                                                                                                                               |
|  Gestión de Tag     | 15         |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige al modulo de tags. Crea un tag y valida la creación. Elimina un tag y valida que no aparezca en la lista de tags y sale de la aplicación                                                                                                                                                                                                                                                                                                                                    |
|  Gestión de Tag     | 16         |   Ingresar a la aplicación, si el usuario no existe se crea, se dirige al modulo de tags. Crear y validar tag, modificar y validar tag, eliminar un tag y validar que no aparezca en la lista de tags y salir de la aplicación                                                                                                                                                                                                                                                                                                                     |
|  Gestión de post    | 17         |   Ingresar a la aplicación, si el usuario no existe se crea. Crear un post y publicarlo. Salir de la aplicación, dirigirse a la pagina Web y validar que aparezca el post en la página.                                                                                                                                                                                                                                                                                                                                                            |
|  Gestión de post    | 18         |   Ingresar a la aplicación, si el usuario no existe se crea. Crear un post y publicarlo. Salir de la aplicación, dirigirse a la pagina Web y validar que aparezca el post en la página. Ingresar a la aplicación, ir al módulo de posts y modificar el primer post. Salir de la aplicación, dirigirse a la pagina Web y validar que aparezca el post en la página.                                                                                                                                                                                 |
|  Gestión de post    | 19         |   Ingresar a la aplicación, si el usuario no existe se crea. Crear un post y publicarlo. Salir de la aplicación, dirigirse a la pagina Web y validar que aparezca el post en la página. Ingresar a la aplicación, ir al módulo de posts y eliminar el primer post. Salir de la aplicación, dirigirse a la página Web y validar que ya no aparezca el post en la página.                                                                                                                                                                            |
|  Gestión de post    | 20         |   Ingresar a la aplicación, si el usuario no existe se crea. Crear un post y publicarlo. Salir de la aplicación, dirigirse a la página Web y validar que aparezca el post en la página. Ingresar a la aplicación, ir al módulo de posts y modificar el primer post. Salir de la aplicación, dirigirse a la página Web y validar que aparezca el post en la página. Ingresar a la aplicación, ir al módulo de posts y eliminar el primer post. Salir de la aplicación, dirigirse a la página Web y validar que ya no aparezca el post en la página. |
|  Gestión de members | 21         |   Ingresar a la aplicación, si el usuario no existe se crea. Se dirige al módulo Member. Crear un member, validar que aparezca en la lista de members y salir de la aplicación.                                                                                                                                                                                                                                                                                                                                                                    |
|  Gestión de members | 22         |   Ingresar a la aplicación, si el usuario no existe se crea. Se dirige al módulo Member. Crear un member y validar que aparezca en la lista de member. Eliminar el member, validar que ya no aparezca en la lista y salir de la aplicación.                                                                                                                                                                                                                                                                                                        |
|  Gestión de members | 23         |   Ingresar a la aplicación, si el usuario no existe se crea. Se dirige al módulo Member. Modificar un member, validar que aparezca en la lista de members y salir de la aplicación.                                                                                                                                                                                                                                                                                                                                                                |
|  Gestión de members | 24         |  Ingresar a la aplicacion, si el usuario no existe se crea. Se dirige al modulo Member. Crear un member. Darle opción de  unsubscribe y validar que aparezca en la lista de members. Eliminar el member´, validar que no aparezca en la lista de members y salir de la aplicacion.                                                                                                                                                                                                                                                                 |
|  Gestión páginas    | 25         | Ingresar a la aplicacion, si el usuario no existe se crea. Crear una página y publicarlo. Salir de la aplicacion, dirigirse a la pagina Web y validar que la pagina tenga el estado de PUBLISHED, salir de la aplicacion.                                                                                                                                                                                                                                                                                                                          |
|  Gestión páginas    | 26         | Ingresar a la aplicacion, si el usuario no existe se crea. Crear una página y publicarlo. Salir de la aplicacion, dirigirse a la pagina Web y validar que la pagina tenga el estado de PUBLISHED, ingresar a la pagina recien creada, cambia el titulo, actualiza la pagina y vuelve a validar con el nuevo titulo el estado PUBLISHED, salir de la aplicacion.                                                                                                                                                                                    |
|  Gestión páginas    | 27         | Ingresar a la aplicacion, si el usuario no existe se crea. Crear una página y publicarlo. Salir de la aplicacion, dirigirse a la pagina Web y validar que la pagina tenga el estado de PUBLISHED, ingresar a la pagina recien creada, cambia el titulo, actualiza la pagina y vuelve a validar con el nuevo titulo el estado PUBLISHED, salir de la aplicacion.                                                                                                                                                                                    |
|  Gestión páginas    | 28         | Ingresar a la aplicacion, si el usuario no existe se crea. Crear una página y publicarlo. Salir de la aplicacion, dirigirse a la pagina Web y validar que la pagina tenga el estado de PUBLISHED, ingresar a la pagina recien creada, cambia el titulo, actualiza la pagina y vuelve a validar con el nuevo titulo el estado PUBLISHED luego se elimina la pagina salir de la aplicacion.                                                                                                                                                          |
