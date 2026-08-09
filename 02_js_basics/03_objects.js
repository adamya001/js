// singleton
// Object.create

// object literals

const mySym = Symbol("mykey1")

const jsUser = {
    name:"Adamya",
    "full name":"Adamya Sundriyal",
    [mySym]:"mykey1",
    age:22,
    location:"Bareilly",
    email:"adamyasundriyal28@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["full name"])
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

jsUser.email = "Adamya@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "Adamya@google.com"
// console.log(jsUser)

jsUser.greeting= function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo =  function(){
    console.log(`Hello Js User, ${this.name} `)
}

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());