let nums = [10, 12, 40, 44, 90, 100];

let result = nums.filter( (val) =>{
    return val%10 == 0;
})

console.log(result);