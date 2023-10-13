function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("M");
  console.log("A");
  console.log("R");
}

function addTwoNumbers(num1, num2) {
  //<---- this num1 and num2 are parameter
  let result = num1 + num2;
  return result;
}

const result = addTwoNumbers(2, 3); // when we call this function, we pass num1 and num2 as arguments

// console.log("Result: " , result);

function loginUserMessage(username = "Sam") {
  if (!username) {
    console.log("Please enter your username");
    return;
  }

  return `${username} just logged in!`;
}
// console.log(loginUserMessage("Samar"));

function calculateCartPrice(...num1)  //...num1 is working as a rest operator
{
    return num1;
}

function calculateCartPrice_1(val1, val2,...num1)  //...num1 is working as a rest operator
{
    return num1;
}
// console.log(calculateCartPrice(100, 200, 300, 400));

// console.log(calculateCartPrice_1(100, 200, 300, 400));



const user = {
    userName: "Samar",
    Price: 100
}


function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.Price}`);
}

// handleObject(user);
// -------------OR-------------

handleObject({
    userName: "Sam",
    Price : 100
})


const myNewArray = [1, 2, 3, 4, 5, 6];

function returnSecondArray(getArray){
    return getArray[1];
}

// console.log("This is my second value from the array ",returnSecondArray(myNewArray));
// console.log(returnSecondArray(myNewArray));
console.log(returnSecondArray([100,200,300,400]));