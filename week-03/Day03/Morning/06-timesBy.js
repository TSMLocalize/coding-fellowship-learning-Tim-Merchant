let timesBy = (values, multiplier) => {
    let timesByArray = [];

    for (let i = 0; i < values.length; i++) {
        timesByArray.push(values[i] * multiplier);        
    }

    return timesByArray;
}

console.log(
    timesBy([2, 3, 4, 5, 6], 10), // [20, 30, 40, 50, 60]
    timesBy([2, 3, 4], 5), // [10, 15, 20]
    timesBy([2, 3, 4, 5, 6, 7], -5), // [-10, -15, -20, -25, -30, -35]
    timesBy([-3, -4, -5, -6], -5), // [15, 20, 25, 30]
);