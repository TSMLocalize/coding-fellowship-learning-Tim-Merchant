let average = (values) => {
    let total = 0;

    for (let i = 0; i < values.length; i++) {        
        total += values[i];        
    }

    return total / values.length;
}

console.log(
    average([2, 3, 4, 5, 6]), // 4
    average([2, 3]), // 2.5
    average([10, 30]), // 20
    average([-4, -8, -9]), // -7
);