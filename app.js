const gridContainer = document.getElementById('gridContainer')
let gridSize = 16//defult size
let gridColour = 'black'

createGrid(gridSize)//making grid originally

let mouseDown = false
gridContainer.onmousedown = ()=>mouseDown= true//only mousedown on grid
document.onmouseup = ()=>{
    mouseDown = false
    console.log('up')
}

function createGrid (size){
    gridContainer.style.gridTemplateColumns= `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows= `repeat(${size}, 1fr)`

    for (let i=0; i< size*size; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        // cell.draggable = 'false'
        cell.addEventListener('mouseover' , changeCellColour);
        cell.addEventListener('click' , changeCellColour);//so you can click on one square
        cell.style.border='solid 1px'
        gridContainer.appendChild(cell)
    };
};

function changeCellColour(e){
    if (e.type == 'mouseover' && !mouseDown ) return //end function right there
    e.target.style = 'background : blue'
};
