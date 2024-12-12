const stud = {
    gender: "male",
    "full name": "Romesh Sharma",
    email: "romesh@gmail.com",
    age: 18,
    location: "Ghaziabad",
    loginDays: ["Sat","Sun","Tues"],
    isLogin: true
};
// console.log(stud);
// console.log(typeof stud);


stud.name = "Romesh Sharma"
console.log(stud);
console.log(stud.name);
console.log(stud["full name"]);
if (stud.isLogin) {
    console.log(stud.loginDays);
}
// in any thing except false, null is true in javascript
if (stud.mobile) {
    console.log(stud.loginDays);
}
if (stud.email) {
    console.log(stud.email);
}
let t1={}
if(t1){
    console.log(stud.loginDays);
}
if(!stud.isLogin) {
    console.log(stud.loginDays);
}
// console.table(stud);
// console.log(stud.age);
// console.log(stud["full name"]);
// console.log(stud["email"]);
// console.log(stud.isLogin);
stud.greeting=()=>console.log("hello");
stud.greeting()
const sum4=(...num)=>{
    console.log(num);
}
sum4(1,3,7,9,10)
function findsum(...num) {
    console.log(num);
    
}
findsum(10,120);
findsum(10);
findsum(10,1,2,3,4,5,6);
findsum();
(() => {
    console.log("i am life");
})();
((uname)=>{
    console.log('${uname} is logged in');
}) ("john");
