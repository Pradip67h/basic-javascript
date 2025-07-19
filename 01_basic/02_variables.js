const accountId = 1445532
let accountEmail = "codeot154@gmail.com"
var accountPassword = "12345678"
accountCity = "Haldia"
let accountState;

// accountId = 9  ->> This is not allowed

accountEmail = "hcp@12gmail.com"
accountPassword = "0987654"
accountCity = "Kolkata"

console.log(accountId);

/*
prefer not to ude var 
because of issue in block scop and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

