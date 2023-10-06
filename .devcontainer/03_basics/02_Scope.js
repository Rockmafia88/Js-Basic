



{}//เรียกว่า Scope เจอได้หลายที่ไม่ว่าจะเป็น Function หรือ If-else และอีกหลายๆที่


// var c = 300
// let a = 200
// if(true) {
//     let a = 10
//     const b = 20 
//     var c = 30
//     console.log("Inner :",a);
// }

// console.log(a);
// //console.log(b);
// console.log(c);

// Nested Scope
function one (){
    const username = "Praveen"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

one()  

if (true) {
    const username = "Praveen"
    if ( username === "Praveen"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website); ขึ้น defind เพราะว่ามันอยู่นอก Scope ของ if
}

// console.log(username); ขึ้น defind เพราะว่ามันอยู่นอก Scope ของ Username


// ++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++
addone(5)
function addone(num) {
    return num + 1

}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

addTwo(5)