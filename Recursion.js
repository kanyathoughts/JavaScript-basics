//Recursion means function calling it self
// let num = 1;
// function show() {
//     console.log("hi", num);
//     num++;
//     if(num <= 10000)
//      show();
// }

// show()

//Factorial example of recursion
//5! = 5*4*3*2*1 = 120
//5! = 5*4! = 120
//so here we are using recursion

//
function factorial(n) {
    if(n === 0) 
        return 1;
    else 
        return n * factorial(n-1);
}

let result = factorial(171);
console.log(result);