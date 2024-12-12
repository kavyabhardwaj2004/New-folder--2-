function sayhi() {
    console.log("Kavya");
}
sayhi()
function sum(a,b) {
    console.log(a+b);
}
sum(1,2)
function sum(a,b) {
    return a+b;
}
console.log(sum(2,2));
x = sum(2,7);
console.log(x);
console.log(sum(2)); // ismai answer will be a = 2 and b =0
function sum2(a=10,b=50) {
    return a+b;
    
}
