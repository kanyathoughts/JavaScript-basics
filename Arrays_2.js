let Name = "My name is kanya kumari Darisi good girl"
let words = Name.split(" ")
console.log(words);
// let[a,b,c,d,e] = words
// console.log(a,b,c,d,e); //here is e is kumari but I want kumari Darisi in e
let [a,b,c,d,...e] = words
console.log(a,b,c,d,e); //e is special array having kumari and darisi as elements
//output: My name is kanya [ 'kumari', 'Darisi' ]