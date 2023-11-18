let user = 'kanya' //user is global variable 

function greet(u) {
    let num = 5 //num is local variable and we can not access out side of function
    console.log(user)
    console.log(num) 
    return `hello ${u}`
}

// console.log("num is : " + num)
console.log(greet("kanya"))


function add(num1, num2, num3=1) {
    console.log(num1,num2,num3)
    return num1+num2+num3
}

let result = add(5, 6) //here add method accepts 3 arguments but we are passing only 2 so we will get NaN as output
//but we don't want NaN so we can give default value for num3 so if we don't pass arguments then that default value will be taken
//if we pass num3 then default value will be overridden by the passed argument
console.log(result)

let resultNew = add(5, 6, 10)
console.log(resultNew)