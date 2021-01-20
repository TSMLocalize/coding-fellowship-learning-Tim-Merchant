let multiply = (x, y) => x * y;

let timesBy = (x, y) => x.map(current => multiply(current, y));

console.log(
    timesBy([2, 3, 4, 5, 6], 10), // [20, 30, 40, 50, 60]
    timesBy([2, 3, 4, 5, 6], 5), // [10, 15, 20, 25, 30]
    timesBy([2, 3, 4, 5, 6], -5), // [-10, -15, -20, -25, -30]
    timesBy([-2, -3, -4, -5, -6], -5), // [10, 15, 20, 25, 30]
);