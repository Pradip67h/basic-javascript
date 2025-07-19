// Primitive

// 7 types: String, Number, Boolearn, null, undefined, Sybol, BigInt


const score = 100;
const scoreValue = 100.4;

const isLoggedIn = false;
const outsideTemp = null;
const userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 987654345678765n

// Refercence (not primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Pradip",
    age: 12,
}

const myFunction = function(){
     console.log("Hello World!");
}

console.log(typeof bigNumber);
console.log(typeof anotherId);

