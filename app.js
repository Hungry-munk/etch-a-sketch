const gridContainer = document.getElementById('gridContainer')
let sizeOFGrid = 6//defult size
let gridColour = 'black'

function createGrid (size){
    gridContainer.style.gridTemplateColumns= `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows= `repeat(${size}, 1fr)`

    for (i=0; i< size*size; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.border='solid 1px'
        gridContainer.appendChild(cell)
    };
};
createGrid(sizeOFGrid)

gridContainer.addEventListener('mousedown',()=>{
    const cells = document.querySelectorAll('.cell');
    cells.forEach(Element =>{
        Element.addEventListener('mouseover',()=>{
            Element.style = 'background: blue'
        })
    }) 
})