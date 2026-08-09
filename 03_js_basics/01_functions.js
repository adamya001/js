// console.log("A")
// console.log("D")
// console.log("A")
// console.log("M")
// console.log("Y")
// console.log("A")

function sayMyName(){
    console.log("A")
    console.log("D")
    console.log("A")
    console.log("M")
    console.log("Y")
    console.log("A")
}

// sayMyName // this only reference not executing
// sayMyName() 

// function addTwoNum (num1,num2){
//     console.log(num1 + num2);
// }
// addTwoNum() // NaN
// addTwoNum(1,4)

function addTwoNum (num1,num2){
    let result = num1 + num2;
    return result;
    console.log(result)
}

const result = addTwoNum(5,5)
// console.log("Result:",result)

function userLoginMssg(username = "sam"){
    if(!username){
        console.log("Please enter your name");
        return;
    }
    return `${username} is just logged in`;
}
// console.log(userLoginMssg("adam"));

// REST Operator (...)

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(100,200,300,5000))

const user = {
    username:"Adamya",
    price:199
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObjects(user)
// handleObjects({
//     username:"sam",
//     price:499
// })

const myNewArray = [100,200,400,1000]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200,400,800]))