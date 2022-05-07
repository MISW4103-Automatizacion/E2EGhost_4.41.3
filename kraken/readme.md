### Especificaciones de la máquina

| Característica      | Especificación                      |
| -------------------- | ----------------------------------- |
| Sistema Operativos   | Linux Ubuntu. Versión 20.04 LTS     |
| Memoria Ram          | 6GB                                 |
| Disco Duro           | 100GB SS                            |
| Git ubuntu 20.04 LTS |  https://git-scm.com/download/linux |
| Node.js              | 16.14.2 LTS                         |

### Aplicación a Probar
| Característica     | Especificación                      |
| -------------------- | ----------------------------------- |
| Nombre              | Ghost |
| Version             | 4.41.3 |

### Pasos Instalacion Ghots ubuntu 20.04 LTS
| Característica      | Comandos                      |
| -------------------- | ----------------------------------- |
| Instalar cliente ghost                   | sudo npm install ghost-cli@latest -g |
| Crear un directorio vacio                | mkdir ghost\_4.41.3 |
| Ingresar a la carpeta                    | cd ghost\_4.41.3 |
| Instalar ghost 4.41.3                    | ghost install 4.41.3 --local |
| Validar si ghost esta ejecutando.        | [http://localhost:2368/ghost/](http://localhost:2368/ghost/) |

### Pasos Instalacion Kraken ubuntu 20.04 LTS
| Característica      | Comandos                      |
| -------------------- | ----------------------------------- |
| Instalar kraken de forma global                    | npm install kraken-node -g |
| Descargar el proyecto actual de pruebas            | git clone https://github.com/MISW4103-Automatizacion/E2EGhost\_4.41.3.git |
| Ingresar a la carpeta                              | cd kraken |
| Instalar dependencias                              | npm install |
| Instalar kraken de forma local para no generar problemas con cucumber| npm install kraken-node |
| Instalar appium                                    | npm install -g appium |
| libreria para los dispositivos en ubuntu 20.04 LTS | sudo apt install adb -y |

### Comando para ejecutar las pruebas
./node_modules/kraken-node/bin/kraken-node run

| Consideraciones tener en cuenta                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Validar que la direccion web de la aplicaion de ghost sea http://localhost:2368/ghost/                                                                                                               |
| En caso de no ser asi debe modificar el archivo kraken/properties.json y cambiar las varibales "URL": "http://localhost:2368/ghost/" y "URLMAIN": "http://localhost:2368/" a la ruta correspondiente |
| Debe serguir el paso a paso de este readme para garantizar la efectiva ejecucion de las pruebas.                                                                                                                    |
| Las pruebas estan construidas para que se ejecuten en cualquier orden que lo disponga ya que no tiene dependecia las unas con las otras.                                                             |
| Para la primera ejecución el sistema valida si el usuario existe en caso contrario lo creara.                                                                                                        |
