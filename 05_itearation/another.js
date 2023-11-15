//  for of

const arr =  [1,2,3,4,5];

for (const number of arr) {
    // console.log(number);
}

const greeting = "Hello World";

for (const greet of greeting)
{
    if(greet == " ")
    {
        continue;
    }
    // console.log(`Each char is ${greet}`);
}

const ss = 25;
const map = new Map();

map.set('In', "india");
map.set('USA', "United States of America");
map.set('US', "United States");
map.set('In', "india");

// console.log(map);


for (const key of map)
{
    console.log(key);
}

for (const [key, value] of map)
{
    console.log(key, ':- ', value);
}

