let num = []

num[0] = 5
num[99] = 10

console.log(num); //output : [ 5, <98 empty items>, 10 ] 
//so remaining 98 empty items present

for(let n of num) {
    console.log(n); //for of loop specially for arrays
}


//we can use for in loop also but problem here is it will try to fetch keys but here in array
//keys are nothing but index so it will fetch index so from index we need to again fetch array values
for(let n in num) {
    console.log(n); //output 0 and 99
    console.log(num[n]); //output 5 and 10
}