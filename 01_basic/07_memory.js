// ++++++++++++++++++++++++++++++++++++

// Memory two types => (i)Stack {Primitive}  (ii) Heap {Non-Primitive} 

let myName = "Pradip Hazra";

let anotherName = myName;
anotherName = "dr_pradip_31";

console.log(myName);             // Prdaip Hazra
console.log(anotherName);        // de_pradip_31

let userOne = {
    email: "user@google.com",
    upi: "user@uri123"
}

let userTwo = userOne

userTwo.email = "pradip@google.com"

console.log(userOne.email);         // pradip@google.com
console.log(userTwo.email);         // pradip@google.com