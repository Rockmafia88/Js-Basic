const accountId = 144553
let accountEmail = "Rockdusit@gmaikl.com"
var accountPassword = "12345"
accountCity = "Bangkok"
let accountState;

// accountId = 2 not allowed


accountEmail = "hc@rockmafia.com"
accountPassword = "555555"
accountCity = "Chonburi"

console.log(accountId);


/* 
ืPrefer not to use var
because of issue in block scope and functionnal scope
อย่าไปใช้ Var เพราะว่าอาจจะทำให้ไปซ้ำกับชื่อตัวแปรอื่นๆ และ ทำให้ค่าเปลี่ยนไป
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])