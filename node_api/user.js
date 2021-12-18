const config = require ('./dbconfig')

class Users{
    constructor(id,nombre,apellido,usuario,cargo){
        this.id=id;
        this.nombre = nombre;
        this.apellido=apellido;
        this.usuario=usuario;
        this.cargo=cargo;
    }
}

module.exports = Users;