let pixelLength = 16;
let colorSplash = false;
let progressiveHue = false;


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
        let opacity = 0;
        subBox.addEventListener('mouseover', ()=>{
            if (opacity < 100){
                opacity += 10;
            };
            setColor(subBox, opacity);
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

const funButtonElement = document.querySelector(".js-fun-button");

funButtonElement.addEventListener('click', ()=>{
    if (funButtonElement.textContent === 'Color Splash 🎉'){
        funButtonElement.textContent = 'Make it Minimal ⚫';
        colorSplash = true;
    } else {
        funButtonElement.textContent = 'Color Splash 🎉';
        colorSplash = false;
    }
});

function getRandomRGB(opacity){
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b},${opacity/100})`;
}

function setColor(subBox, opacity){
    console.log();
    if (progressiveHue){
        subBox.style.backgroundColor = colorSplash ? getRandomRGB(opacity) :`rgb(0,0,0,${opacity/100})`;
    } else {
        subBox.style.backgroundColor = colorSplash ? getRandomRGB(100) :`rgb(0,0,0)`;
    }
}

const progessiveHueButton = document.querySelector('.js-progressive-hue-button');

progessiveHueButton.addEventListener('click', ()=>{
    changeHue();
})

function changeHue(){
    if(progressiveHue){
        progessiveHueButton.textContent = "Progressive Hue 🪜";
        progressiveHue = false;
    } else {
        progessiveHueButton.textContent = "Steady Color 🎨";
        progressiveHue = true;
    }
}