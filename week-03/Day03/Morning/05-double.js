let double = (values) => {
    let doubleArray = [];
    
    for (let i = 0; i < values.length; i++) {
        doubleArray.push(values[i] * 2);
    }

    return doubleArray;
}

console.log(
    double([2, 3, 4, 5, 6]), // [4, 6, 8, 10, 12]
    double([1, 2, 5]), // [2, 4, 10]
);