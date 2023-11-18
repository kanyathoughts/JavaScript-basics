//Number <-> Number comparison
let data = 6 >= 6
let data1 = 7 <= 6
console.log(data)
console.log(data1)

//String <-> String comparison
//Here comparing ASCII values
let x = "pen"
let y = "book"
let bool = x > y //return true because ascii value of p is greater than b
console.log(bool)

let a = "pen"
let b = "pencil"
let c = a > b //retunrs flase since all first 3 letters pen will be equal but after that pencil has additional characters so pencil is greater than pen
console.log(c)

//Number <-> String Comparison
let d = "2"
let e = 1
let f = d > e //return true becuase java script will convert String to number for easy comparison
console.log(f)

//Equals operator
let g = "3"
let h = 3
let i = g == h
console.log(i) //returns true because data is same but type is different 
//But I wanted to compare both data and type as well so I can use === operator

//always use === operator for comparison
let j = g === h
console.log(j) //returns false since type is different

let k = ""
let l = false
console.log(k == l) //returns ture because empty string is flasy value so always use === operator