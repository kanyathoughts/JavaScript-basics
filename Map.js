let map = new Map();
map.set("kanya", "kumari");
map.set("jashu", "buddi");
map.set("buddi", "Gundu");


// for (let [k,v] of map) {
//     console.log(k+ " : " + v);
// }

//in for each first parameter should be value and then index so order will be changing
map.forEach( (v, k) => {
    console.log(k + " : " + v);
})