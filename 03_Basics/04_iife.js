// Immediately-Invoked function expression (IIFE)


function example() {
    console.log("Hello World");
} 
example();

(function chai(){
    // named IIFE
    console.log(`DB Connetced`);
})();

(function aurcode(){
    console.log(`DB Connetced One`);
})();

(()=>{
    // Simpled IIFE
    console.log(`DB Connetced Two`);
})();

( (name) => {
    console.log(`DB Connetced Three ${name}`);
})("Samar$")