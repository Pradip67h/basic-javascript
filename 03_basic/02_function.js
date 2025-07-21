function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 500, 2000));    // [200, 300, 500, 2000]

function calCartPrice(value1, value2, ...num1){
    return num1
}
console.log(calCartPrice(200, 300, 500, 2000));      // [500, 2000]

const user = {
    username: "Pradip",
    price: 499
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and prive is ${anyObject.price}`);
}
handleObject(user);    // Username is Pradip and prive is 499

handleObject({
    username: "sam",
    price: 399
});                      //   Username is sam and prive is 399


const myNewArray = [200, 400, 100, 1000]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));       // 400

const newArray = [299, 799, 399, 699, 599]
function returnFirstValue(getArray){
    return getArray[0]
}
console.log(returnFirstValue([299, 799, 399, 699, 599]))  // 299