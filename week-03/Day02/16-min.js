let min = (num1, num2) => num1 < num2 ? num1 : num2;
// Should be okay as is, since if neither are higher 
// it'll evaluate to false and return num2 
// (which will always be the same as num1 in this case)

console.log(
    min(1, 2), // 1
    min(3, -2), // -2
    min(-3, -5), // -5
    min(3, 3), // 3
);