const container = document.querySelector(".container");

for (let i = 0; i < (16 * 16); i++) { 
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    container.appendChild(square);
    square.addEventListener("mouseenter", (e) => e.target.style.backgroundColor = "green");
    square.addEventListener("mouseleave", (e) => e.target.style.backgroundColor = "lightgreen");
};
