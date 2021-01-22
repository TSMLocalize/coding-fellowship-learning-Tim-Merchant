let square = x => x * x;

let hypotenuse = (x, y) => Math.sqrt(square(x) + square(y));    

console.log(
    hypotenuse(3, 4), // 5
);