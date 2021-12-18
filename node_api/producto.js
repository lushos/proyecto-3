const config = require ('./dbconfig')

class Producto{
    constructor(id_producto,estado,valor,descripcion,nombre,tamano){
        this.id_producto = id_producto;
        this.estado=estado;
        this.valor=valor;
        this.descripcion=descripcion;
        this.nombre=nombre;
        this.tamano=tamano;
    }
}

module.exports = Producto;