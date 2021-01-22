let sum = (x, y) => x += y;

let average = x => x.reduce(sum, 0) / x.length;

console.log(
    average([2, 3, 4, 5, 6]), // 4
    average([2, 3]), // 2.5
    average([10, 30]), // 20
    average([-4, -8, -9]), // -7
);