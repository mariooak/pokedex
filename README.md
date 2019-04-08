# pokedex
hola
buenas noches  acabo de subir mi proyecto de  app  pokedex les agradesco estoy muy contento tengo instalada mi aplicacion en mi android la verdad que  fue un reto poder experimentar este nuevo lenguaje nunca lo habia visto, aunque me quede  corto por que no le pude  definir  el crud  ni la coneccion del login con firebase busque y busque y no pude hacerlo pero no me rendire hasta lograrlo la verdad que logre hacerles es una galeria con mucho flujo y me siento contento por la oportunidad y ampliar un poco mi experiencia y hacer componentes moviles ademas me ayudado mis conocimientos que tuve de java  en la usaid  y los cursos que hice en Platzi gracias  ahora paso a explicar un poco mi  experiencia:

1-instalar el entorno de desarrollo
desde terminal
choco install -y nodejs.install python2 jdk8
npm install -g react-native-cli
2-entorno de desarrollo android para la emulacion de la app
androi sdk
crear la variable de entorno
3-crear  una aplicacion
creamos una carpeta
desde linea de comados accedemos con cd// y corremos este codigo
react-native init /nombre de nuestro proyecto/

4-ejecutamos android studio
instalamos lo que necesitamos para desde avd manager para que corra nustro emulador
y inicialisamos nuestra virtual devices.
ya corriendo nuestro emulador hacemos lo siguiente
5-luego ya creado nuestro proyecto
desde la terminal desde nuestra carpeta de proyecto
corremos el react-native run-android
6- yo utilice visual studio code
desde visual comense a crear la magia
1-creee una carpeta src para componentes y vistas la verdad solo son vistas
2-mi main principal es el archivo app.js
3- en src puse todas mis screens
4-instale en mi proyecto
npm install --save react-navigation
y react-native link react-native-gesture-handler
para enlace de dependencias que la verdad no estoy seguro de lo que hice 
y lo coloque en mi main
import { createStackNavigator, createAppContainer } from "react-navigation";
ahi hice mi llamado
tuve un incombeniente era primera vez que tenia una experiencia asi en web amo el <a><a> con su hrf pero en este caso pase tres dias
  resolviendo el flujo de las pantallas y descubri lo siguiente no se si podran entenderme pero aqui les dejo
  en una solo pantalla no podia poner diferentes rutas asi que no lograba reutilizar ciertos codigos pero encontre la mi solucion
  ya que el pokeplace tengo varias rutas 
  hice
  una constante en la pagina poke place
  const { navigate }= this.props.navigation;
   para que en los iconos
  onPress={ () => navigate('Teselia')
  pudiera dirigirme a cualquier ruta donde estaban mi appnavigator
  const AppNavigator = createStackNavigator({
   Home,
   Login,
   Pokeplace,
   Kanto,
   Johoto,
   Hoenn,
   Sinnoh,
   Teselia,
   Kalos,
   Alola
  },
  {
      
    headerMode:'none',
  }
luego de esto instale para los componentes 
npm install native-base --save
y comense a hacer mis componentes
ala ves les comento que integre componentes de react-native
por ejemplo los scrollviews
bueno esto estube emetiendole un poco fuerte por los bugg y mas aun que no pude utilizar el fetch de api poke api :( falle en lo que tiene que ver con la logica y la funsionalidad.
----------------------------------------------------------------------------------------------------------------------------------------
buen ahora como me lo pidieron hice 
la apk version que logre ponerla con exito
desde la linea de comandos  
1-buscar la ruta 

PS C:\Program Files\Java\jdk1.8.0_201> cd .\bin\
correr
 keytool -genkeypair -v -keystore pokedex.keystore -alias pokedex-alias -keyalg RSA -keysize 2048 -validity 10000
Enter keystore password:
Tuve un incobeniente al querer crear el 
./gradlew assembleRelease
ya que no me corria por que tenia una imagen npg
asi que investigue y tuve que modificar en el archivo 
gradle.properties
colocar estas lineas
android.enableAapt2=false
android.useDeprecateNdk=true
eso seria practicamente mi experiencia agradeciendoles de antemado y pues no me detendre para pulirme mas y aparender hacerca de la funcionalidades ya que realmente me ayudo mucho esto
una cosa mas
para correr la aplicacion desde la linea de comandos y descargar el repo 
hay que correr el comando
react-native run-android --variant=release
GRACIAS POR TODO ATENTAMENTE MARIO Y SI NO ALCAZON las expectativas tenga la seguridad que seguire practicando para poder cumplir y formar parte de su equipo feliz noche

