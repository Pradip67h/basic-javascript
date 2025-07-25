// ++++++++++++++++++  IF STATEMENT  +++++++++++++++

//  == :- normal check 
if ( 2 == "2"){
    console.log("executed");       // executed
} else{
    console.log("not executed");
}

// != :- not equal to
if( 2 != 4 ){
    console.log("true");        // true
} else{
    console.log("false");
}


//  === :- type checking
if ( 2 === "2"){
    console.log("executed");      
} else{
    console.log("not executed");       // not executed
}

//  !== :- strict inequality
if ( 2 !== "2"){
    console.log("true statement");         // true statement
} else{
    console.log("false statement");       
}

if ( 2 !== 2){
    console.log("true statement");         
} else{
    console.log("false statement");       // false statement
}

// < :- less than  &   > :- greater than

const temperature = 41
if( temperature > 50){
    console.log("temperature is less than 50");
} else{
    console.log("temperature is greater than 50");   // temperature is greater than 50
}


const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);            // User power: fly
}

const balance = 500
if(balance >= 500) console.log("test");              //  test

const bal = 870
if(bal <= 500){
    console.log("less than 500");
} else if (bal <= 750){
    console.log("less than 750");
} else if (bal <= 960){
    console.log("less than 960");                //  less than 960
}else{
    console.log("less than 1200");
}

// <, >, <=, >=, ==, !=, ===, !==


// && :- AND operator    || :- OR operator
const userloggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userloggedIn && debitCard){
    console.log("Allow to buy course");              //  Allow to buy course
} else{
    console.log("Not Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");                     //  User logged in
}





