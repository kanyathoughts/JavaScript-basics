// let nums = [42, 51, 24, 98, 65, 12]

// //for each method is called call back function

// //we need to define function isnide for each function
// //if we want to print all the elements and to perform any operation on them
// //we can give even one argument which is n, and i is index and nums is array
// // nums.forEach((n) => {
// //     console.log(n);

// // });

// // nums.forEach((n, i, nums) => {
// //     console.log(n, i, nums);

// // });

// //This concept is exactly similar to streams concept
// //filter actually, to check for any condition, if condition returns true then only return the element
// //map, performs any options
// //for each, to print results
// console.log(nums.filter(n => (n%2)===0));
// nums.filter(n => (n%2)===0).forEach(n => console.log(n*2));
// nums.filter(n => (n%2)===0).map(n => n*5).forEach(n => console.log(n))

// let nums1 = [1,2,3,4,5,6];
// //reduce means if we want single output, here we are adding all the numbers after map
// let result = nums1.filter(n => (n%2)===0).map(n => n*2).reduce((a,b) => a+b);
// console.log(result);

// //set is actually un ordered list and removes duplicate values but in java script it maintains order
let nums2 = new Set("bookkeeper")
console.log(nums2);
nums2.add(3);
nums2.add(4);
console.log(nums2);

// for(let n of nums2) {
//     console.log(n);
// }

nums2.forEach(n => console.log(n))


//check item is present in set
console.log(nums2.has(2)); //false since item is not present







