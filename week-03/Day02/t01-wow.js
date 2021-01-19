// let wow = oAmount => {
//     let oCounter = '';

//     for (let i = 0; i < oAmount; i += 1) {
//         oCounter += "o";
//     }

//     return `W${oCounter}w`;
// };

// console.log(wow(12)); // "Woooooooooooow"
// console.log(wow(4)); // "Woooow"


let string = num => {
    let oCounter = '';
    
    for (let i = 0; i < num; i += 1) {
        oCounter += "o";
    }
    
    return oCounter;
};

let message = filler => `W${filler}w`;

let wow = num => message(string(num));

console.log(wow(12)); // "Woooooooooooow"
console.log(wow(4)); // "Woooow"