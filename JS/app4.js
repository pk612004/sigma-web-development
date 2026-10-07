// let p = document.createElement("p");

// p.innerText = "Hey I'm red!";
// p.style.color = "red";

// container.append(p);


// let h3 = document.createElement("h3");

// h3.innerText = "I'm a blue h3!";
// h3.style.color = "blue";

// container.append(h3);




let container = document.querySelector("#container");

// 1. Red paragraph
let p = document.createElement("p");
p.innerText = "Hey I'm red!";
p.style.color = "red";

container.append(p);


// 2. Blue h3
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.style.color = "blue";

container.append(h3);


// 3. Div
let div = document.createElement("div");

div.style.border = "2px solid black";
div.style.backgroundColor = "pink";


// h1 inside div
let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";


// p inside div
let p2 = document.createElement("p");
p2.innerText = "ME TOO!";


// Put h1 and p inside div
div.append(h1);
div.append(p2);


// Put div inside container
container.append(div);