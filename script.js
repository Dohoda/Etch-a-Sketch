function getSize(amount){
    return 100 / amount;
}

let gridSize = getSize(16);


const container = document.querySelector(".container");

const box = document.createElement("div");
box.classList.add("box");

box.style.backgroundColor = "cornflowerblue";
box.style.height = gridSize;
box.style.width = gridSize;

container.appendChild(box);
