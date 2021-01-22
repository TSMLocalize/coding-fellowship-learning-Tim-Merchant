let add = (x, y) => x += y;

// A pluck function
let pluckPrice = x => x.price;

// Could do this with just reduce, to prevent creating another array and iterating twice.
let total = items => items.map(pluckPrice).reduce(add, 0).toFixed(2);


(() => {
    let shoppingList = [{
        name: "coffee",
        price: 3.50,
    }, {
        name: "tea",
        price: 2.50,
    }, {
        name: "toblerone",
        price: 3.20,
    }, {
        name: "newspaper",
        price: 0.10,
    }];

    console.log(
        total(shoppingList), // "9.30"
    );
})();