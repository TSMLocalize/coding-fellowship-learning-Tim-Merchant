// Objects

// Object literal
// Means when you actually write out the whole object

let person = {

    occupants: 4,
    detached: false,
    address: {
        street: "48 Wombat Drive",
        town: "Kangaroo Point",
    },
    children: ["Ben"],
};

// adds another property to the object
person.legs = 2;

// Can call an object property like this: instead of dot notation
person["age"]
// useful for API data where you have a hyphen (invalid property name) eg. oldest-brother: Harry
// person.oldest-brother would be like person.oldest - brother otherwise
// Can also take variables
let selected = "name";
console.log(person[selected]);

// Functions within Objects
// Functions within Objects are Methods
let basicMaths = {
    pi: 3.141592654,
    // object style method
    add(a, b) {
        return a + b;
    },
    // fat-arrow style method
    minus: (a, b) => a - b,
}

basicMaths.add(1, 2);
basicMaths.minus(1, 2);
basicMaths.pi;

// Console is an object
console.log(console)
// reveals all the methods that are a part of console


let result = tweets.map(tweet => tweet.hearts).filter(odd).reduce(add, 0);
// map filter reduce is a trend in the industry, using these three in order. Map through to transform, then you filter, then you reduce it to get the value you want back out at the end.


// STANDARD LIBRARY
// Better to use string methods than array iteration that does the same thing as them

let string = "Wombat";
// Everything in Javascript is also an object.
// A string is an array (of characters) and also an object LOL
string.charAt(2);
// m
// gives us the character back.
string.substring(2, 4);
// mb
// But in the index of the one after you want to stop on
string.search("om")
// 1
// Gives back first index where it finds it.
string.search("bom");
// -1
// gives this if it finds nothing
string.toUpperCase();
// WOMBAT
string.toLowerCase();
// wombat
"Hello I am a door".split(" ");
// [ 'Hello', 'I', 'am', 'a', 'door' ]
string.split("");
// [ 'W', 'o', 'm', 'b', 'a', 't' ]
Array.from("空いていますか？ OK");
// does the same as string.split("") but works with ALL characters (non unicode)

let now = new Date();
// 2021-01-21T11:45:58.131Z Exact moment in time when this code was run.
let then = new Date("1984-04-16");
let then = new Date("1984-04-16T16:13:32.344");
// If you sort dates like this alphabetically, they'll also be chronological, hence this date format.
now.getFullYear();
// 2021
now.getDate();
// 21 (the day)
now.getDay();
// 4 (Sunday is 0, Saturday is 6)
now.getMonth();
// 0 (Gives you the month as zero indexed) (this is January)
now.getTime();
// 1611229678131 THe number of milliseconds since midnight GMT 1st of January 1970
// All computers use UTC Universal Computer Time 

// Math library
Math.PI
// 3.141592653589793
Math.E
// 2.718281828459045 For logorithms?
Math.floor(39.1293081209);
// 39
Math.ceil(348.1238479834);
// 349
Math.round(3498.12871394);
// 3498
// We tend to use floor and ceil, because they're predictable.
// Round is not always predictable.
Math.sqrt(16);
// 4
Math.pow(2, 3);
// 8 (two to the power of 3) 2 ** 3
Math.log(34)
// 3.526360524616161 Natural logorithm of a number
Math.cos(34.3434)
// Trigonometry
Math.sin(34.3434)
// Trigonometry


// DESTRUCTURING

let { name } = person;
// Give us the name property of person and store it in a variable called 'name'.

let { name, age } = person;
// makes two variables here.

let personAge = ({ age }) => {
    return age;
}
// can do destructuring to pass in arguments

let { name: personName, age: personAge } = person;
// can destructure into new variable names.


// SPREAD OPERATOR

let obj = {
    name: 'tim',
    age: 34,
}

let newObj = obj;
// no good, copies ref address

let realCopy = { ...obj };
// This actually makes a new object.

let realCopyAgain = { ...obj, firstName: "Mark" }
// creates a copy but also changes a property at the same time.
// can also add new properties this same way.

// Merge two objects together.
let mergedObj = { ...obj, ...obj2 };
// Any same named properties will overwrite (eg. if they both have firstName')

[] === []
// checks if the two data structures addresses point to the same thing

let mark = {

    address: {
        postcode: 1234,
    }
}

let lastCopy2 = { ...mark, address: { ...mark.address, postcode: "123456" } };
// How to make a deep copy using destructuring^


// CLASSES

// Prototypical Inheritance
// Most programming languages are Classical OOP languages.
// Class is basically a template for an object.
// Classes start with a capital Letter.
// Basically classes are a way of avoiding having to repeat methods.
// Objects created using classes are INSTANCEs, Object LITERALS are when we write it all out ourselves.

class Person {
    constructor(name, birthdate, age){
        this.name = name;
        this.birthdate = birthdate;
        this.age = age;
    }
    
    getAge() {
        return this.age;
    }
}

let mark = new Person("Name", new Date("1984-04-16"));