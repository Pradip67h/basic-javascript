const tinderUser = new Object()  // single tind object
console.log(tinderUser);

const tinderUserTwo = {}  // non-single tind object
console.log(tinderUserTwo);

tinderUser.id = "123asdf"
tinderUser.name = "Atanu"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "prdaip@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pradip",
            lastname: "Hazra"
        }
    }
}
console.log(regularUser.fullname);     // { userfullname: { firstname: 'Pradip', lastname: 'Hazra' } }
console.log(regularUser.fullname.userfullname.lastname);  // Hazra

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3);           //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);           //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1,...obj2}
console.log(obj5);            //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "pradip@google.com"
    },
    {
        id: 2,
        email: "atanu@google.com"
    },
    {
        id: 3,
        email: "suman@google.com"
    },
]
console.log(users[2].email);
console.log(users);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.hasOwnProperty('isLogged'));