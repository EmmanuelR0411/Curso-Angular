/* Una interface es un contrato que se debe de respetar, se utiliza la palabra
recervada interface 
*/
interface Usuario{
    nombreUsuario:string;
    password:string;
    //PAra indicar que un atrubuto es opcional se utiliza el signo de interrogacion
    confirmarPasword?:string;
}

//Creamos una variable usuario que debe respetar lo que se especifico en la interface
let usuario1:Usuario = {nombreUsuario:"Juan", password: "1234", confirmarPasword:"1234"};

console.log(usuario1);
//Se puede acceder a un valor del atributo especifico
console.log(usuario1.nombreUsuario);

interface Abordar{
    //Se define un metodo
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function () {
        console.log("Abordando");
    }
}

avion.abordarTransporte();