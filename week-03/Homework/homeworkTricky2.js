// let report = '';
// for (let i = 1; i < 50; i++) {
//     if (i % 2 !== 0) {
//         for (let y = 1; y < i; y++) {
//             if (y % 2 !== 0) {
//                 if (y === 1) {
//                     report += 1;
//                 } else {
//                     report += ` + ${y}`;
//                 }
//             }
//         }
//         console.log(report)
//         report = '';
//     }
// }

let total = 0;

for (let i = 1; i < 50; i++) {
    if (i % 2 !== 0) {
        total += i;
    }    
    console.log (`Line number: ${i}. Total of all odd numbers: ${total}.`);
}