let sortNumbers = x => x.sort((a, b) => a < b ? -1 : 1);

console.log(
    sortNumbers([1, 11, 3, 4, 34, 58, 9, 7]), // [1, 3, 4, 7, 9, 11, 34, 58]
);