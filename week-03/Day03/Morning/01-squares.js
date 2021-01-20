let squares = (values) => {
    let squareArray = [];

    for (let i = 0; i < values.length; i++) {
        squareArray.push(values[i] *= values[i]);        
    }
    
    return squareArray;
};

console.log(
    squares([2, 3, 4]), // [4, 9, 16]
    squares([2, 3, 4, 5, 6]), // [4, 9, 16, 25, 36]
);