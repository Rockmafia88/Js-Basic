// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rockmafia"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Praveen",
            lastname : "Misser",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4} //ส่วนมากจะใช้อันนี้

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "@gmail.com"
    },
    {
        id: 2,
        email: "Rockmafia@gmail.com"
    },
    {
        id: 3,
        email: "Rock@gmail.com"
    }
]

// console.log(users[0].email);
// console.log(users[1].email);
// console.log(users[2].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


 const course = {
    coursename : "Rockbook",
    price : "200",
    courseInstruture : "Rockmafia"
 }

//  course.courseInstruture

const {courseInstruture : instructor} = course

// console.log(courseInstruture);
console.log(instructor);


// {
//     "name" : "Rockmafia",
//     "coursename" : "Js in thai",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]

