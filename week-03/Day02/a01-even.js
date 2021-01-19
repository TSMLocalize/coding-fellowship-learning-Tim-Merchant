let odd = number => number % 2 !== 0;

let even = num => !odd(num);

console.log(even(1)); // false
console.log(even(2)); // true