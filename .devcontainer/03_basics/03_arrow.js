const user = {
    username: "Rockmafia",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Mafia"
// // user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "ROckmafia"
//     console.log(this.username);
// }
// chai()


// const chai = function () {
//     let username = "ROckmafia"
//     console.log(this.username);
// }

const chai = () => {
    let username = "ROckmafia"
    console.log(this);
}


// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }


// const addTwo = (num1,num2) =>  num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({username: "Rockmafia"})

console.log(addTwo(3,5));


// const myArray = [2,5,3,7,8]

// myArray.forEach(function () {

// })

// myArray.forEach(()=>{


// } 
// )

