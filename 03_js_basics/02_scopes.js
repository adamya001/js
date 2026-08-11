// Global Scope
// var c = 300
let a = 300
if(true){ // Local Scope
    let a = 10;
    const b = 20;
    // c = 30; // var not follows scoping and
    //  even var is not write same problem happen
    // console.log("INNER:",a)
}



// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "adamya"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "adamya"
    if(username === "adamya"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website)
}

// console.log(username)

// console.log(addOne(5))
// function addOne(value){
//     return value+1;
// }

console.log(addTwo)
const addTwo = function(){
    return + 2;
}