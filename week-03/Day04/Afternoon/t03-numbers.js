let ob = {
    name: "Wombat",
    numbers: [1, 45, 2, 58, 3],
};

let copy = {
    ...ob, numbers: { ...ob.numbers.filter(x => x > 10) }
};

console.log("Expected: false\t Actual:", copy === ob);
console.log("Expected: false\t Actual:", copy.numbers === ob.numbers);
console.log("Expected: [45, 58]\t Actual:", copy.numbers);
console.log("Expected: Wombat\t Actual:", copy.name);