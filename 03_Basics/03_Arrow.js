const user = {
    username: 'admin',
    price: 100,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Samar";
// user.welcomeMessage();

// console.log(this);

// function chai ()
// {
//     let username = "Samar";
//     console.log(this.username);
// }
//  chai();


// const chai = function()
// {
//     let username = "Samar";
//     // console.log(this.username);
//     console.log(this);
// }

// chai();


// const chai = () => {
//     let username = "samar";
//     // console.log(this.username);
//     console.log(this);
// }

// chai();

// const addTwo = (num1, num2) => { //expilicit function
//     return num1 + num2;
// }

// console.log(addTwo(10,20));


// Implicit Function here no need to return anything

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username:"Samar"})

console.log(addTwo(10,20));

console.log("Samar Singh Kanojiya");
