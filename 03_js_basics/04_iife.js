// Immediate Invoked Function Expression (IIFE)

(function DB(){
    console.log("DB CONNECTED SUCCESFULLY")
})();

( () => {
    console.log("DB CONNECTION DONE")
} )();

// named iife
( function B(){
    console.log("DB CONNECTION DONE 12")
} )();

( (name) => {
    console.log(`DB CONNECTION DONE 2 ${name}`)
} )("Adamya");

// we use iife to remove global scope pollution like
// variable declared in the global give problem in func exe.

//(function definition)(function execution)
// DB()