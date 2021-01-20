let dividesBy3 = x => x % 3 === 0;

let divisibleBy3s = x => x.filter(dividesBy3);

console.log(
    divisibleBy3s([1, 2, 3, 4, 5, 6]), // [3, 6]
    divisibleBy3s([3, 4, 5, 9]), // [3, 9]
);