let names = x => x.map(x => x.name).join(", ");

(() => {
    let a = { name: "Alice", age: 52 };
    let b = { name: "Bob", age: 34 };
    let c = { name: "Charlie", age: 24 };

    let people = [a, b, c];

    console.log(
        names(people), // "Alice, Bob, Charlie"
    );
})();