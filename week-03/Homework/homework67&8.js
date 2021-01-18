let counter = 0;
let counter2 = 0;

for (let i = 1; i <= 50; i++) {

    counter += i;

    if (i % 2 === 0) {
        console.log("☃");
    } else {
        console.log("❄");
    }

}

for (let i = 1; i <= 117; i++) {
    
    if (i % 3 === 0 || i % 7 === 0) {
        counter2 += i;
    }    
}

console.log(counter);
console.log(counter2);