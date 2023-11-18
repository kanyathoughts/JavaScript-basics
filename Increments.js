let num = 4
let x = num++ //It is post increment so first num value will be assigned to x then num will be incremented
//first assignement will happen then increment
console.log(x, num)

let num2 = 10
let y = ++num2 //It is pre increment so first increment will happen then assignmet will happen
console.log(y, num2)

let num3 = 5
let result = Math.pow(num3, 3)
let resultNew = 5 ** 3
console.log(resultNew)