const userEmail = ""

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Dont' Have User Email");
}

// flasy values

// flase, 0, -0, BigInt 0n, "", null, undefined, NaN 

//turthy values
// "0", 'false', " ",[],{}, fucntion(){} < Emty Fucntion

if (userEmail.length === 0 ){
    console.log("Array is emty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ) {
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??) : Null undefined

let val1;
// val1 = 5 ?? 10 //?? คือ หลายครั้งเวลาที่ติดต่อ Database เราจะไม่รับ Response ทันที่ อาจจะมาแค่ Null หรือ Undifined
// val1 = null ?? 10 //ค่า = 10 Safetycheck
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 10 //จะคืนค่า 10 อันแรก


console.log(val1);

// Terniry Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("ใช่") : console.log("ไม่ใช่");


