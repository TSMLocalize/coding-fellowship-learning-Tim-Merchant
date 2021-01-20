let sum = (x, y) => x += y;

let sumBoth = (x, y) => x.concat(y).reduce(sum);

console.log(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
    sumBoth([2, 3, 4, 5, 6], [5, 10, 12]), // 47
);