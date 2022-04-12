const gridContainer = document.getElementById('gridContainer')
let sizeOFGrid = 6//defult size
let gridColour = 'black'

let mouseDown = false
document.onmousedown = ()=> mouseDown= true
document.onmouseup = ()=> mouseDown = false

function createGrid (size){
    gridContainer.style.gridTemplateColumns= `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows= `repeat(${size}, 1fr)`

    for (i=0; i< size*size; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover' , changeCellColour);
        cell.style.border='solid 1px'
        gridContainer.appendChild(cell)
    };
};

function changeCellColour(e){
    if (e.type == 'mouseover' && !mouseDown ) return //end function right there
    doucment
};

createGrid(sizeOFGrid)
