// Write a function, longest, that takes an array of strings and returns the longest string:

let longest = words => words.reduce((x, y) => x.length < y.length ? y : x, "");

let result = longest(["cow", "wombat", "aardvark"]);
console.log("Expected: aardvark, Actual: " + result);

result = longest(["fish", "fishiest", "fishier"]);
console.log("Expected: fishiest, Actual: " + result);