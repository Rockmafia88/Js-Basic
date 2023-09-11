// singleton คือ เป็น Object ชนิดนึง


// object literals

const mySym1 = Symbol("key1")

const JsUser = {
    name : "Rockmafia",
    "full Name" : "Praveen Misser",
    [mySym1] : "mykey1",
    age : 18,
    location : "Bangkok",
    email : "Rockmafia@google.co.th",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
} 

console.log((JsUser.email));
console.log((JsUser["em ail"]));
console.log(JsUser["full Name"]);
console.log(JsUser[mySym1]);

JsUser.email = "Rockmafiarock@rock.co.th"
// Object.freeze(JsUser)
JsUser.email = "Rockmafiarock@microsoft.co.th" //เป็นการแช่เอาไว้ ไม่ให้เปลี่ยนค่า
console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hellow Rockmafia")
}

JsUser.greetingTwo = function(){
    console.log(`Hellow Js user, ${this.name}`)
}

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());

