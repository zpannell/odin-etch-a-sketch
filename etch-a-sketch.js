// set grid size and resolution
let header = document.querySelector('h1');
let headerHeight = header.offsetHeight;
let reset = document.querySelector('#reset');
let resetHeight = reset.offsetHeight;
const gridWidth = Math.min(window.innerWidth,
                          (window.innerHeight - headerHeight - resetHeight)) - 60;
let pixelsPerRow = 16;
const pixelBorderWidth = 0; // set this to give pixels borders

// setup div that grid goes into
const grid = document.querySelector('#grid');
grid.style.margin = "12px auto";
const gridPadding = 4;
grid.style.padding = gridPadding + "px";
const gridBorderWidth = 8;
grid.style.border = gridBorderWidth + "px solid gray";
grid.style.borderRadius = "4px";
grid.style.maxWidth = gridWidth + 2 * (gridBorderWidth + gridPadding) + "px";

// create array of pixels
function createGrid(pixelsPerRow) {
    grid.innerHTML = '';
    for (let i = 0; i < pixelsPerRow; i++) {
        let col = document.createElement('div');
        col.className = "col";
        for (let j = 0; j < pixelsPerRow; j++) {
            let pixel = document.createElement('div');
            let pixelSize = gridWidth / pixelsPerRow - (2 * pixelBorderWidth);
            pixel.className = "pixel";
            pixel.style.width = pixelSize + "px";
            pixel.style.height = pixel.style.width;
            pixel.style.border = pixelBorderWidth + "px solid gray"
            pixel.style.margin = "0px";
            pixel.style.backgroundColor = "white";
            pixel.addEventListener('mouseover', () => {
                if (document.querySelector('#randomColors').checked === true) {
                    let red = Math.floor(Math.random() * 256);
                    let green = Math.floor(Math.random() * 256);
                    let blue = Math.floor(Math.random() * 256);
                    pixel.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
                } else {
                    pixel.style.backgroundColor = "black";
                }
            })
            col.appendChild(pixel);
        }
        grid.appendChild(col);
    }
}

createGrid(pixelsPerRow);

// define reset functionality
reset.addEventListener('click', () => {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = "white";
    })
})

// change grid resolution
const changeResolution = document.querySelector('#change');
changeResolution.addEventListener('click', () => {
    do {
        previousPixelsPerRow = pixelsPerRow;
        pixelsPerRow = parseInt(prompt("How many squares per side would you like?\nValue must be between 1 and 100."));
        console.log(pixelsPerRow);
        if (!pixelsPerRow) {
            pixelsPerRow = previousPixelsPerRow;
        }
    } while (pixelsPerRow < 1 || pixelsPerRow > 100)
    
    createGrid(pixelsPerRow);
})