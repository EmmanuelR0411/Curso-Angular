"use strict";
//Creamos una variable usuario que debe respetar lo que se especifico en la interface
var usuario1 = { nombreUsuario: "Juan", password: "1234", confirmarPasword: "1234" };
console.log(usuario1);
//Se puede acceder a un valor del atributo especifico
console.log(usuario1.nombreUsuario);
var avion = {
    abordarTransporte: function () {
        console.log("Abordando");
    }
};
avion.abordarTransporte();
