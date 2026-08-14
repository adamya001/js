const coding = ['js','ruby','java','cpp','python']

// const values = coding.forEach( (item) => {
    // console.log(item)
    // return item
// } )

// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => { return num > 4 } )

const newNums = []

myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})

// console.log(newNums)

// Map

const mynewArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArr = mynewArr.map( (num)=> {return num + 10})

// console.log(newArr)

const newOne = mynewArr.map((num) => num*10)
.map( (num) => num + 1)
.filter( (num) => num >= 40)

// console.log(newOne);

// Filter

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
//   console.log(userBooks);


// reduce

const myNumbers = [1, 2, 3]

// const myTotal = myNumbers.reduce(function (acc, currval){
//     console.log(`${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNumbers.reduce( (acc,curr) => acc+curr, 0)

// console.log(myTotal) 

const shoppingCart = [
    {
        itemName: "js course",
        price: 499
    },
    {
        itemName: "python course",
        price: 599
    },
    {
        itemName: "java course",
        price: 999
    },
    {
        itemName: "dsa course",
        price: 1999
    },
    {
        itemName: "datascience course",
        price: 5999
    }  
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(priceToPay)

