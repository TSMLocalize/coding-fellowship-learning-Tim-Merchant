let reverseString = x => (Array.from(x).reverse()).join("");

let palindrome = x => reverseString(x) === x;

console.log(palindrome("fish")); // false
console.log(palindrome("madam")); // true
console.log(palindrome("bolton")); // false
console.log(palindrome("minim")); // true