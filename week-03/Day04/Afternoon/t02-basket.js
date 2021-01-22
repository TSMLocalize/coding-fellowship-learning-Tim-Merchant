let add = (x, y) => x + y;

class Basket {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    list() {
        return this.items.map(item => item.name);
        // item.getName methods preferable
    }

    total() {
        return "£" + this.items.map(item => item.price).reduce(add, 0).toFixed(2);
    }
}

class BasketItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

let basket = new Basket();

let item1 = new BasketItem("coffee", 3.50);
let item2 = new BasketItem("tea", 2.50);

basket.add(item1);
basket.add(item2);

console.log(
    basket.total(), // £6.00
    basket.list(), // ["coffee", "tea"]
);