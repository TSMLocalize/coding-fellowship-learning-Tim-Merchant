let largerThan = (x, y) => x > y ? x : y;

let largest = x => x.reduce(largerThan, x[0]);

console.log(
    largest([2, 4, 6, 4, 7, 5]), // 7
    largest([-2, 4, 6, 4, -7, 5]), // 6
    largest([-2, -4, -6, -4, -7, -5]), // -2
);