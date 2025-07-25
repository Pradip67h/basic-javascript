const userEmail = "pradip@google.com"

if(userEmail){
    console.log("Got user email");               // Got user Email
} else {
    console.log("Don't have user email");
}

const userNumber = []

if(userNumber){
    console.log("Got user Number");              // Got user Number
} else {
    console.log("Don't have user Number");
}

const userData = ""

if(userData){
    console.log("Got user Data");              
} else {
    console.log("Don't have user Data");           // Don't have user Data
}

// Truthy values :-  "0", 'false', " ", [], {}, function(){},

// falsy values  :-  false, 0, -0, BigInt 0n, "", null, undefined, NaN


if (userNumber.length === 0){
    console.log("Array is empty");      // Array is empty
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");           // Object is empty
}
