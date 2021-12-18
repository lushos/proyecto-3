var db = require('./dboperations');
var Producto = require('./producto');
var Ingredient = require('./ingredient');
var Recipes = require('./recipes');
var Ventas = require('./ventas');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


if ('development' == app.get('env')) {
    console.log("Rejecting node tls");
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

router.use((request,response,next)=>{
    console.log('servidor listo..');
    next();
})

async function obtenerProducto(request,response){
    var resultado = await dboperations.getProductos();
    response.send(resultado);
}
app.get('/producto',obtenerProducto)

async function obtenerIngredient(request,response){
    var resultado = await dboperations.getIngredients();
    response.send(resultado);
}
app.get('/ingredient',obtenerIngredient)

async function obtenerRecipes(request,response){
    var resultado = await dboperations.getRecipe();
    response.send(resultado);
}
app.get('/recipes',obtenerRecipes)

async function obtenerVentas(request,response){
    var resultado = await dboperations.getVentas();
    response.send(resultado);
}
app.get('/ventas',obtenerVentas)

async function obtenerCharlas(request,response){
    var resultado = await dboperations.getCharlas();
    response.send(resultado);
}
app.get('/charlas',obtenerCharlas)

async function obtenerComentarios(request,response){
    var resultado = await dboperations.getComentarios();
    response.send(resultado);
}
app.get('/comentarios',obtenerComentarios)

async function obtenerUsers(request,response){
    var resultado = await dboperations.getUsers();
    response.send(resultado);
}
app.get('/users',obtenerUsers)

async function obtenerProfiles(request,response){
    var resultado = await dboperations.getProfiles();
    response.send(resultado);
}
app.get('/profiles',obtenerProfiles)

async function obtenerLibros(request,response){
    var resultado = await dboperations.getLibros();
    response.send(resultado);
}
app.get('/libros',obtenerLibros)

var port = process.env.PORT || 8091;
app.listen(port);
console.log('Order API is running at ' + port);




