// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("ถึง 5 แล้ว จ้า");
    }
        // console.log(element);
    
 
    
}

// console.log(element); //log ไม่ได้เพราะอยู่ใน Scope

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 0; j < 10; j++) {

    // console.log(`Inner loop value: ${j} and inner loop ${j}`);
    //console.log(i + '*' + j + '= ' + i*j);
   }
    
}

let myArray = ["Flash","batman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     // index === 5 ? console.log("เลข5") : console.log("No");
//     if (index == 5 ) {
//         console.log(`Detected 5`);
//         break //จะหยุดแค่ 5 และไม่ทำงานต่อ
//     }
//     console.log(`Value is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    // index === 5 ? console.log("เลข5") : console.log("No");
    if (index == 5 ) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value is ${index}`);
    
}
