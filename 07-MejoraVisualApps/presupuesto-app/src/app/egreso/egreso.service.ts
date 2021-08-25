import { Egreso } from "./egreso.model";


export class EgresoServicio{
    egresos: Egreso[]=[
        new Egreso("Renta Dpto", 900),
        new Egreso("Ropa", 200)
    ];

    eliminarEgreso(egreso: Egreso){
        const indice: number = this.egresos.indexOf(egreso);

        this.egresos.splice(indice, 1)
    }
}