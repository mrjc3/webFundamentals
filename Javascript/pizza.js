function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
        pizza.crustType = crustType;
        pizza.sauceType = sauceType;
        pizza.cheeses = cheeses;
        pizza.toppings = toppings;
        return pizza;
}

// var johnnysza = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
// console.log(johnnysza);

// var angelsza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
// console.log(angelsza)

// var momsza = pizzaOven("thin", "marinara", "no cheese", ["tomatos", "artichokes"])
// var dadsza = pizzaOven("pan", "white sauce", "cheddar", ["pepperoni", "ham"])