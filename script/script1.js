document.title = `Play with dom ${new Date().toLocaleTimeString()}`;

const grandParent = document.querySelector(".container");
// const parents = document.querySelector("#list");
// const children = parents.children;
// console.log(grandParent.children);

const children = grandParent.querySelector(".item");

const parent = children.parentElement;

const elementDiv = document.createElement("div");

elementDiv.textContent = "Hello new div";
grandParent.appendChild(elementDiv);
elementDiv.className = "yellow";

document.querySelector(".yellow").style.backgroundColor = "green";
elementDiv.setAttribute("id", "yellow");

console.log(elementDiv);
