//Importamos la clase que se va a utilizar
import {Persona} from './persona';

/* Creamos un objeto de la clase persona desde otro archivo */
let persona1 = new Persona("Juan", "Lara");
console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.apellido);

/* 
*Para ejecutar nuestros modulos necesitamos resolverlo a traves de un servidor
*por ejemplo el concepto de webpack
Ejecutamos los comandos en la terminal
npm install webpack webpack-cli webpack-dev-server

*Esto descargara el webpack para que podaos inicializar nuestra aplicacion ya que los modulos
*no se pueden ejecutar a traves del index.html se necesita forsozamente el servidor

*Despues tenemos que instalar el typescript loader para poder cargar las clases
comandos:
npm install typescript ts-loader --save-dev
* --save-dev: salvamos en nuestro ambiente de desarrollo

*Despues debemos de generar nuestro archivo package.json
comando:
npm init -y

*En nuestro package.json agregamos lo siquiente:
"scripts":{
    "start": "webpack-cli serve --mode development"
}
o si no funciona
"scripts":{
    "start": "webpack serve --open""
}

*Agregamos el archivo de webpack.config.js
Y dentro de este archivo en output>filename escribimos nuestro archivo de entrada, 
en este caso modulos.js(Que es en donde se realizan las importaciones) 
e igual se cambia en el path

*Luego inicializamos nuestro servidor
npm -start
*/