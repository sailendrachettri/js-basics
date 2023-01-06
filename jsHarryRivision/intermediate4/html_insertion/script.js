let firstDiv = document.getElementsByTagName("div")[0];

// firstDiv.innerHTML = firstDiv.innerHTML + "<i> ~Sailendra</i>";


for(let i = 1; i <= 5; i++)
{
    let div = document.createElement('div');
    div.innerHTML = `<p> another divison here ${i}</p>`;
    // firstDiv.append(div);
    // firstDiv.prepend(div);
    // firstDiv.after(div);
    // firstDiv.appendChild(div);
    firstDiv.replaceWith(div);
}