const container = document.querySelector(".container");

let row = 0;
let column = 0;

function getSize(){
  row = String(prompt("Number of rows:"));
  column = String(prompt("Number of columns:"));
}

function buildGrid(){
 for(let i = 0; i < row; i++){
     const row = document.createElement("div");
     row.classList.add("row");
     

     container.appendChild(row);

     for(let j = 0; j < column; j++){
         const column = document.createElement("div");
         column.classList.add("column");
         
         column.addEventListener("click", function(){
            column.style.backgroundColor = "black";
         });

         row.appendChild(column);
        }
    }
}

function resetGrid(){
    location.reload();
}

const gridBTN = document.querySelector("#gridBTN");
gridBTN.addEventListener("click", function(){
    getSize();
    buildGrid();
});

const resetBTN = document.querySelector("#resetBTN");
resetBTN.addEventListener("click",function(){
    resetGrid();
});
