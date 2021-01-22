class recipe {
    constructor(){

    }
}

class ingredient{
    constructor(){
        
    }
}

// ingredients take a name, followed by an array of dietary notes
let flour = new Ingredient("Flour", ["gluten"]);
let eggs = new Ingredient("Eggs", ["animal produce"]);
let sugar = new Ingredient("Sugar", []);
let butter = new Ingredient("Butter", ["dairy", "animal produce"]);

// a recipe takes a name
let cake = new Recipe("Cake");

// we can add ingredients plus amounts
cake.addIngredient(flour, "200g");
cake.addIngredient(butter, "100g");
cake.addIngredient(sugar, "50g");
cake.addIngredient(eggs, 2);

// we can add a method
cake.addMethod("Put them in a bowl, mix them together, cook for a bit. Job's a good'un");

// we can see the recipe
console.log(cake.display());

/*
    Cake

    Ingredients

    - 200g Flour
    - 100g Butter
    - 50g Sugar
    - 2 Eggs

    Method

    Put them in a bowl, mix them together, cook for a bit. Job's a good'un

*/

// we can list dietary information
console.log(cake.dietary()); // "gluten, animal produce, dairy"


// is the recipe vegan? (i.e. contains animal produce)
console.log(cake.vegan()); // false