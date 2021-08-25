/* Esta clase corresponde al modelo de datos de nuestra aplicacion
por eso es recomendado crearlo en un archivo por separado
Esta clase almacenara los atributos de un objeto de tipo persona y 
es una clase de modelo ya que corresponde al modelo de clases 
de muestra app  */

export class Persona {
    /*
    //Atributos de la clase
    nombre: string;
    apellido: string;

    constructor(nombre: string, apellido: string){
        this.nombre = nombre;
        this.apellido = apellido;
    }*/

    /*Dentro del constructor declaramos e inicializamos los atributos, lo mismo de arriba pero en 
    menos lineas de codigo, de manera automatica TypeScript asigna de manera automatica los valores
    que recibe el constructor por eso ya no es necesario usar el this*/
    constructor(public nombre: string, public apellido: string){}
}