let alien = {
    name : "Kanya",
    tech : "JS",
    laptop1 : {
        cpu : 'i7',
        ram : 4,
        brand1 : 'Asus',
        names2 : {
            name : "jashu",
            age : 5,
            gender : "female"
        }
    }
}

// console.log(alien)

//here laptop is not present as property so generally it will give error so if present then give value otherwise undefined
//brand is not present so if present give value otherwsie undefined
// console.log(alien.laptop?.brand?.names?.age)


// delete alien.laptop1.names2.gender //to delete properties of object

// console.log(alien)

//for in loop
// for(let key in alien) {
//     console.log(key, alien[key])
// }

//here we want properties of laptop
for(let key in alien.laptop1) {
    console.log(key, alien.laptop1[key])
}

