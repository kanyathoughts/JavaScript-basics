function greet() {
    console.log("Hello World!")
}

greet() //calling function

//using parameters
function sayHello(name) {
    console.log(`say hello: ${name}`)
}

sayHello("kanya")


//return statement along with parameters
function returnMe(name) {
    return `hello ${name}` //only one return statement we should write in function
}
let str = returnMe('kanya')
console.log(str)


//function expression
let a = 5 + 6 //here 5+6 is an expression and that will be evaluated and assigned to a
//function is a object in java script

//Here this function is called as ananymous function and this will be evaluated and assigned to add variable
let add = function(num1, num2) 
            {
                return num1 + num2;
            }

let sum = add
//you can get doubt like this function doesn't has name so how do we call it, here it will be evaluated and assigned to add variable so we can use add as name of function
let result = add(5,10);
let result2 = sum(11,22)
console.log(result, result2)
