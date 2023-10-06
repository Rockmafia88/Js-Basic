

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



function calculateCartpriceone (num1) {
    return num1
}

console.log(calculateCartpriceone(200));




function calculateCartPrice(val1,val2, ...num1) {  //Rest Operator คือ ... ปัญหาคือ มีการเรียกทั้ง Rest Operator และ Spread syntax จะใช้ต่างกัน

    return num1
    
}

console.log(calculateCartPrice(200 ,400 ,500,1000,600)); //var1 จะเท่ากับ 200 var2 = 400 ที่เหลือจะมัดรวมกันแล้วไปที่ Num1 

const user = {
    username : "Rockmafia",
    price : 199
}

function handleObject(anyobject) { 
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username : "Sam",
    price : 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue (getArray) {
    return getArray[1]
    
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));