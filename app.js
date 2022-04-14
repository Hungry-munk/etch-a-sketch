const gridContainer = document.querySelector('.gridContainer')
let CellColour = document.getElementById('PenColour').value
let CellBackgroundColour = document.getElementById('backColour').value

let gridSize = document.querySelector('#GridSize').value//showing original size
const GridSizer = document.querySelector('#GridSize')
const gridSizeText = document.querySelector('#GridSizeText')

GridSizer.onmousemove = e=>{//updating the text of slider value
    gridSize= e.target.value
    gridSizeText.textContent = `${gridSize} x ${gridSize}`
};

GridSizer.onchange = e => {//creating a new grid when slider is moved
    deleteGrid()
    createGrid(e.target.value)
}
 

let mouseDown = false;//for deciding if mouse button is being held or not
gridContainer.onmousedown = ()=>mouseDown= true;//only mousedown on grid
document.onmouseup = ()=>mouseDown = false;

//all different modes
let ColorPen = true,
    RainbowPen = false,
    Eraser = false,
    Grid = false;

function createGrid (size){
    gridContainer.style.gridTemplateColumns= `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows= `repeat(${size}, 1fr)`

    for (let i=0; i< size*size; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(`${i+1}`)
        cell.addEventListener('mouseover' , changeCellColour);
        cell.addEventListener('click' , changeCellColour); //so you can click on one square
        cell.style.background = `${CellBackgroundColour}`
        // cell.style.border = '1px solid'
        gridContainer.appendChild(cell)
    };
};

function changeCellColour(e){
    if (e.type == 'mouseover' && !mouseDown ) return //end function right there
    const cell = e.target //indvidual cell in grid
    CellColour = document.getElementById('PenColour').value
    cell.style = `background-color: ${CellColour}`
};

function deleteGrid(){
    const cells = Array.from(document.getElementsByClassName('cell'))
    cells.forEach(cell =>{
        cell.remove();
    });
};

window.onload = ()=>{
    createGrid(16)//making grid originally
    gridSizeText.textContent = `${gridSize} x ${gridSize}`

};
