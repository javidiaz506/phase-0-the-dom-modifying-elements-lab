// Write your code
const mainElement = document.getElementById("main");
mainElement.parentNode.removeChild(mainElement);


const newHeader = document.createElement("h1");
newHeader.id = "victory";

const name = "YOUR-NAME";

newHeader.id = "victory";
newHeader.textContent = `${name} is the champion`;
const parentElement = document.getElementById("parent");
parentElement.appendChild(newHeader);