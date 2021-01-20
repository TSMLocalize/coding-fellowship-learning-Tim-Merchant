let odd = x => x % 2 !== 0;

let odds = values => values.filter(odd);

console.log(
    odds([1, 2, 3]), // [1, 3]
    odds([1, 2, 3, 4, 5, 6]), // [1, 3, 5]
);