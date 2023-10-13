// Outside variable we declare Global Scope

// var b = 500
let a = 300;

if (true) {
  // This is the Block Scope
  let a = 5;
  console.log("INNER : ", a);
  b = 6;
  const c = 7;
}

console.log(a);
// console.log(b);
// console.log(c);
