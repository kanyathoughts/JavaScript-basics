let num = [3,4,5,6]

//I want assign these 4 values to 4 variables but not using index values like let a = num[0] instead you can do like below
// let[a,b,c,d] = num
// console.log(a,b,c,d); //output 3,4,5,6

//if you don't want to assign 3rd value then you can skip it

let[a,b,,d] = num
console.log(a,b,d); //output 3,4,6 we don't want 5


//swapping of 2 numbers
let num1 = 10, num2 = 20, temp
temp = num1
num1 = num2
num2 = temp

console.log(num1, num2);


//swappig of 2 numbers using array destructuring
let e = 5; //adding semi colon is mandatory in array destructuring
let f = 10;
[e,f] = [f,e]
console.log(e,f);