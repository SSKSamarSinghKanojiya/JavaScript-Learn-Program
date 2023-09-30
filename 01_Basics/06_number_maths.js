
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log("This about toString "+balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundred  = 1000000;

console.log((hundred.toLocaleString('en-IN')));



// +++++++++++++++ Maths  ++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // abs is gives +ve number 
console.log(Math.round(4.6)); // it gives sound of value
console.log(Math.floor(4.6)); // 
console.log(Math.ceil(4.6)); // 

console.log(Math.min(1,2,3,45));
console.log(Math.max(1,2,3,45));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
const min  = 10;
const max  = 20;

console.log(Math.floor(Math.random() * (max-min + 1) )  + min);
 












