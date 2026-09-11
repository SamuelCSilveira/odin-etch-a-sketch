const container = document.querySelector(".container");
const button = document.querySelector("button");

const CONTAINER_WIDTH = parseInt(window
    .getComputedStyle(container)
    .getPropertyValue("max-width"), 10);
const CONTAINER_HEIGHT = parseInt(window
    .getComputedStyle(container)
    .getPropertyValue("max-height"), 10);

function createGrid(size) {
    container.textContent = "";
    for (let i = 0; i < (size * size); i++) { 
        const square = document.createElement("div");
        
        square.setAttribute("class", "square");
        square.style.width = `${CONTAINER_WIDTH / size}px`;
        square.style.height = `${CONTAINER_HEIGHT / size}px`;
        
        square.addEventListener("mouseenter", 
            (e) => e.target.style.backgroundColor = "green"
        );
        square.addEventListener("mouseleave", 
            (e) => e.target.style.backgroundColor = "lightgreen"
        );
        
        container.appendChild(square);
    };
}

button.addEventListener("click", () => {
    let size = Number(prompt("Choose a size between 1 and 100:"));
    if (!(size > 0 && size <= 100)) {
        alert("Invalid choice!")
    } else {
        createGrid(size);
    };
});

createGrid(16);