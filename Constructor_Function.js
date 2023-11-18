//If we want to create multiple objects which are having same blue print or same structure
//In this case we can use constructor function 
//We can differenciate normal function with Constructor function by giving Capital letter in start as function name

function Alien(name, tech) {
    this.name = name
    this.tech = tech
    this.work = function() {
        console.log("Solving bugs");
    }
}

let alien1 = new Alien("kanya", "js")
// let alien2 = new Alien("jashu", "js")
// let alien3 = new Alien("laddu", "js")
// console.log(alien1, alien2, alien3);

// //changing values of object properties
// alien2.tech = "java"
// console.log(alien2);
console.log(alien1);
alien1.work()