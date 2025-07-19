console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);          // true
console.log("02" < 1);         // false

console.log(null > 0);          // false
console.log(null == 0);         // false
console.log(null >= 0);         // true

console.log(undefined == 0);      // false
console.log(undefined > 0);       // false
console.log(undefined < 0);       // false     
/* kabhi bhi undefinrd or null ke 
    shat ase comparision nehai korna chaiye, 
    mei serp demo ke liya iha likha hu  **/

// ==
console.log("2" == 2);     // true
// ===
console.log("2" === 2);     // false