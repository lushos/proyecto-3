const config = require ('./dbconfig')

class Comentarios{
    constructor(nombre,estado,mensaje,fecha){
        this.nombre = nombre;
        this.estado=estado;
        this.mensaje=mensaje;
        this.fecha=fecha;
    }
}

module.exports = Comentarios;