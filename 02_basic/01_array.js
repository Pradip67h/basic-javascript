// *************  ARRAY  ****************

const myArr = [0, 1, 2, 3, 4, 5]
const myFriends = ["Suman", "Ayan", "Jalal", "Prabir", "Atanu"]

const myArr1 = (1, 2, 3, 4, 5, 6)

console.log(myArr[0]);
console.log(myFriends[3]);
console.log(myArr1);

// Array Methods

myArr.push(6)
myArr.push(7)               // push => array last element add
console.log(myArr);

myArr.pop()                 // pop => array last element remove/delete
console.log(myArr);

myArr.unshift(9)        // unshit => array fist elemet add
console.log(myArr);

myArr.shift()          // shift => array first element delete/remove
console.log(myArr);

console.log(myArr.includes(9));    
console.log(myArr.indexOf(19));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof(newArr));

// slice, splice

console.log("A ", myArr);      // A  [0, 1, 2, 3, 4, 5, 6]  

const myn1 = myArr.slice(1, 3)
console.log("B ", myArr);       // B  [0, 1, 2, 3, 4, 5, 6]     
console.log(myn1);              // [1, 2]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);         // C  [0, 4, 5, 6]  
console.log(myn2);                // [1, 2, 3]