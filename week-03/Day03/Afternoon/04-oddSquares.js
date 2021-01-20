let square = x => x * x;
let odd = x => x % 2 !== 0;

let oddSquares = values => values.map(square).filter(odd);

console.log(
    oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
    oddSquares([2, 3, 4]), // [9]
);