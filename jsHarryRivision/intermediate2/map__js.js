let nums = [10, 20, 30, 40, 50];


// MAP
// console.log(nums);
// MAP: it creates a new array from exisiting array and it also returns value
// let newArray = nums.map( (val, ind, arr) =>{
//     console.log(val, ind, arr);
//     return val + 2;
// })
// console.log(newArray);


// FILTER
// let newArr = nums.filter( (val) =>{
//     return val <= 40;
// })
// console.log(newArr);

// REDUCE
let newArr = nums.reduce( (val1, val2) =>{
    return val1 + val2;
})
console.log(newArr);