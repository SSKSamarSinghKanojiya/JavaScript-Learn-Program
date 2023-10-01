// Dates

/*
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toISOString);
console.log(myDate.toLocaleString());

*/

// let myDateCreation = new Date(2023, 8, 30);
let myDateCreation = new Date(2023, 8, 30, 12,5);

console.log("About date "+myDateCreation.toDateString());
console.log("about toString "+myDateCreation.toLocaleDateString());

// let myDateCreation2 = new Date("2023-09-30")
let myDateCreation2 = new Date("2023-09-30")
console.log(myDateCreation2.toLocaleDateString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myDateCreation2.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1 );
console.log(newDate.getDay() + 1);

// console.log(`${newDate.getDay() + 1}`); // and the time

// console.log(newDate.toLocaleString('default'{ 
//     weekday: "long"
// }));






