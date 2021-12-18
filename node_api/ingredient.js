const config = require ('./dbconfig')

class Ingredient{
    constructor(ingredient_id,ingredient_name,ingredient_price){
        this.ingredient_id = ingredient_id;
        this.ingredient_name=ingredient_name;
        this.ingredient_price=ingredient_price;
        
    }
}

module.exports = Ingredient;