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
                pixel.style.backgroundColor = "black";
            })
            pixel.addEventListener('touchmove', () => {
                pixel.style.backgroundColor = "black";
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
        pixelsPerRow = parseInt(prompt("Enter number of pixels per row/column.\nValue must be between 1 and 100."));
    } while (pixelsPerRow < 1 || pixelsPerRow > 100)
    
    createGrid(pixelsPerRow);
})