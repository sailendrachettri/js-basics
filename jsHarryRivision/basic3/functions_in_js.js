// seperation of logic is called function


function sum(val1, val2)
{
    console.log("Sum of " + val1 + " and " + val2 + " is " + (val1 + val2));
}

const sum2 = (val1, val2) =>
{
    console.log("Sum: " + (val1+val2) );
    return (val1+val2);
}

let val1 = 10;
let val2 = 20;
let val3 = 30;

sum(val1, val2);
sum2(val2, val3);
sum2(val1, val3);

let result = sum2(100, 200);
console.log(result);