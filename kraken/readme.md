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
