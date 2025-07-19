//  ++++++++++++++++  Number  +++++++++++++++++

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 87.98765
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString());        // by default US value
console.log(hundreds.toLocaleString('en-IN'));  // indian value


console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308

let smallestPositive = Number.MIN_VALUE;
console.log(smallestPositive); // Output: 5e-324

/**  Number.MAX_SAFE_INTEGER constant. 
     This constant has a value of 9007199254740991   **/

// ++++++++++++++++++  Maths  ++++++++++++++++++   

console.log(Math.PI);     // PI :- 3.141592653589793
console.log(Math.abs(-4));  // abs =>input(-ve) = Input(+ve) 
console.log(Math.round(4.62));  // 5
console.log(Math.ceil(4.1));    // 5
console.log(Math.floor(7.9));   // 7

console.log(Math.sqrt(36));     // 6
console.log(Math.pow(2, 4));    // Math.pow(base, exponent)

console.log(Math.min(2, 7, 9, 3, 1));      // 1
console.log(Math.max(9, 3, 4, 8, 13));    // 13

// random

console.log(Math.random());
console.log((Math.random()*10) + 1);   

/**  Generating a One-Time Password (OTP) using JavaScript primarily 
     involves generating a {random} sequence of numbers or characters.  **/

console.log(Math.round(Math.random()*10000) + 1);  // javaScript OTP generat system  



const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);



