const accountId = 4347
let accountEmail = "panda.js@gmail.com"
var accountPassword = "1234"
accountCity = "Cumilla"
let accountState;

// accountId = 2 // TypeError: Assignment to constant variable.
accountEmail = "starLord.js@universe.com"
accountPassword = "abcd"
accountCity = "Chittagong"

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.log(accountId);
console.table(
    [
        accountId,
        accountEmail,
        accountPassword,
        accountCity,
        accountState
    ]
)