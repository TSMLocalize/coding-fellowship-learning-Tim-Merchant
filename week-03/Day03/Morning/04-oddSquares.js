let square = x => x * x;
let odd = x => x % 2 !== 0;

let oddSquares = (values) => {
    let oddSquareArray = [];

    for (let i = 0; i < values.length; i++) {
        if (odd(square(values[i]))) {
            oddSquareArray.push(square(values[i]));
        }
    }

    return oddSquareArray;
}

console.log(
    oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
    oddSquares([2, 3, 4]), // [9]
);