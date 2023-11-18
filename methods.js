//method is nothing but function + object 
//creating function inside object is called method
let laptop = {
    cpu : 'i9',
    ram : 16,
    brand : "HP",
    greet : function() {
        console.log("Hello World!")
    }
}

laptop.greet()