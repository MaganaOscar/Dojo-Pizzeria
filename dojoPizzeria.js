function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza () {
    var crustTypes = ["hand tossed", "thin", "stuffed", "pretzel", "pan", "deep-dish"];
    var sauceTypes = ["traditional", "marinara", "parmesan", "buffalo", "BBQ"];
    var cheeses = ["mozzarella", "feta", "cheddar", "parmesan", "asiago", "provolone"];
    var toppings = ["pepperoni", "sausage", "bacon", "spinach", "pineapple", "mushroom", "bell pepper", "onion", "olives"];

    var setCrust, setSauce = "";
    var setCheeses = []; 
    var setToppings = [];
    var randAmtCheeses = Math.floor(Math.random()*3 + 1);
    var randAmtToppings = Math.floor(Math.random()*5 + 1);
    while (randAmtCheeses > 0) {
        setCheeses.push(cheeses[Math.floor(Math.random()*cheeses.length)]);
        randAmtCheeses--;
    }
    while (randAmtToppings > 0) {
        setToppings.push(toppings[Math.floor(Math.random()*toppings.length)]);
        randAmtToppings--;
    }
    setCrust = crustTypes[Math.floor(Math.random() * (crustTypes.length))];
    setSauce = sauceTypes[Math.floor(Math.random() * (sauceTypes.length))];

    return pizzaOven(setCrust, setSauce, setCheeses, setToppings);
}
    
var s1 = randomPizza();
console.log(s1);
