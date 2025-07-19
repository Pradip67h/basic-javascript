let score = "pradip"

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abv" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// 4 => true
// 345678 => true
// "Pradip" => true
// "" => false
// 0 => false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);                 // 33
console.log(typeof stringNumber);          // string


// Operation
let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(3-9);
console.log(3*2);
console.log(50/5);
console.log(3**3);
console.log(9%7);

let str1 = "hello"
let str2 = " Pradip"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 3 + "4");


console.log((3+4)* 5%3);

console.log(true);       // true
console.log(+true);     // 1
console.log(-true);     // -1
console.log(false);     // false
console.log(+false);   // 0
console.log(-false);   // -0


let num1, num2, num3
num1 = num2 = num3 = 2 + 5
console.log(num1);

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// link to study
//   https://tc39.es/ecma262/#sec-type-conversion
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

