const pDiv = document.createElement("div");

const newP = document.createElement("p");
newP.innerText = "Hey I'm red!";
newP.style.color = "red";
pDiv.appendChild(newP);

const newH = document.createElement("h3");
newH.innerText = "I'm a blue h3!";
newH.style.color = "blue";
pDiv.appendChild(newH);

const innerDiv = document.createElement("div");
innerDiv.setAttribute('style', 'border: 1px black solid;');
innerDiv.style.backgroundColor = "pink";

const innerH = document.createElement("h1");
innerH.innerText = "I'm in a div";
innerDiv.appendChild(innerH);

const innerP = document.createElement("p");
innerP.innerText = "ME TOO!";
innerDiv.appendChild(innerP);

pDiv.appendChild(innerDiv);

document.body.appendChild(pDiv);

