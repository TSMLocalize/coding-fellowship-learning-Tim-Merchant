let factorOf = (a, b) => b % a === 0;

let prime = num => {
    if (num === 1) {
        return false;
    }

    for (let i = 2; i * i <= num; i += 1) {
        if (factorOf(i, num)) {
            return false;
        }
    }

    return true;
};

let nthPrime = n => {
    let counter = 0;
    let i = 1;

    while (counter < n) {

        i += 1;

        if (prime(i)) {
            counter += 1;
        }
    }

    return i;
}

console.log(
    nthPrime(1), // 2
    nthPrime(2), // 3
    nthPrime(10), // 29
    nthPrime(100), // 541
    nthPrime(1000), // 7919
);