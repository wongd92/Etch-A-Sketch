// 1. Set-up 16x16 grid
// - Hard-code 16x16 to test grid then update code to make it dynamic
// - Look-up CSS Grid/Grid Template JS
// - Create each div element via DOM then append to grid
// - Place into Function
const grid = document.querySelector('.grid-squares');
let currentColor = "black";
let randomColor = "red";

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let total = size * size;

    for (let i = 0; i < total; i++){
        let square = document.createElement('div');
        square.classList.add("pixel");
        grid.style.backgroundColor = 'blue';
        grid.appendChild(square);
    }

    changeColor();
}

// 2. Create function to take input from HTML for size / change sizes of grid

function changeSize(){
    let size = document.querySelector('input').value;
    setupGrid(size);
}

// 3. Create functions for random color / rainbow color button
function changeColor() {
    let pixels = document.querySelectorAll('.pixel');
    
    pixels.forEach(pixel => pixel.addEventListener('mousedown', () => {
        if (currentColor === 'red') {
            getRandomColor();
            pixel.style.backgroundColor = randomColor;
        }

        else {
            pixel.style.backgroundColor = currentColor;
        }
    })
    );
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    randomColor = '#';
    for (var i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  }

// 4. Create function for changing color 

function selectColor(color){
    currentColor = color;
}


// 5. Function to reset the game board

// 6. Event listeners for mousedown and click to start/stop drawing

