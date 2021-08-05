//DEFINIMOS UNA FUNCION NORMAL
let sumar = function(a:number, b:number){
    return a + b;
}
//DEFINIMOS UNA FUNCION FLECHA

let sumarFlecha = (a:number, b:number) => {
    return a + b;
}
console.log(sumar(5,3));
console.log(`Suma con funcion flecha: ${sumarFlecha(3,2)}`)