// With indexOf
let both = (x, y) => x.filter(current => y.indexOf(current) !== -1);

// Without indexOf
let both = (x, y) => x.flatMap(current => y.filter(item => item === current));

// answer

console.log(
    both([2, 3, 4, 5, 6], [1, 2, 5, 6]), // [2, 5, 6]
);