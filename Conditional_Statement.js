let num1 = 11
let num2 = 9
let num3 = 7

if (num1 > num2 && num1 > num3) {
    console.log("num1 is grater")
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is grater")
} else {
    console.log("num3 is grater")
}

console.log("Bye...")


let x = 10
if (x % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}

//using ternary operator
let result = x % 2 === 0 ? "even" : "odd"
console.log("result is : " + result)
