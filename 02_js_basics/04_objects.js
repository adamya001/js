// const tinderUser = new Object() // singleton obj
const tinderUser = {} // Non singleton obj

tinderUser.userId = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regUser = {
    fullName:{
        fullUserName:{
            firstName:"Adamya",
            lastName:"Sundriyal"
        }
    }
}
// console.log(regUser.fullName.fullUserName.firstName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj5 = {5:"a",6:"b"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj5)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user=[
    {
        id:1,
        email:"ad@google.com"
    }
     ,{
        id:2,
        email:"ad@google.com"
    },
     {
        id:3,
        email:"ad@google.com"
    }
]

user[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    courseName:"JavaScript",
    price:499,
    courseInstructor:"Adamya"
}

course.courseInstructor

// object de-structured
const {courseInstructor: instructor} = course
console.log(instructor);

// JSON API

// {
//     "name":"adamya",
//     "coursename":"javascript",
//     "price":"free"
// }

// {
//     {},
//     {},
//     {}
// }



















