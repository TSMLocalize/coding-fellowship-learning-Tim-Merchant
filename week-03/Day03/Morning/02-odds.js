let odds = (values) => {
    let oddArray = [];
    
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 !== 0) {
            oddArray.push(values[i])
        }
    }

    return oddArray;
};

console.log(
    odds([1, 2, 3]), // [1, 3]
    odds([1, 2, 3, 4, 5, 6]), // [1, 3, 5]
);