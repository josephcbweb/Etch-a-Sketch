let pixelLength = 16;

createGrids();

function createGrids(){
    let boxSide = 500 / pixelLength;
    console.log(boxSide);
    const noOfBoxes = pixelLength ** 2;
    console.log(noOfBoxes);
    const container = document.querySelector('.js-container');
    for(let i=0; i<noOfBoxes; i++){
        const subBox = document.createElement('div');
        subBox.setAttribute(`style`, `height: ${boxSide}px; width: ${boxSide}px`);
        subBox.classList.add("sub-div", "js-sub-div");
        subBox.addEventListener('mouseover', ()=>{
            subBox.style.backgroundColor = "black";
        });
        container.appendChild(subBox);
    }
}

const changeGrid = document.querySelector('.js-grid-change-button');

changeGrid.addEventListener('click', ()=>{
    changeGridSize(); 
});

function changeGridSize() {
    newSize = Number(prompt("Enter a new grid size: (1-100): "));
    if (newSize<0 || newSize > 100){
        alert("Please keep the range between 0 and 100");
        changeGridSize();
    }else {
        pixelLength = newSize;
        resetGrid();
    }
}

function resetGrid(){
    const container = document.querySelector('.js-container');
    container.innerHTML ='';
    createGrids();
}

const resetButtonElement = document.querySelector('.js-reset-grid-button');

resetButtonElement.addEventListener('click', ()=>{
    resetGrid();
});