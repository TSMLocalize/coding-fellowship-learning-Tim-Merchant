let oaps = people => people.filter(person => person.age > 65);

(() => {
    let a = { name: "Alice", age: 52 };
    let b = { name: "Bob", age: 34 };
    let c = { name: "Charlie", age: 24 };
    let d = { name: "Bob", age: 97 };

    let folks = [a, b, c, d];

    console.log(
        oaps(folks), // [{ name: "Bob", age: 97 }]
    );
})();