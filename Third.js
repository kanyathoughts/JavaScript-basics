let num1 = 4
let num2 = 2

let result1 = num1 + num2
let result2 = num1 - num2
let result3 = num1 * num2
let result4 = num1 / num2
let result5 = num1 % num2 //reminder
let result6 = num1 / 0
let result7 = num1 / "kanya"
let result8 = num1 / true //return num1 only
console.log(result1, result2, result3, result4, result5, result6, result7, result8)

// type coercion will happen here
//Java script will understand that you want addition of numbers but here both are boolean so let me convert boolean to numbers as your wish

num1 = true
num2 = true
console.log(num1 + num2) //return 2 because true means 1 so 1+1=2

num1 = false
num2 = false
console.log(num1 + num2) //return 0 because false means 0 so 0+0=0

num1 = true
num2 = false
console.log(num1 + num2) //return 1 because 1+0=1

num1 = false
num2 = true
console.log(num1 - num2) //return -1 because 0-1=-1



let Num = 4

//Num = Num + 6

++Num // pre increment
Num++ // post increment
--Num // pre decrement
Num-- // post decrement

Num += 6 //short cut of addition

Num -= 3 //short cut of subtraction

console.log(Num)


