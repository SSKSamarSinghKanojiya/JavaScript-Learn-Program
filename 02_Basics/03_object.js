

// singlton

// Object Literal

const mySym = Symbol("Key1");


const JsUser = {
    name: "Samar",
    "Full Name": "Samar Singh Kanojiya",
    mySym: "mykey1",
    age: 25,
    city: "Bangalore",
    email: "samar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// // console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = "raj@gmail.com";
// console.log(JsUser); 
// console.log("Before Changing Some ");
// Object.freeze(JsUser);
JsUser.email = "raj2@gmail.com";
// console.log(JsUser); 

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function()
{
    console.log(`Hello Js User, ${this.name} `);
    console.log(`Hello Js User, ${this["Full Name"]} `);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
