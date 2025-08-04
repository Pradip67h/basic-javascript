const myNums = [1, 2, 3, 4, 5]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0)

console.log(myTotal);


const yourNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const yourTotal = yourNums.reduce( (acc, currval) => acc+currval, 0)

console.log(yourTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 5999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "C++ with DSA course",
        price: 9999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
