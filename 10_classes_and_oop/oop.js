const user = {
    username: 'Adam',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username:${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails()) 
// console.log(this)

// new - step 1: creates empty object called    instance
//       step 2: constructor function is call using new keyword
//       step 3: all arguments packed in function
//       using this keyword all arguments are injected in it.

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting =  function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("adamya",12,true)
const userTwo = new User("goofy",5,false)
console.log(userOne.constructor)
// console.log(userTwo)