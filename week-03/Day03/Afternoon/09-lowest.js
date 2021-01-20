let lowerThan = (x, y) => x < y ? x : y;

let lowest = x => x.reduce(lowerThan, x[0]);

console.log(
    lowest([2, 4, 6, 4, 7, 5]), // 2
    lowest([-2, 4, 6, 4, -7, 5]), // -7
    lowest([-2, -4, -11, -4, -7, -5]), // -11
);