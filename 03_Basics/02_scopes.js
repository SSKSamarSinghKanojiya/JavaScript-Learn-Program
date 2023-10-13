// Outside variable we declare Global Scope

// var b = 500
let a = 300;

if (true) {
  // This is the Block Scope
  let a = 5;
  // console.log("INNER : ", a);
  b = 6;
  const c = 7;
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Samar"

    function two(){
        // const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two()
}

// one()



if (true) {
  const username = "Samar Singh"
  if (username === "Samar Singh") {
    const website = " Youtube"
    // console.log(username + website);

  }
  // console.log(website);
}

// console.log(username);

// ----------------------------- Interesting --------------------
// -------------Mini Hoisting Concept -----------------

console.log(addone(5));

function addone(num){
  return num + 1;
}


addTwo(5);

const addTwo = function(num){
  return num + 2;
}
