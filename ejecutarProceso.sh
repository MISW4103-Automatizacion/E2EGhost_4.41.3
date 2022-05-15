#!/bin/bash
echo "###########################################"
echo "***  Comienza la ejecucion de todo el proceso ***"
echo "###########################################"

echo "*** Ejecucion cypress ***"
DIRECTORIOACTUAL=$PWD
DIRECTORIOCYPRESS=$DIRECTORIOACTUAL/cypress/test

echo "*** Eliminar directorio imagenes ***"
rm -rf $DIRECTORIOCYPRESS/cypress/screenshots

mv $DIRECTORIOCYPRESS/cypress/integration $DIRECTORIOCYPRESS/cypress/integration_Finalizado
mv $DIRECTORIOCYPRESS/cypress/integration_bk $DIRECTORIOCYPRESS/cypress/integration

echo "*** prepara la ejecucion de Ghost version 4.41.3 ***"
mv $DIRECTORIOCYPRESS/cypress1.json $DIRECTORIOCYPRESS/cypress.json

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

cd $DIRECTORIOACTUAL/cypress/test
echo "*** Se comienza con la ejecución de las pruebas de ls versión de ghost 4.41.3 ***"
cypress run --config video=false

echo "*** Elimina la carpeta para poner las imagenes de la ejecucion de ghost 4.41.3***"
rm -rf $DIRECTORIOACTUAL/imagenes1_All
mkdir $DIRECTORIOACTUAL/imagenes1_All
cp -r $DIRECTORIOCYPRESS/cypress/screenshots $DIRECTORIOACTUAL/imagenes1_All

echo "*** finaliza la ejecucionde ghost versión de ghost 4.41.3 ***"
mv $DIRECTORIOCYPRESS/cypress.json $DIRECTORIOCYPRESS/cypress1.json

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

echo "*** se crea la carpeta para ghost actual version 4.30.0 ***"
rm -rf $DIRECTORIOACTUAL/ghost_4.30.0
mkdir $DIRECTORIOACTUAL/ghost_4.30.0

echo "*** Se instala la versión de ghost 4.30.0 ***"
cd $DIRECTORIOACTUAL/ghost_4.30.0
ghost install 4.30.0 --local

echo "*** prepara la ejecucion de Ghost version 4.30.0 ***"
mv $DIRECTORIOCYPRESS/cypress2.json $DIRECTORIOCYPRESS/cypress.json

cd $DIRECTORIOACTUAL/cypress/test
echo "*** Se comienza con la ejecución de las pruebas de ls versión de ghost 4.30.0 ***"
cypress run --config video=false

echo "*** Elimina la carpeta para poner las imagenes de la ejecucion de ghost 4.30.0***"
rm -rf $DIRECTORIOACTUAL/imagenes2_All
mkdir $DIRECTORIOACTUAL/imagenes2_All
cp -r $DIRECTORIOCYPRESS/cypress/screenshots $DIRECTORIOACTUAL/imagenes2_All

echo "*** finaliza la ejecucionde ghost versión de ghost 4.30.0 ***"
mv $DIRECTORIOCYPRESS/cypress.json $DIRECTORIOCYPRESS/cypress2.json

echo "*** Todas la imagenes de cypress quedaron en la ruta***"
echo $DIRECTORIOACTUAL/imagenes2_All

echo "*** Deja el proceso en su estado inicial***"
mv $DIRECTORIOCYPRESS/cypress/integration $DIRECTORIOCYPRESS/cypress/integration_bk
mv $DIRECTORIOCYPRESS/cypress/integration_Finalizado $DIRECTORIOCYPRESS/cypress/integration