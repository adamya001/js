const user = {
    username:"Adamya",
    price:499,

    welcomeMssg : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this)
    }
}

// user.welcomeMssg()
// user.username = "SAMMY"
// user.welcomeMssg()

// console.log(this)

function A(){
    username:"adamya"
    console.log(this.username)
}

// A()

// const B = function (){
//     username:"adamya"
//     console.log(this.username)
// }

const B = () => {
    username:"adamya"
    console.log(this)
}
// B()

// const addTwoNum = (num1, num2) => {
//     return num1 + num2 ;
// }

const addTwoNum = (num1, num2) =>  num1 + num2 ;

const addTwoNum = (num1, num2) =>  (num1 + num2) ;

const addTwoNum = (num1, num2) => ({username:"Adamya"}) 

// console.log(addTwoNum())

const myArray = [2,4,7,8]

// myArray.forEach()