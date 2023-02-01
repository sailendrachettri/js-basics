let firstContainer = document.getElementsByClassName('container')[0];

firstContainer.onclick = () => {
    let secondContainer = document.getElementsByClassName('container')[0];
    secondContainer.innerHTML = "World is curel";
}