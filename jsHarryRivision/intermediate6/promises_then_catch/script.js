let p = new Promise((resove, reject) => {
    console.log("Promise pending p");
    setTimeout(() => {
        console.log("I am a resove promise!");
        resove(true);
    }, 5000);
})
console.log(p);

let pp = new Promise((resove, reject) => {
    console.log("Promise pending pp");
    setTimeout(() => {
        console.log("I am a rejected promise!");
        reject(new Error("I am error"));
    }, 5000);
})
console.log(pp);



p.then((value) => {
    console.log(value);
})

pp.catch((error) => {
    console.log("Error occured in pp " + error);
})