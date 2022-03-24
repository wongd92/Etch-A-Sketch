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
        grid.style.backgroundColor = 'white';
        grid.appendChild(square);
    }
}

// 2. Create function to take input from HTML for size / change sizes of grid

function changeSize(){
    let size = document.querySelector('input').value;
    setupGrid(size);
}

// 5. Create a function to change the pixel background color
function changeColor() {
    let pixels = document.querySelectorAll('.pixel');
    
    pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
        if (currentColor === 'random') {
            getRandomColor();
            pixel.style.backgroundColor = randomColor;
        }

        else {
            pixel.style.backgroundColor = currentColor;
        }
    })
    );
}

// 4. Create a function to retrieve random colour
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    randomColor = '#';
    for (var i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  }

// 3. Create function for changing color 

function selectColor(color){
    currentColor = color;
    changeColor();
}

// 5. Function to reset the game board

function resetGrid() {
    let reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
        window.location.reload();
    });
}

setupGrid(16);

// 6. Event listeners for mousedown and click to start/stop drawing

