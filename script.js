const container = document.querySelector(".container");

function getSize(){
 let row = String(prompt("Number of rows:"));
 let column = String(prompt("Number of columns:"));
}

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

function resetGrid(){
    location.reload;
}

buildGrid();