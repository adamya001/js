// let myName = "Adamya    "
// let myChannel = "chai      "
// console.log(myName.trueLength)

let myHeros= ['Thor','Spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`)
    }
}

Object.prototype.adamya = function(){
    console.log(`adamya is present in all objects`)
}

Array.prototype.heyAdamya = function(){
    console.log(`adamya says hello`)
}
// heroPower.adamya()
// myHeros.adamya()
// myHeros.heyAdamya()
// heroPower.heyAdamya()


// inheritance

const User = {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makesAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "adamya     "
String.prototype.trueLength = function(){
    console.log(this)
    console.log(`True length: ${this.trim().length}`)
}

anotherUsername.trueLength()
"adamwarlock".trueLength()
"iceTea".trueLength()