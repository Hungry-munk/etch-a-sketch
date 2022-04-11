const gridContainer = document.getElementById('gridContainer')

let sizeOFGrid = 8

function createGrid (size){


    for (i=0;i<size ** 2; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(`${i+1}`);
        cell.style.border = 'solid 1px'
        cell.textContent = 'c'
        gridContainer.appendChild(cell)
        gridContainer.style.gridTemplateColumns= `repeat(${size}, 1fr)`
        gridContainer.style.gridTemplateRows= `repeat(${size}, 1fr)`
    }

};

createGrid(sizeOFGrid)


