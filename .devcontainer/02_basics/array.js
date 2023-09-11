// array

const myArr = [0 , 1 , 2 , 3, 4, 5 ] 

const myHeros = ["Rock" ,"Am","K.siam" , "Kajee"]

const myHeros2 = new Array(1,2,3,4,5)

console.log(myArr);

// Array methods

// myArr.push(6) //การเพิ่ม array
// myArr.push(7) //การเพิ่ม array
// myArr.pop(7) //การลบ array ตัวสุดท้าย

// myArr.unshift(9) //เพิ่ม Array ข้างหน้า 
// myArr.shift() //เป็นการลบ Array ตัวแรก

// console.log(myArr.includes(9)); //เป็นการหาตัว Array แต่จะได้ค่ากลับมาเป็น Boolearn 
// console.log(myArr.indexOf(3)); //การหาตำแหน่ง Array ถ้าไม่มีจะมีค่าเป็น -1

const Myheros = myArr.concat(myHeros) //คือการเชื่อม Array 2 ส่วนเข้าด้วยกัน 

// [
//     0,        1,
//     2,        3,
//     4,        5,
//     'Rock',   'Am',
//     'K.siam', 'Kajee'
//   ]

const result = myHeros.filter((word) => word.length > (2)); //Filter ตัวอักษรที่มากกว่า 2 ตัว

// console.log(result);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join

console.log(newArr);

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);


