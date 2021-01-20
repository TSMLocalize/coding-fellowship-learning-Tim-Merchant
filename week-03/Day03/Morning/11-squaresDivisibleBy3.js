let square = num => num * num;

let dividesBy3 = num => num % 3 === 0;

let squaresDivisibleBy3 = (values) => {
    let result = [];

    for (let i = 0; i < values.length; i++) {        
        if (dividesBy3(square(values[i]))) {
            result.push(square(values[i]));
        }
    }

    return result;
}

console.log(
    squaresDivisibleBy3([-3, -2, -9, 3, 4, 5, 6, 7, 8, 9]), // [9, 81, 9, 36, 81]
);