


function sayMyName() {
    console.log("R");
    console.log("O");
    console.log("C");
    console.log("K");
    console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2) {
   
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

addTwoNumbers(3, 5)

const result = addTwoNumbers(3,5) //จะเกิด Undifined เพราะว่าไม่มีการ Return ส่วน Console log จะเป็นแค่การโชว์ต่า


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please Enter Username");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please Enter Username");
        return
    }
    return `${username} just logged in`
}

// console.log((loginUserMessage("Rockmafia")));
console.log((loginUserMessage("Rockmafia")));

