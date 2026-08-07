const accountId = 13456
let accountEmail = "adamya@google.com"
var accountPassword = "12345"
accountCity = "bareilly"
let accountState;
/*
Note:- In variable if value is not assigned so in output shows undefined.
*/

// accountId = 2 // not allowed

accountEmail = "ad@ad.com"
accountPassword = "12121212"
accountCity = "New Delhi"

// console.log(accountId)

/*
Note:- Prefer not to use var beacause of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])