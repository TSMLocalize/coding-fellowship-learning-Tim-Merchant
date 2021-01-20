// Arrays

// Destructive stuff changes the array, best not to use!


// .concat is not destructive, it keeps the old array and gives you back a new one.

// values.indexOf("kangaroo")  Gives you the index number of the entry.
// Gives -1 back if it doesn't find anything.

// array.includes("kangaroo") returns a bool

// array.slice(2, 4) (to get index 2 & 3) start index, then finish before index

// array.splice(2, 1) starting index, then number of items you want to get. - Destructive, so don't use.

// spread operator
// let realCopy = [...values]; 
// values is the name of the array we want to copy.
// you need to copy stuff like this because you don't want to just edit the data structure address stored in the memory heap.

// let spreadMerged = [...values, ...moreValues];
// used for merging values.
// let spreadMerged = [values, moreValues];
// ^ Careful of this, as this just creates a 2D array.
// [ "cat", ...values, "dog"] Will sandwich the values array between cat and dog as a new array;

// values.sort() destructive, changes the original array.
// [...values].sort(); will do a new sorted array, so that we don't screw that up.



// Array iteration

let result = numbers.find((item) => {
    return item > 20;
});
// Find the first item more than 20 in the array.
// This is a predicate function, one that returns true or false.
// It returns that value if true.

let result = numbers.filter((item) => {
    return item > 20;
});
// Would return an array of all items over 20.
// Finds all that match the predicate function and adds to an array.

let result = numbers.some((item) => {
    return item > 20;
});
// If some of the values in the array return true from the          
// predicate function, returns true, else false.
// Stops immediately upon finding something true.

let result = numbers.every((item) => {
    return item > 20;
});
// If every value passes the predicate function it will return true.
// Checks if && on every element of the array is true, and returns /// true if so.
// Useful for checking that every entry on a form has been filled in.

let result = numbers.map((item) => {
    return 20 + 1;
});
// Transforms each element of the array then adds to a new array.

let result = numbers.reduce((acc, item) => {
    return acc + item;
}, 0);
// Takes a function with an accumulator argument, and an initial value