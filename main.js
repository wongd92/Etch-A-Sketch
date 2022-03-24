// 1. Set-up 16x16 grid
// - Hard-code 16x16 to test grid then update code to make it dynamic
// - Look-up CSS Grid/Grid Template JS
// - Create each div element via DOM then append to grid
// - Place into Function
const grid = document.querySelector('.grid-squares');

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        let square = document.createElement('div');
        grid.style.backgroundColor = 'blue';
        grid.appendChild(square);
    }
}

// 2. Create function to take input from HTML for size / change sizes of grid

function changeSize(){
    let size = document.querySelector('input').value;
    setupGrid(size);
}


// 3. Create functions for random color / rainbow color button

// 4. Create function for changing color 

// 5. Function to reset the game board

// 6. Event listeners for mousedown and click to start/stop drawing

