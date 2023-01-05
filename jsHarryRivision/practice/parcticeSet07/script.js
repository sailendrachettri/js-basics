// let firstItem = document.getElementsByTagName("li");
// firstItem[0].style.color = "red";
// document.getElementsByTagName('li')[0].style.color = "purple";

Array.from(document.getElementsByTagName("li") ).forEach(element => {
    element.style.background = "Cyan";
});