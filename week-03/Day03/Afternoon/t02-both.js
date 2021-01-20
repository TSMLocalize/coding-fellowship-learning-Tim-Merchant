// With indexOf
let both = (x, y) => x.filter(current => y.indexOf(current) !== -1);

// Without indexOf
let both = (x, y) => x.flatMap(current => y.filter(item => item === current));

// answer

let both = (first, second) => first.filter(second.some((secondValue, firstValue) => secondValue === firstValue));

let both = (first, second) => {
    // go over each value in the first array
    return first.filter(firstValue => {
        // go over each value in the second array
        // some will return true if there are any matches
        return second.some(secondValue => {
            // will return true if there's a match
            return secondValue === firstValue;
        });
    });
};

console.log(
    both([2, 3, 4, 5, 6], [1, 2, 5, 6]), // [2, 5, 6]
);