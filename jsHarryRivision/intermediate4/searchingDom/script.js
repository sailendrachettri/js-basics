// change card title
// let cardTitle = document.getElementsByClassName('card-title')[0];
// cardTitle.style.color = "cyan";

// let firstTitle = document.getElementById("firstTitle");
// firstTitle.style.color = "purple";

let cardTitles = document.querySelectorAll(".card-title");
let arrayFormCardTitles = Array.from(cardTitles);
// console.log(cardTitles);
// console.log(arrayFormCardTitles);
cardTitles[0].style.color = "purple";
cardTitles[1].style.color = "orange";
cardTitles[2].style.color = "red";

// let searchBox = document.getElementsByName("searchBox");
// searchBox.placeholder = "Anything";

