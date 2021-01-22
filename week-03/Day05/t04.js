add = (x, y) => x += y;

let sumToN = n => {
    let counter = 0;
    for (let i = 0; i <= n; i++) {
        counter += i;
    }
    return counter;
};

let result = sumToN(4);
console.log("Expected: 10, Actual: " + result);

result = sumToN(100);
console.log("Expected: 5050, Actual: " + result);

result = sumToN(123456789);
console.log("Expected: 7620789436823655, Actual: " + result);