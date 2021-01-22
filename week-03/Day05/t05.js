// Find the secret message by writing a function that creates a string from every 7th character of the code:

// Hint: the secret message is not gibberish

// let crack = code => {

//     let result = [];
//     let codeArray = code.split(" ");

//     for (let i = 0; i < code.length; i++) {
//         if (i % 7 === 0) {
//             result.push(code[i - 1]);
//         }
//     }

//     return result.join("");
// };

let multipleOf7 = x => x % 7 === 0;

let crack = code => Array.from(code).reduce((x, _, i) => multipleOf7(i) ? x.concat(code[i - 1]) : x.concat(""), []).join('');

// Use an underscore to mark the y

// Better to use a string method rather than treat the string as an array .charAt() for example.

const cracked = crack("_5X4EjG4Cm9#Eo 8Dd@Cov_6kNhdk6W8_J .hZ3yTwr6JZ#qoD.74mErj7 2Wbk_wEUx8.X7.v_. D9@Hq Y3Nu.7aot5Ay.8u.Z339z T!98NrdzD@7C2iJ.jf 8d.Upf6X r7P@BSi#xN7H t!YGp8h!5_SygM");

console.log(cracked);

// jE