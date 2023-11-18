// // let num = 10_00_00_000
// // console.log(num)
// // console.log(Number.MAX_VALUE * 10)
// // console.log(5/0)

// // let num2 = 1000000000000000000000000000000000000n
// // console.log(num2 + 2n)

// let msg = "Kanya kumari"

// let firstName = "kanya \t lsddss"
// let lastName = "\n \"kumari\""
// console.log(msg)
// console.log("full name: " + firstName + " " + lastName)

// let bool = 6<7
// console.log(typeof bool)

// let user = null
// console.log(user)
// console.log(typeof user)

// let user2
// console.log(user2)
// console.log(typeof user2)

// let number = 6
// console.log(number / "kanya")
// console.log(typeof (number / "kanya"))

let num = String(6) //converting to String
let num2 = Number("890") //converting to Number

let x

console.log(num, typeof num) 
console.log(num2, typeof num2)

console.log(x, typeof x) //undefined, undefined

x = 8
console.log(x, typeof x) //x converted into Number

//This is called coercion means based on context java script will convert data types 
x = x + ""
console.log(x, typeof x) //x converted to String since + operator

x = x + 2 //here x is 8 as string and concating 2 so 82 we get
console.log(x, typeof x) 

x = +x + 2 //even though x is 82 as string but that will convert into Number
console.log(x, typeof x)

x = x - 2
console.log(x, typeof x) //x converted to Number since - operator

x = Boolean(x)
console.log(x, "type of x is boolean : " + typeof x) //x is converted to boolean and it return true

let bool = true
console.log(! bool) //Exclamation mark changes to opposite boolean value


//Except 0 for all Numbers including positive and negative return true and 0, null, undefined return flase
console.log(Boolean(7)) //true
console.log(Boolean(-7)) //true
console.log(Boolean(0)) //false
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean("kanya")) //true


let y = parseInt("123 kanya") //partially convert string to number
console.log(y, typeof y) //return 123, Number


let z = parseFloat("123.9 jashu") //partially convert string to number
console.log(z, typeof z)//return 123.9 Number
