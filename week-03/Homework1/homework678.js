let counter = 0;

for (let i = 0; i < 50; i++) {

    counter += i;

    console.log(i % 2 === 0 ? "☃" : "❄");

}

let counter2 = 0
let multiples = 0;

for (let i = 1; multiples < 117; i++) {

    if (i % 3 === 0 || i % 7 === 0) {
        multiples += 1;        
    }    
    counter2 += 1;
}

console.log(counter);
console.log(counter2);
console.log(multiples);