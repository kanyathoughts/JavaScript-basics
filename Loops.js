//while loop
console.log("--------------------while loop------------------------------------")
let i = 1
while(i <= 5)  //whenever this condition becomes false then it will come out of that loop
{
    console.log(`i value is: ${i} and say HI`)
    i++
}

console.log(i)

console.log("------------------do while loop------------------------------------")
//do while loop
//Purpose of do while loop is, first execute statement sthen only check for condition
let j = 10
do {
    console.log("hi",  `j value is ${j}`)
    j++
}while(j <= 5)

console.log(`j value is: ${j}`)


console.log("-------------------for loop------------------------------------")
//for loop
for(let k = 1; k <= 5; k++) {
    console.log(`k value is ${k} and Hi`)
}

console.log("-------------------fop loop with out initialization------------------------------------")
//It's not mandatory to initialize things in for loop we can do outside
let l = 1
for(; l <= 3; l++) {
    console.log(`l value is: ${l} and Hi`)
}

console.log("----------------------------------------nested for loop----------------------")
//nested loop
for (let index = 1; index <= 5; index++) {
    console.log(`index value is: ${index} and Hello`)
    //inner loop
    for (let ind = 1; ind <= 5; ind++) {
        console.log(`ind value is: ${ind} and Hi`)
    }
}

//We can use for loop if we know end like where to stop but while loop you don't need to know end and whenever condition fails then it will come out of loop
//Below is one of the example to use while loop
let num1 = 123456
let num2 = ""
while(num1 > 0) {
    num2 = num2 + (num1%10)
    console.log(num2)
    num1 = parseInt(num1 / 10)
    console.log(num1)
}
console.log(`num1 is: ${num1}`)
console.log(`num2 is: ${num2}`)