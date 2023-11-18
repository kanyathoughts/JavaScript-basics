//Object literal
let input = 'name'
let alien = {
    name : "kanya",
    technology : "JS",
    "gender letter" : "F"

}
console.log(alien)
console.log(alien.technology, alien.name) //mostly use this way to call properties of object
console.log(alien['name']) //you can also use this case but we can use in specific cases like property contains space in it
console.log(alien["gender letter"]) //This property contains space in it so we need to use this way
console.log(alien[input]) //if user gives what he want to fecth then in that case also we will use this approach