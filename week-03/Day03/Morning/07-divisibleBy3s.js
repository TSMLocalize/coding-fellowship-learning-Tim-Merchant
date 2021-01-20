let divisibleBy3s = (values) => {
    let divisibleBy3sArray = [];

    for (let i = 0; i < values.length; i++) {
        if (values[i] % 3 === 0) {
            divisibleBy3sArray.push(values[i]);
        }
    }

    return divisibleBy3sArray;
}

console.log(
    divisibleBy3s([1, 2, 3, 4, 5, 6]), // [3, 6]
    divisibleBy3s([3, 4, 5, 9]), // [3, 9]
);