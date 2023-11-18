//This is called arrow function, we don't need to specify function keyword
let greet = (user) => {
    console.log("hello " + user)
}

greet("kanya")

//In arrow function we don't need to mention curly braces if we have only one statement in side it and 
//no need to specify return keyword if we have only one statement

let add = (num1, num2) => num1 + num2
console.log(add(10,12))


//practice example
let addPostive = (num1, num2) => {
    if(num1 < 0 || num2 <0) {
        console.log("no negative values")
    } else {
        console.log(num1+num2)
    }
}
addPostive(10, -4)