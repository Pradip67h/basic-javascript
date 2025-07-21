// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Pradip",
    "full name": "Pradip Hazra",
    [mySym]: "mykey1",
    age: 20,
    location: "Haldia",
    email: "pradip@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "pradip@outlook.com"
console.log(JsUser["email"]);

Object.freeze(JsUser)
console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




