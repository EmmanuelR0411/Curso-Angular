/* Generics es utilizar un arreglo y esppecificar el tipo de dato que va a almacenar dicho
arreglo, esto permite agregar unicamente ese tipo de informacion al arreglo
*/
let arregloNumeros:Array<number>;

arregloNumeros = [1,2,3,4];
//No permite agregar otro tipo de dato al arreglo
//arregloNumeros = ["Numero"];

console.log(arregloNumeros);
//Accedemos a un solo elemento
console.log(arregloNumeros[0]);
