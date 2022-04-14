const gridContainer = document.querySelector('.gridContainer')
const gridSizeText = document.querySelector('#GridSizeText')
const GridSizer = document.querySelector('#GridSize')
const backColour = document.getElementById('backColour')

//all buttons
const RainbowBtn = document.getElementById('rainbow')
const EraserBtn = document.getElementById('eraser')
const GridBtn = document.getElementById('grid')
const ClearBtn = document.getElementById('clear')

//grid colours and size values
let CellBackgroundColour = document.getElementById('backColour').value
let gridSize = document.querySelector('#GridSize').value//showing original size
let CellColour = document.getElementById('PenColour').value

//all different modes
let RainbowPen = false,
    Eraser = false,
    Grid = false;

//wether mouse button is being held down
let mouseDown = false;//for deciding if mouse button is being held or not
gridContainer.onmousedown = ()=>mouseDown= true;//only mousedown on grid
document.onmouseup = ()=>mouseDown = false;

RainbowBtn.onclick = () =>{
    if (!RainbowPen){
        RainbowPen = true
        Eraser = false
    }else{
        RainbowPen = false
    };
};

EraserBtn.onclick = () =>{
    if (!Eraser){
        Eraser = true
        RainbowPen = false
    }else{
        Eraser = false
    }
};

ClearBtn.onclick = () =>{
    deleteGrid()
    createGrid(gridSize)
};

GridBtn.onclick = ()=>{
    const cells = Array.from(document.getElementsByClassName('cell'))

    cells.forEach(cell =>{
        cell.classList.toggle('CellGrid')
    });
    
    if (Grid) Grid=false
    else Grid=true
};



//changing canvas bg colour
backColour.oninput = e =>{//change backgorund colour
    changeBackColour(e.target.value)
    CellBackgroundColour = document.getElementById('backColour').value
};

//changing gridsize text and variable
GridSizer.onmousemove = e=>{
    gridSize= e.target.value
    gridSizeText.textContent = `${gridSize} x ${gridSize}`
};

//changing grid size
GridSizer.onchange = e => {//creating a new grid when slider is moved
    deleteGrid()
    createGrid(e.target.value)
};

//functions ---------------

function createGrid (size){
    gridContainer.style.gridTemplateColumns= `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows= `repeat(${size}, 1fr)`

    for (let i=0; i< size*size; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell','clean');
        if (Grid) cell.classList.add('CellGrid')
        cell.addEventListener('mouseover' , changeCellColour);//so you can drag mouse across grid
        cell.addEventListener('click' , changeCellColour); //so you can click on one square
        cell.style.background = `${CellBackgroundColour}`
        cell.style.border = 1

        gridContainer.appendChild(cell)
    };
};

function changeCellColour(e){
    if (e.type == 'mouseover' && !mouseDown ) return //end function right there
    const cell = e.target //indvidual cell in grid

    if (!Eraser){
    CellColour = RainbowPen?
        RandomColour() : document.getElementById('PenColour').value
    cell.style = `background-color: ${CellColour}`
    cell.classList.remove('clean')
    }else{
        //checking if cell is already clean
        const CellClasses = Array.from(cell.classList)//getting all classes of the cell
        if (CellClasses.includes('clean')) return

        cell.classList.add('clean')
        cell.style.background = `${CellBackgroundColour}`

    };
};

function changeBackColour(colour){
    const cleanCells = Array.from(document.getElementsByClassName('clean'))
    cleanCells.forEach(cleanCell =>{
        cleanCell.style = `background-color:${colour}`
    });
    CellBackgroundColour = document.getElementById('backColour').value
}

function deleteGrid(){
    const cells = Array.from(document.getElementsByClassName('cell'))
    cells.forEach(cell =>{
        cell.remove();
    });
};
function RandomColour(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};




window.onload = ()=>{
    createGrid(16)//making grid originally
    gridSizeText.textContent = `${gridSize} x ${gridSize}`

};
