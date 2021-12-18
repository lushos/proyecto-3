const config = require ('./dbconfig')

class Ventas{
    constructor(nombre,estado,fecha,precio){
        this.nombre = nombre;
        this.estado=estado;
        this.precio=precio;
        this.fecha=fecha;
    }
}

module.exports = Ventas;