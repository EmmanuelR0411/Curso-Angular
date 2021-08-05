"use strict";
// Definicion de variables desde TS 
/* Las variables se declaran con let  y si no se inicializan con un valor tiene que declararse el
tipo, si se inicializa TS automaticamnete detecta el valor gracias a la inferencia de tipo
*/
var saludo = 'Hola Mundo desde TypeScript';
//TS no deja darle un valor que no sea de su tipo (int string etc.)
//saludo = 10;
var numero;
numero = 10;
//any nos permite alacenar cualquier tipo de dato
var cualquiera;
cualquiera = 10;
cualquiera = 'Ahora soy una cadena';
//CONSTANTES
var PI = 3.1416;
//TS no permite cambiar el valor a una variable de tipo constante
//PI = 10;
var saludar = function () {
    console.log(saludo);
    console.log(numero);
    console.log(cualquiera);
    console.log(PI);
};
saludar();
/* PASOS PARA TRABAJAR CON TYPESCRIPT
1.- Para poder correr un programa de ts primeramente se tiene que compilar con el comando
    tsc nombreArchivo.js
    Esto crea de manera automatica un archivo .js
2.- De igual forma le debemos indicar al IDE que estamos trabajando con un proyecto de TS, con el
    comando
    tsc -init
    Esto crea un archivo de configuracion de typeScript
3.- Convertir en automatico los archivos TS a JS
    para esto utilizamos el comando
    tsc -w
    Con esto se observa cualquier cambio que se haga en el archivo -ts y se compilara en automatico
*/ 
