//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
// console.log(typeof score)

const scoreValue = 100.3
// console.log(typeof scoreValue)

const isLoggedIn = false
// console.log(typeof isLoggedIn)

const outsideTemp = null
// console.log(typeof outsideTemp)

let userEmail;
// console.log(typeof userEmail)

const id = Symbol('123')
// console.log(typeof id)
const anotherId = Symbol('123')
// console.log(typeof anotherId)

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n
// console.log(typeof bigNumber)


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
// console.log(typeof heros)

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myFunction)

// *******************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "AdamyaSundriyal"

let anotherName = myYoutubeName
anotherName = "AdamWarlock"

// console.log(myYoutubeName)
// console.log(anotherName)

let userOne = {
    userId: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "adamya@google.com"

// console.log(userOne.email)
// console.log(userTwo.email)