const config = require ('./dbconfig')

class Recipe{
    constructor(recipe_id,recipe_name,imagen,ingredientes,descript){
        this.recipe_id = recipe_id;
        this.recipe_name=recipe_name;
        this.imagen=imagen;
        this.ingredientes=ingredientes;
        this.descript=descript;
    }
}

module.exports = Recipe;