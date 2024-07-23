const container = document.querySelector(".container");

let row = 16;
let column = 16;

function buildGrid(){
 for(let i = 0; i < row; i++){
     const row = document.createElement("div");
     row.classList.add("row");
     

     container.appendChild(row);

     for(let j = 0; j < column; j++){
         const column = document.createElement("div");
         column.classList.add("column");
         
    
         row.appendChild(column);
        }
    }
}

buildGrid();