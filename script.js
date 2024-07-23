const container = document.querySelector("div");

let row = 16;
let column = 16;

for(let i = 0; i < row; i++){
    const box = document.createElement("div");
    box.style.height = "5%";
    box.style.width = "5%";
    box.style.border = "1px solid black";
    
    container.appendChild(box);
}

for(let j = 0; j < column; j++){
    const box = document.createElement("div");
    box.style.height = "5%";
    box.style.width = "5%";
    box.style.border = "1px solid black";

    container.appendChild(box);
}