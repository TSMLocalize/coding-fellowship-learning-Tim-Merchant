let square = x => x * x;
let dividesBy3 = x => x % 3 === 0;

let squaresDivisibleBy3 = x => x.map(square).filter(dividesBy3);

console.log(
    squaresDivisibleBy3([-3, -2, -9, 3, 4, 5, 6, 7, 8, 9]), // [9, 81, 9, 36, 81]
);