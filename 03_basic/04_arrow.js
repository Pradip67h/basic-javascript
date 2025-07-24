const user = {
    username: "Pradip",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this)

function chai(){
    console.log(this);
}
chai();

function coff(){
    let username = "Pradip"
    console.log(this.username)
}
coff();       // undefined

const chai = function(){
    let username = "Pradip"
    console.log(this.username);
}
chai();              // undefined

const water = () => {
    let username = "Pradip"
    console.log(this.username);
}
water();            // undefined

