// for(let i = 1; i <= 10000; i++) 
// {
//     console.log(`${i} : Satyanarayana`);
// }

let daddy = {
    name : "Satyanarayana",
    age : 64,
    gender : "Male",
    occupation: "teacher"
}

//here n is property and daddy[n] is value
// for(let n in daddy) {
//     console.log(n, daddy[n]);
// }

// console.log(7+8);

//we can convert constructor function to class declaration
// class Person {
//     constructor(name, age, gender, occupation) {
//         this.name = name
//         this.age = age
//         this.gender = gender
//         this.occupation = occupation
//     }
// }

function Person(name, age, gender, occupation) {
        this.name = name
        this.age = age
        this.gender = gender
        this.occupation = occupation
}

let person1 = new Person("Satyanarayana", 64, "Male", "Teacher")
console.log(person1);

