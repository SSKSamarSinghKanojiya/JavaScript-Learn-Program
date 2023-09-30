// // Primitives Data types
// //7 : String, Number, Boolean, Undefined, Null, Symbol, BigInt

// const score = 100
// const scorevalue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);


// // Reference (Non Primitive)
// // Array , Object , Function

//**************** New  **********************
// Primitives Data types
//7 : String, Number, Boolean, Undefined, Null, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// Reference (Non Primitive)
// Array , Object , Function

const heros = ["samar", 'singh', 'bro'];

let myObj = {name: "vishal", age: 22}
const myFunction = function()
{
    console.log("Hello World");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++


// Stack(Primitive ), Heap (Non - Primitive)

let myYotubename = "SamarSingh";

let anotherName = myYotubename;

anotherName = "newName";

console.log(myYotubename);
console.log(anotherName);

let userOne = {

    email: "user@google.com", 
    upi: "user@ybl"

}
let userTwo = userOne
userTwo.email = "samar@google.com"

console.log(userOne.email);
console.log(userTwo.email);



