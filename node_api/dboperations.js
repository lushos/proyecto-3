//agregamos configuracion de la BD SQL server
var config = require ('./dbconfig');
//agregamos el modulo mssql que administrala BD SQL server
const sql = require('mssql');

async function getProductos(){
    try{
        let pool = await sql.connect(config);
        let productos = await pool.request().query("select * from producto");
        return productos.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getIngredients(){
    try{
        let pool = await sql.connect(config);
        let ingredients = await pool.request().query("select * from ingredients");
        return ingredients.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getRecipe(){
    try{
        let pool = await sql.connect(config);
        let recipes = await pool.request().query("select imagen, recipe_name, ingredientes, descript from recipes");
        return recipes.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getVentas(){
    try{
        let pool = await sql.connect(config);
        let ventas = await pool.request().query("select * from proyecto_ventas");
        return ventas.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getCharlas(){
    try{
        let pool = await sql.connect(config);
        let charlas = await pool.request().query("select * from charlas");
        return charlas.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getComentarios(){
    try{
        let pool = await sql.connect(config);
        let comentarios = await pool.request().query("select * from comentarios");
        return comentarios.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getUsers(){
    try{
        let pool = await sql.connect(config);
        let users = await pool.request().query("select * from users");
        return users.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getProfiles(){
    try{
        let pool = await sql.connect(config);
        let profiles = await pool.request().query("select * from profiles");
        return profiles.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getLibros(){
    try{
        let pool = await sql.connect(config);
        let libros = await pool.request().query("select * from libros");
        return libros.recordsets;
    }catch(error){
        console.log(error);
    }
}


module.exports = {
    getProductos : getProductos,
    getIngredients :getIngredients,
    getRecipe : getRecipe,
    getVentas : getVentas,
    getCharlas : getCharlas,
    getComentarios : getComentarios,
    getUsers : getUsers,
    getProfiles : getProfiles,
    getLibros : getLibros
}