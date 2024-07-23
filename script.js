const container = document.querySelector("div");

let row = 16;
let column = 16;

function buildGrid(){
 for(let i = 0; i < row; i++){
     const box = document.createElement("div");
     box.classList.add("row");
     box.style.border = "1px solid black";

     container.appendChild(box);

     for(let j = 0; j < column; j++){
         const box = document.createElement("div");
         box.classList.add("column");
         box.style.border = "1px solid black";
    
         container.appendChild(box);
     }
 }
}

buildGrid();