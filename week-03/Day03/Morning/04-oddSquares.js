let oddSquares = (values) => {
    let oddSquareArray = [];

    for (let i = 0; i < values.length; i++) {
        if ((values[i] * values[i]) % 2 !== 0) {
            oddSquareArray.push(values[i] * values[i]);
        }
    }

    return oddSquareArray;
}

console.log(
    oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
    oddSquares([2, 3, 4]), // [9]
);