//In java we have lists so like wise we have arrays in java script
// let values = new Array() //you can do like this

//you can mention any type of data in array like objects and functions
// let values = [5, "kanya", true, {tech : "js"}, function() {console.log("Hello");}]

// values.push(9) //adding elements to arrays
// values.push(10)
// values[5] = "jashu" //adding elements using index value
// console.log(values);
// console.log(values[5]); //calling values using index values and index will start from 0


let data = [5,7,8,9, 10, 20, 30]
// console.log(data.pop()); //remove last element in array and returns it
// console.log(data);

// console.log(data.shift()) //remove first element in array and shift all the elements in array and returns the removed element
// console.log(data);

// console.log(data.unshift(10)) //add element in start of the array and returns new length of the array
// console.log(data);

// // console.log(data.splice(2, 1)) //removes only one element at index 2 since we mentioned 1 as 2nd paramter and if we mention 2 then removes 2 elements from index 2
// console.log(data.splice(2)) //removes all elements from index 2 
// console.log(data);

console.log(data.splice(2, 2, 34, 56, 78)); //first parameter is starting index
//second parameter is how many items to delete
//from 3rd parameter you can any number of elements
console.log(data);
