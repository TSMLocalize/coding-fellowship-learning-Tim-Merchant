let lowest = (values) => {
    counter = values[0];
    
    for (let i = 1; i < values.length; i++) {
        if (values[i] < counter) {
            counter = values[i];
        }        
    }

    return counter;
}

console.log(
    lowest([2, 4, 6, 4, 7, 5]), // 2
    lowest([-2, 4, 6, -7, 5]), // -7
    lowest([-2, -4, -11, -8, -4, -7, -5]), // -11
);