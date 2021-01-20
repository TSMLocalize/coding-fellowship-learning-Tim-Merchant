let largest = (values) => {
    let counter = values[0];

    for (let i = 1; i < values.length; i++) {
        if (values[i] > counter) {
            counter = values[i];
        }
    }

    return counter;
}

console.log(
    largest([2, 4, 6, 4, 7, 5]), // 7
    largest([-2, 4, 6, 4, 2, -7, 5]), // 6
    largest([-2, -4, -4, -7, -5]), // -2
);