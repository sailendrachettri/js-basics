let promise = new Promise(function (resolve, reject) {
    alert("I am an alert in promise!");
    resolve(56);
});


console.log("Hello");

setTimeout(function () {
    console.log("Hello after 2 seconds!");
}, 2000);

console.log(promise);