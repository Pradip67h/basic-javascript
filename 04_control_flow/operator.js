// Nullish Coalescing Operator (??): null undefined

let val1;
let val2;
let val3;

val1 = 5 ?? 10                               
val2 = null ?? 10                              
val3 = undefined ?? 15

console.log(val1);            // 5
console.log(val2);            // 10
console.log(val3);            //  15

let val4;
val4 = null ?? null ?? 20         // only for first number are print
console.log(val4);               // 20

// ++++++++++++++ TERNIARY OPERATOR  +++++++++++++++

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

