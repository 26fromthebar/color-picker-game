// Select DOM elements
const newGame = document.querySelector('.btn-new-game');
const easy = document.querySelector('.btn-easy');
const normal = document.querySelector('.btn-normal');
const hard = document.querySelector('.btn-hard');
const rgb = document.querySelector('.rgb-display');
const squaresContainer = document.querySelector('.color-squares-container');
const colorSquares = document.querySelectorAll('.color-square');
const message = document.querySelector('.message');
const messageContainer = document.querySelector('.message-container');

// Create new random color
function createNewColor() {
  let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  return color;
}

// Create new games
let squareCount = 0;

function createNewGame(elements) {
  const colors = [];

  elements.forEach((element) => {
    let elementColor = createNewColor();
    colors.push(elementColor);
    element.style.backgroundColor = elementColor;
  });

  rgb.textContent = colors[Math.floor(Math.random() * colors.length)];
}

function createModeGame(mode) {
  switch (mode) {
    case easy:
      squareCount = 3;

      easy.classList.add('selected');
      normal.classList.remove('selected');
      hard.classList.remove('selected');

      squaresContainer.innerHTML = `
            <div class="color-square"></div>
            <div class="color-square"></div>
            <div class="color-square"></div>
            `;

      const threeSquares = document.querySelectorAll('.color-square');
      createNewColor(threeSquares);
      addEventToSquares(threeSquares);
      break;

    case normal:
      squareCount = 6;

      easy.classList.remove('selected');
      normal.classList.add('selected');
      hard.classList.remove('selected');

      squaresContainer.innerHTML = `
            <div class="color-square"></div>
            <div class="color-square"></div>
            <div class="color-square"></div>
            <div class="color-square"></div>
            <div class="color-square"></div>
            <div class="color-square"></div>
            `;

      const sixSquares = document.querySelectorAll('.color-square');
      createNewColor(sixSquares);
      addEventToSquares(sixSquares);

    case hard:
      squareCount = 9;

      easy.classList.remove('selected');
      normal.classList.remove('selected');
      hard.classList.add('selected');

      squaresContainer.innerHTML = `
            <div class="color-square"></div>
            <div class="color-square"></div>
            <div class="color-square"></div>
            <div class="color-square"></div>
            <div class="color-square"></div>
            <div class="color-square"></div>
            <div class="color-square"></div>
            <div class="color-square"></div>
            <div class="color-square"></div>
            `;

      const nineSquares = document.querySelectorAll('.color-square');
      createNewColor(nineSquares);
      addEventToSquares(nineSquares);
  }
}

// Add eventListeners to the color-squares
function addEventToSquares(elements) {
  elements.forEach((square) => {
    square.addEventListener('click', () => {
      if (square.style.backgroundColor === rgb.textContent) {
        message.textContent = 'Congrats, great choice!';
        message.style.color = rgb.textContent;
        message.style.fontWeight = 700;
        for (let square of elements) {
          square.style.backgroundColor = rgb.textContent;
          square.classList.remove('hidden');
        }
      } else {
        square.classList.add('hidden');
        message.textContent = 'Not the color you were looking for...';
      }
    });
  });
}

window.addEventListener('load', () => {
  createNewGame(colorSquares);
  addEventToSquares(colorSquares);
});

// newGame.addEventListener('click', () => {
//   if (squareCount === 9) {
//     createModeGame(hard);
//     message.style.color = '#2c8e99';
//   } else if (squareCount === 6) {
//     createModeGame(normal);
//     message.style.color = '#2c8e99';
//   } else if (squareCount === 3) {
//     createModeGame(easy);
//     message.style.color = '#2c8e99';
//   } else {
//     createNewGame(colorSquares);
//     addEventToSquares(colorSquares);
//     message.style.color = '#2c8e99';
//   }
// });

// easy.addEventListener('click', () => {
//   createModeGame(easy);
// });

// normal.addEventListener('click', () => {
//   createModeGame(normal);
// });

// hard.addEventListener('click', () => {
//   createModeGame(hard);
// });
