const name = "Rockmafia"
const repoCount = 50 

// console.log(name + repoCount + "Rockmafia");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    //

const gameName = new String('PraveenMisser')
const rockName = new String('Praveen-Misser-Rock')

console.log(gameName[0]);
console.log(gameName.__proto__); //{} ในนี้มีข้อมูลไม่ได้ว่าง


console.log(gameName.toUpperCase()); //แปลงตัวอักษรเป็นตัวใหญ่ PRAVEENMISSER
console.log(gameName.charAt(2)); //เอาตัวอักษรที่ 2 นับเป็น Array [0,1,2,3]
console.log(gameName.indexOf('M')); //หาตัวอักษรว่าตัว M อยู่อันดับที่เท่าไร = 7

const newString = gameName.substring(0,5) //เอาตัวอักษร index 0 แล้วนับไปถึง 5  Prave
console.log(newString);

const anotherStrig = gameName.slice(-8,4)//
console.log(anotherStrig); //เอาตัวอักษรที่ 4 นับเป็น Array [0,1,2,3]

const newStringOne = "                    Praveen         "
console.log(newStringOne.trim()); //ลบช่องว่างออก


const url = "https://rockmafia.com/rock%20misser"
console.log(url.replace('%20','-')); //เปลี่ยนตัวอักษร จาก %20 เป็น - ส่วนมากเวลาเจอช่องว่างใน Url จะเป็น %ทันที่

console.log(url.includes('Rockmafia')); // ค้นหาตัวอักษรว่ามีไหม จะ Return ออกมาเป็น Boolearn


console.log(rockName.split("-"));


