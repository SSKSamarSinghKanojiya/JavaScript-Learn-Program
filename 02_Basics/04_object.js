// const tinderUser = new Object();
// ---------OR----------
const tinderUser = {}

tinderUser.ID = "123ABC";
tinderUser.name = "Samar";
tinderUser.LoggedIn = true;

// console.log(tinderUser);

const regularUser = {
    email: "samar@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Samar",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname); //console.log(regularUser.fullname.userFullname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1,...obj2,...obj4}; // spread operator operation
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "S@gmail.com"
    },


]
 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log((Object.values(tinderUser)));
// console.log((Object.entries(tinderUser)));
// console.log(tinderUser.hasOwnProperty("LoggedIn"));
// console.log(tinderUser.hasOwnProperty("isloggedIn"));


//---------------------------Object Again Understanding---------------------

const course =
{
    course_name: "Js in Hindi",
    price: "999",
    courseInstructor: "Samar"
}

// console.log(course.courseInstructor);
const {courseInstructor: Instructor } = course;

console.log(Instructor);

/*
{
    "name": "Samar",
    "courname": "JS in Hindi",
    "price": "free",
                                Json is the javascript notation object that will be used to store the data. 
}
*/
