let btn = document.querySelector("button");
let box = document.querySelector(".box");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function () {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;

    box.style.backgroundColor = color;
    h1.innerText = color;
});