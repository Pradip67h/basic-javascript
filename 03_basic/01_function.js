// +++++++++++++++  FUNCTION +++++++++++++
function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("P");
}

sayMyName();

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3, 7);

function sumTwoNumbers(number1, number2, number3){
    console.log(number1 + number2 + number3);
}
sumTwoNumbers(3, 6, "9");


function adddTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}
const result = adddTwoNumbers(6, 9)
console.log("Result: ", result);


function loginUserMessage(username){
    if(username === undefined){              // (username === undefined) => (!username)
        console.log("please enter your user name");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Pradip"));