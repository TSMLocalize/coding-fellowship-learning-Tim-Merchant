// <!-- Code the Hidden Language: read this -->

// Function writing process

// Think of a NAME
// Arguments/Parameters
// Return - what will be returned
// Boilerplate - template
// Functionality - what the function does? the thinky bit
// Test - pass it several different values to check it works.
// Optional: Refactoring

// THINGS TO THINK ABOUT WHEN REFACTORING
// Can you immediately see what it does?
// Is it tidy?
// Is it easy to change later on?

// SCOPE
// Where you declare a variable has an impact on where you  can access that variable
// var is scoped to the function
// x = 10; JS scopes it globally by default



// Function Composition

let timesBy3 = n => n * 3;

let add6 = n => n + 6;

let timesBy3ThenAdd6 = n => (n * 3) + 6;

console.log(timesBy3ThenAdd6(5));
// We've repeated ourselves here.

// Instead we could do :
let timesBy3ThenAdd6 = n => timesBy3(n) + 6;
// pass the function in.

// Best practice is to write short/simple code and then combine them together.

let timesBy3ThenAdd6 = n => add6(add(1, 2));



// Pure Functions

// A function that given the same inputs will always give
// the same outputs. eg.
add(1, 2);
// No side effects
// Shouldn't change any values that aren't declared within the function.
// The more pure functions you have in your codebase, the easier it is to work with your code.
// Logging to the screen is a side effect.
// A pure function made up of other pure functions then that function itself can also be pure.


// Recursive Functions

// 5! = 5 x 4 x 3 x 2 x 1

let factorial = n => {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
};

// Anything you can write with recursive functions you can write with a for loop
