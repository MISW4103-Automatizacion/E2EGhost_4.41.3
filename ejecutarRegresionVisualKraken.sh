#!/bin/bash

echo "###########################################"
echo "*** Ejecucion regresion visual grupo 12 ***"
echo "###########################################"

echo "*** Ejecucion kraken ***"
DIRECTORIOACTUAL=$PWD
DIRECTORIOCYPRESS=$DIRECTORIOACTUAL/kraken

echo "*** prepara la ejecucion de Ghost version 4.41.3 ***"
mv $DIRECTORIOCYPRESS/properties1.json $DIRECTORIOCYPRESS/properties.json


echo "*** Elimina la carpeta para poner las imagenes de la ejecucion de ghost 4.41.3***"
rm -rf $DIRECTORIOCYPRESS/reports
mkdir $DIRECTORIOCYPRESS/reports


echo "*** se detiene Ghost version 4.41.3 ***"
if [ -d  "$DIRECTORIOACTUAL/ghost_4.41.3" ]; then
   echo "*** se detiene Ghost version 4.41.3 ***"
   cd $DIRECTORIOACTUAL/ghost_4.41.3
   ghost stop
   cd $DIRECTORIOACTUAL
fi

echo "*** se detiene Ghost version 4.30.0 ***"
if [ -d  "$DIRECTORIOACTUAL/ghost_4.30.0" ]; then
   echo "*** se detiene Ghost version 4.30.0 ***"
   cd $DIRECTORIOACTUAL/ghost_4.30.0
   ghost stop
   cd $DIRECTORIOACTUAL
fi

echo "*** se crea la carpeta para ghost actual version 4.41.3 ***"
rm -rf $DIRECTORIOACTUAL/ghost_4.41.3
mkdir $DIRECTORIOACTUAL/ghost_4.41.3

echo "*** Se instala la versión de ghost 4.41.3 ***"
cd $DIRECTORIOACTUAL/ghost_4.41.3
ghost install 4.41.3 --local

echo "*** Se comienza con la ejecución de las pruebas de ls versión de ghost 4.41.3 ***"
cd $DIRECTORIOCYPRESS
./node_modules/kraken-node/bin/kraken-node run

echo "*** Elimina la carpeta para poner las imagenes de la ejecucion de ghost 4.41.3***"
rm -rf $DIRECTORIOACTUAL/imagenes1_Kraken
mkdir $DIRECTORIOACTUAL/imagenes1_Kraken
cp -r $DIRECTORIOCYPRESS/reports/*.png $DIRECTORIOACTUAL/imagenes1_Kraken

echo "*** finaliza la ejecucionde ghost versión de ghost 4.41.3 ***"
mv $DIRECTORIOCYPRESS/properties.json $DIRECTORIOCYPRESS/properties1.json

echo "*** se detiene Ghost version 4.41.3 ***"
if [ -d  "$DIRECTORIOACTUAL/ghost_4.41.3" ]; then
   echo "*** se detiene Ghost version 4.41.3 ***"
   cd $DIRECTORIOACTUAL/ghost_4.41.3
   ghost stop
   cd $DIRECTORIOACTUAL
fi

echo "*** se detiene Ghost version 4.30.0 ***"
if [ -d  "$DIRECTORIOACTUAL/ghost_4.30.0" ]; then
   echo "*** se detiene Ghost version s4.30.0 ***"
   cd $DIRECTORIOACTUAL/ghost_4.30.0
   ghost stop
   cd $DIRECTORIOACTUAL
fi

echo "*** Elimina la carpeta para poner las imagenes de la ejecucion de ghost 4.30.0***"
rm -rf $DIRECTORIOCYPRESS/reports
mkdir $DIRECTORIOCYPRESS/reports

echo "*** se crea la carpeta para ghost actual version 4.30.0 ***"
rm -rf $DIRECTORIOACTUAL/ghost_4.30.0
mkdir $DIRECTORIOACTUAL/ghost_4.30.0

echo "*** Se instala la versión de ghost 4.30.0 ***"
cd $DIRECTORIOACTUAL/ghost_4.30.0
   ghost install 4.30.0 --local

echo "*** prepara la ejecucion de Ghost version 4.30.0 ***"
mv $DIRECTORIOCYPRESS/properties2.json $DIRECTORIOCYPRESS/properties.json

echo "*** Se comienza con la ejecución de las pruebas de ls versión de ghost 4.30.0 ***"
cd $DIRECTORIOCYPRESS
./node_modules/kraken-node/bin/kraken-node run

echo "*** Elimina la carpeta para poner las imagenes de la ejecucion de ghost 4.30.0***"
rm -rf $DIRECTORIOACTUAL/imagenes2_Kraken
mkdir $DIRECTORIOACTUAL/imagenes2_Kraken
cp -r $DIRECTORIOCYPRESS/reports/*.png $DIRECTORIOACTUAL/imagenes2_Kraken

echo "*** finaliza la ejecucionde ghost versión de ghost 4.30.0 ***"
mv $DIRECTORIOCYPRESS/properties.json $DIRECTORIOCYPRESS/properties2.json

echo "*** Instala las librerias de resemble ***"
cd $DIRECTORIOACTUAL
cd resemble
npm install

echo "*** Eliminar carpeta de las imagenes finales***"
rm -rf $DIRECTORIOACTUAL/reporteFinal_Kraken
mkdir $DIRECTORIOACTUAL/reporteFinal_Kraken

echo "*** Ejecuta el comparador de imagenes con resemble ***"
node copiarArchivos_Kraken.js
node index_Kraken.js

echo "*** El reporte de la regresion visual en cypress quedo en la ruta: ***"
echo $DIRECTORIOACTUAL/reporteFinal_Cypress

echo "*** Finaliza el reporte ***"