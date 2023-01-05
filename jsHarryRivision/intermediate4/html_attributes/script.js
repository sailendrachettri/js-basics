let firstDiv = document.getElementById("firstDiv");
let a = firstDiv.getAttribute('class');
let firstP = document.getElementById("firstP");

// console.log(a);
// console.log(firstDiv.attributes);
// console.log(firstDiv.hasAttribute("class") );
// console.log(firstDiv.hasAttribute("style") );

// firstDiv.setAttribute("hidden", "true newCls");
// firstDiv.removeAttribute("class");

console.log(firstP.dataset);
console.log(firstP.dataset.game);
console.log(firstP.dataset.player);