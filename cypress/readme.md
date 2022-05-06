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
git clone 

## Instalar cypress
npm install

## Instalar faker
npm i @faker-js/faker --save

### Se ejecutan las pruebas
cd test/cypress
cypress run --headless