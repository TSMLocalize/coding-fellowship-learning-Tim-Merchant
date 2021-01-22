let x  = 12;

let add = (x) => {
    x += 12;
    return x;
};

add(x);

console.log(x); // ??

// 12, because we've not assigned the result of the function to the value x (in the global scope)
// Also, the argument passed (x) is a different x to the global x, and is scoped to the function.