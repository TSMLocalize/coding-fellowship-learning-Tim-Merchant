let max = (num1, num2) => num1 > num2 ? num1 : num2;
// Should be okay as is, since if neither are higher 
// it'll evaluate to false and return num2 
// (which will always be the same as num1 in this case)

console.log(
    max(1, 2), // 2
    max(3, -2), // 3
    max(-3, -5), // -3
    max(3, 3), // 3
);