let btn = document.getElementById('btn');

let fun1 = function (e) {
    alert("Hello World 1");
}

let fun2 = function (e) {
    alert("Hello World 2");
}

btn.addEventListener('click', fun1);
btn.addEventListener('click', fun2);


let favNum = prompt("What is your favourite number?");
favNum = parseInt(favNum);

if (favNum == 2) {
    btn.removeEventListener('click', fun1);
}