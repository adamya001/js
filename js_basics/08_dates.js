// Dates

const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// const myCreatedDate = new Date(2026,0,30)
const myCreatedDate = new Date(2026,0,30,5,7,0)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())
const date = new Date("2026-08-08")
// console.log(date.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(date.getTime())

// console.log(Date.now())
// console.log(Math.floor((Date.now()/1000)))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

// `${newDate.getDay()} and the time.

newDate.toLocaleString('default',{
    weekday: "long",
})