## La siguiente configuracion es para un sistema operativo Linux Ubuntu v. 20.04 LTS
## Memoria RAM 6MB
## Disco Duro 100GB estado solido

## Utilizar la version LTS de node https://nodejs.org/es/ y seguir los pasos para su instalacion y configuración en ubuntu 20.04 LTS

## Instalar Ghost 4.41.3
### instalar ghost-cli
sudo npm install ghost-cli@latest -g

### Crear un directorio vacio
mkdir ghost_4.41.3

### Ingresar a la carpeta
cd ghost_4.41.3

### Instalar ghost 4.41.3
ghost install 4.41.3 --local

### Validar si ghost esta ejecutando http://localhost:2368/ghost/
ghost ls

### Si ghost esta detendio debe comenzarlo de lo contrario no ejecutar la siguiente instruccion
ghost start

## Instalar kraken
### Instalar kraken de forma global
npm install kraken-node -g

### Asegurese de tener git instalador en ubuntu 20.04 LTS sino puede consultar esta pagina https://git-scm.com/download/linux
### Descargar el proyecto actual de pruebas
git clone https://github.com/MISW4103-Automatizacion/Ghost-4.41.3-Kraken.git

### Consideraciones adicionales
### Al momento de la ejecución de sus pruebas con Kraken, puede encontrarse con varios problemas. En primer lugar, como esta librería tiene # dependencias internas, como lo son Appium y Cucumber, es necesario que ambas sean accesibles para su entorno de ejecución.
npm install kraken-node

### Instalar appium desde npm
npm install -g appium

### Se debe instalar la siguiente libreria para los dispositivos en ubuntu 20.04 LTS 
sudo apt install adb -y

### Se ejecutan las pruebas
./node_modules/kraken-node/bin/kraken-node run