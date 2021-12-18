const config = require ('./dbconfig')

class Profiles{
    constructor(nombre,email,password,telefono,mensaje){
        this.nombre = nombre;
        this.email=email;
        this.password=password;
        this.telefono=telefono;
        this.mensaje=mensaje;
    }
}

module.exports = Profiles;