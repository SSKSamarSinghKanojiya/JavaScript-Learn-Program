    // Array


const myArr = [0,1,2,3,4,5,];
const myHeros = ["Samar", "Singh", "Kanojiya"];

const myArr2 = new Array(1,2,3,4); 

// console.log(myArr[1]);

// Array Mathod

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(0);
// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
/*
The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
*/
// console.log(myArr.includes(1));
// console.log("Indexing check "+myArr.indexOf(9));
// console.log("Indexing check "+myArr.indexOf(0));

// const newArr = myArr.join() 
/*
 The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array
*/
// console.log("This is all new array");
// console.log(myArr);
// console.log(typeof newArr);

// ---------- Slice -----------

console.log("A", myArr);

const  myn1 = myArr.slice(1,3);

/* 
The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
where start and end represent the index of items in that array.
*/

console.log("THis is the slice method ",myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);

console.log("THis is my splice array ",myn2);
console.log("B ", myArr);



