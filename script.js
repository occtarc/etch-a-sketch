const containerGrid = document.querySelector(".container-grid");
const inputRange = document.getElementById("size-input");
const labelRange = document.getElementById("size-label");
const inputColor = document.getElementById("colorinput");
const buttonNew = document.getElementById("new");
const buttonClear = document.getElementById("clear");
let colorInput = "#ff0000";
let isMouseMoveActive = false;
function crearGrid (value) {
    let inputValue = +value;
    let inputCuadrado = inputValue * inputValue;
    let cellSize = 100/inputValue;
    containerGrid.innerHTML = '';
    for(let i = 0; i < inputCuadrado; i++){
        let newCell = document.createElement("div");
        newCell.style.width = cellSize + '%';
        newCell.classList.add("cell");
        newCell.addEventListener("click", cambiarMouseMove);
        containerGrid.appendChild(newCell);
    }
}

function cambiarMouseMove(e) {
    const celda = e.target;
    if (isMouseMoveActive) {
        document.removeEventListener("mousemove", pintarCeldaMovimiento);
        isMouseMoveActive = false;
        celda.style.backgroundColor = `${colorInput}`; 
    } else {
        document.addEventListener("mousemove", pintarCeldaMovimiento);
        isMouseMoveActive = true;
    }
}

function pintarCeldaMovimiento(e) {
    const celdaAPintar = e.target;
    if(celdaAPintar.classList.contains("cell")){
        celdaAPintar.style.backgroundColor = `${colorInput}`;
    }
}
function limpiarGrid(){
    const listaCeldas = document.querySelectorAll(".cell");
    listaCeldas.forEach((celda) => {
        celda.style.backgroundColor = "#F8F9F9";
    })
}

inputRange.addEventListener("input", () => {
    labelRange.textContent = inputRange.value;
})

buttonNew.addEventListener("click", () => {
    crearGrid(inputRange.value);
})

buttonClear.addEventListener("click",()=>{
    limpiarGrid();
})

inputColor.addEventListener("input", () => {
    colorInput = inputColor.value;
    console.log(colorInput);
})

crearGrid(16);