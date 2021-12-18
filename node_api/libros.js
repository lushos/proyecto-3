const config = require ('./dbconfig')

class Libros{
    constructor(id,nombre,genero,autor,descripcion,fecha){
        this.id = id;
        this.nombre=nombre;
        this.genero=genero;
        this.autor=autor;
        this.descripcion=descripcion;
        this.fecha=fecha;
    }
}

module.exports = Libros;