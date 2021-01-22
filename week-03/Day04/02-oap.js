let oap = x => x.age > 65;

(() => {
    let a = { name: "Alice", age: 52 };
    let b = { name: "Bob", age: 67 };
    let c = { name: "Charlie", age: 24 };
    let d = { name: "Bob", age: 97 };

    console.log(
        oap(a), // false
        oap(b), // true
        oap(c), // false
        oap(d), // true
    );
})();