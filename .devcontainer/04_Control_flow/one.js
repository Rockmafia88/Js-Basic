// if 

const isUserloggedIn = true
const temperature = 41

// if (temperature < 50) {
//     console.log("Less then 50");
// }
// console.log("temperature is greater than50"); การเขียนนอก If แบบนี้มัน Executed แน่นอน


// if (temperature === 40 ) {
//     console.log("Less then 50");
// } else {
//     console.log("temperature is greater than50"); // เลยต้องเขียน Else จะได้อยู่ใน Block นั้นๆ
// }


{/* <isUserloggedIn 
>isUserloggedIn
<=isUserloggedIn
>=isUserloggedIn
== เท่ากับ
!= ไม่เท่ากับ */}
// === ใช้เวลาเช็ค Datatype ด้วย อย่างในกรณีของ 2 == "2" โปรแกรมจะแจ้งว่ามันเท่ากัน แต่จริงๆแล้ว
// มันคนละ Datatype กัน ระหว่าง Number กับ String เลยใช้ 2 === "2"
// if (2 === "2") {
//     console.log("yes");
// }

// const score = 200 

// if(score > 100){
//     const power = "fly" 
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);

// const balance = 1000

// if(balance > 500) console.log("Test"),console.log("test2") ไม่ควรเขียนแบบนี้

// if (balance < 500) {
//     console.log("less then 500");
// } else if (balance < 700){
//     console.log("less then 700");
// } else if (balance < 900){
//     console.log("less then 900");
// }else {
//     console.log("less then 1200");
// }

const userLoggedIn = true 
const debitCard = true 
const loggedInFormGoogle = false
const loggedInfornEmail = true
const guesUser = true

if (userLoggedIn && debitCard && 2==2 ){ //&& เช็คทั้ง 2 Conditionที่เป็น True เท่านั้น 
    console.log("Allow to but course");
}

// if (userLoggedIn && debitCard && 2==3 ){ // ถ้าแบบนี้ 2 ==3 ก็จะไม่เข้าเงื่อนไข True จะไม่เข้า
//     console.log("Allow to but course");
// }

if (loggedInFormGoogle || loggedInfornEmail || guesUser) { // || pripe ใช้ในกรณีที่อย่างใดอย่างนึง True หรือ Multi Condition
    console.log("User logged in");
}

if (loggedInFormGoogle && loggedInfornEmail && 2 == 3) { // || pripe ใช้ในกรณีที่อย่างใดอย่างนึง True หรือ Multi Condition
    console.log("User logged in");
}

