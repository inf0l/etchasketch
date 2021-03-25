let gridSize = 15;

const html = document.querySelector('html');
const body = document.querySelector('body');
const header = document.querySelector('header');

const container = document.querySelector('#container');

const style = document.createElement('style');

style.innerHTML = `
html {
    background: red;
}

.square {
    display: flex;
    height: 0;
}

header {
    display: flex;
    justify-content: space-between;
    max-height: 6vh;
}

#container {
    display: flex;
    flex-flow: row wrap;
    height: 90vmin;
    width: 90vmin;
    background: #dbd6a7;
    border-style: solid;
}

h4 {
    font-family: 'Pacifico', cursive;
    font-size: 30;
    margin-top: -10;
    color: gold;
}
`;

html.appendChild(style);

const title = document.createElement('h4');
title.textContent = 'Etch-a-sketch';

const restart = document.createElement('button');
restart.innerText = 'Restart';
restart.addEventListener('click', () => {
    while (container.firstChild) {
	container.removeChild(container.firstChild);
    }
    gridSize = prompt('How many squares per side would you like?', 15);
    if (0 < gridSize && gridSize < 101) {
	drawGrid(gridSize);
    } else {
	alert('Invalid input. Resetting to 15x15');
	drawGrid(4);
    }
});

header.appendChild(title);
header.appendChild(restart);

function drawGrid(n) {
    for (let i = 0; i < n * n; i++) {
	const square = document.createElement('div');
	square.id = 'square' + (i + 1);
	square.className = 'square';
	square.style = `flex-basis: ` + 100 / gridSize + `%; width: ` + 100 / gridSize + `%; padding-bottom: ` + 100 / gridSize + `%`;
	square.addEventListener('mouseover', () => {
	    square.style.background = '#2e2e2e';
	})
	container.appendChild(square);

    }
}

drawGrid(gridSize);
