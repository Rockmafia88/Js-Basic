const score = 200 
// console.log(score)

const balance = new Number(400)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(4)); //ระวังการใช้ 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-TH')); //default by us  'en-IN' = india value



// **************** Maths ****************

// console.log(Math);
// console.log(Math.abs(-4)); // = 4
// console.log(Math.round(4.3)); // = 4
// console.log(Math.round(4.6)); // = 5
// console.log(Math.ceil(4.3)); // หากมากกว่า 4 ก็จะเท่ากับ 5 ไปโดยปริยาย
// console.log(Math.floor(4.3)); // หากใช้ Floor ต่อให้ 4.1 4.2 อะไรก็แล้วแต่ ก็จะเป็น 4 เลย
// console.log(Math.min(1,2,3,4,5,6,7,8,9)); 
// console.log(Math.max(1,2,3,4,5,6,7,8,9));

console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)






