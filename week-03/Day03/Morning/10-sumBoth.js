let sum = (values) => {
    let total = values[0];
    for (let i = 1; i < values.length; i++) {
        total += values[i];
    }
    return total;
}

let sumBoth = (values1, values2) => {
    return sum(values1) + sum(values2);
}

console.log(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
    sumBoth([2, 3, 4, 5, 6], [5, 10, 12]), // 47
);