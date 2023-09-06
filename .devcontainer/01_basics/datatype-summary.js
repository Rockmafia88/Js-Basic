// Primitive ****

// 7 Types : String, Number, Boolearn, null, undifined, Symbol, BigInt


const score = 100 //output number
const scoreValue = 100.3 //output number

const isLoggedIn = false // output boolean
const outsideTemp = null // output object
let userEmail;

const id = Symbol('123') // output Symbol
const anotherId = Symbol('123') // output Symbol

console.log(id === anotherId); 


const bigNumber = 1231239231312319233n //output bigint



// Reference (Non primitive) ****

// Array, Objects, Functions


const heros = ["Shakti","naagraj","doga"] //output array

let myObj =  // output Object
{
    name : "Rockmafia", 
    age: 22,

}

const myFunction = function() {
    console.log("hello world"); //output function
}

console.log(typeof bigNumber);




// **********************************  stack and heap memory  ******************************

// Stack(Primitive) , Heap(Non-Primitive) 

let myYoutubename = "Rockmafiarock.com"
let anotherName = myYoutubename
anotherName = "Misseryoutuber"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email : "User@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "Rockmafia@google.com"

console.log(userOne.email);
console.log(userTwo.email);

