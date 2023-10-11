// --------------Array-----------

const marvel_Heros = ["Samar", "Singh", "Kanojiya"];

const dc_heros = ["Superman", 'Batman'];


// console.log(marvel_Heros);
// console.log(dc_heros);


// 1-> Here We are using Push method 

console.log("First operation we are using push method \n");
marvel_Heros.push(dc_heros);
console.log(marvel_Heros);
// console.log("\n");
console.log(marvel_Heros[3][1]);  // here we are accessing a particular element we want from the array 
console.log("--------------------------------\n");


// 2-> Here We are using Concat mathod 
console.log("Second operation we are using concat method \n");

const allHero = marvel_Heros.concat(dc_heros);
console.log(allHero);

console.log("--------------------------------\n");

// 3-> Here we are using spread method 

console.log("Third operation we are using spread method \n");

const all_new_hero = [...marvel_Heros,...dc_heros];
console.log(all_new_hero);
console.log("--------------------------------\n");

// 4-> We are using flat method 

console.log("Fourth operation we are using flat method \n");
const another_array = [1,2,3,[4,5,6],7[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log("\n");
console.log("---------------END-----------------\n");

console.log(Array.isArray("Samar"));
console.log(Array.from("Samar"));
console.log(Array.from({name: "Samar"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));






