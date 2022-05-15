#!/bin/bash
echo "###########################################"
echo "***  Comienza la ejecucion de todo el proceso ***"
echo "###########################################"

echo "*** Ejecucion kraken ***"
DIRECTORIOACTUAL=$PWD
DIRECTORIOCYPRESS=$DIRECTORIOACTUAL/kraken

echo "*** prepara la ejecucion de Ghost version 4.41.3 ***"
mv $DIRECTORIOCYPRESS/properties1.json $DIRECTORIOCYPRESS/properties.json

rm -rf $DIRECTORIOCYPRESS/features/ejecutados
mkdir $DIRECTORIOCYPRESS/features/ejecutados

echo "*** prepara los archivos de la ejecución de Ghost version 4.41.3 ***"
mv $DIRECTORIOCYPRESS/features/*.feature $DIRECTORIOCYPRESS/features/ejecutados
mv $DIRECTORIOCYPRESS/features/sinEjecutar/*.feature $DIRECTORIOCYPRESS/features

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
rm -rf $DIRECTORIOACTUAL/imagenes1_Kraken_All
mkdir $DIRECTORIOACTUAL/imagenes1_Kraken_All
cp -r $DIRECTORIOCYPRESS/reports/*.png $DIRECTORIOACTUAL/imagenes1_Kraken_All

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
rm -rf $DIRECTORIOACTUAL/imagenes2_Kraken_All
mkdir $DIRECTORIOACTUAL/imagenes2_Kraken_All
cp -r $DIRECTORIOCYPRESS/reports/*.png $DIRECTORIOACTUAL/imagenes2_Kraken_All

echo "*** finaliza la ejecucionde ghost versión de ghost 4.30.0 ***"
mv $DIRECTORIOCYPRESS/properties.json $DIRECTORIOCYPRESS/properties2.json

echo "*** Devuelve los archivos a su estado inicial ***"
mv $DIRECTORIOCYPRESS/features/*.feature $DIRECTORIOCYPRESS/features/sinEjecutar
mv $DIRECTORIOCYPRESS/features/ejecutados/*.feature $DIRECTORIOCYPRESS/features

