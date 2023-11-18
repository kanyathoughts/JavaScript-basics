//This represents current object and if you want to access properties of current object use this keyword
let laptop = {
    cpu : 'i9',
    ram : 4,
    brand : 'hp',
    getConfig : function() {
        //console.log(cpu) //here cpu we can not directly access since it is property of object so use object
        //console.log(laptop.cpu) //you can specify object to get property
        console.log(this.cpu) //This refers current object
    }
}

laptop.getConfig()