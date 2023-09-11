// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //เป็น Object

let myCreateDate = new Date(2023, 0, 23)
let myCreateDateOne = new Date(2023, 1, 23)
let myCreateDateTwo = new Date("2023-01-14") //yyyy/mm/day
// console.log(myCreateDate.toDateString());
console.log(myCreateDateTwo);

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDateTwo.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDate());


`${newDate.getDay()} and the time is ${newDate.getTime()}`  

newDate.toLocaleString('default',{
    weekday: "long",

})

console.log(newDate);