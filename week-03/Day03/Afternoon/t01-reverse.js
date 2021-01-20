let reverseString = x => (Array.from(x).reverse()).join("");

let reverse = x => x.map(reverseString);

console.log(
    reverse(["fish", "bolton", "green"]), // ["hsif", "notlob", "neerg"]
);