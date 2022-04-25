import goblinImage from '../img/goblin.png';
import getRandomArbitrary from './random';

const imageElement = document.createElement('img');
let fieldCell = document.querySelectorAll('.field_cell');
let randomCell;
let intervalId;
let missHit = 0;
let correctHit = 0;
let previousRandomCell = -1;

function changeRandomImageCell(fieldCellArr, image, isInterval = false) {
  do {
    randomCell = Math.trunc(getRandomArbitrary(0, fieldCellArr.length));
  } while (randomCell === previousRandomCell);

  previousRandomCell = randomCell;
  fieldCellArr[randomCell].appendChild(image);

  if (isInterval) {
    missHit++;
    console.log(missHit);
    if (missHit === 5) {
      alert('5 промахов, игра завершена!');
    }
  }

}

imageElement.src = goblinImage;
fieldCell = [...fieldCell];
changeRandomImageCell(fieldCell, imageElement);
intervalId = setInterval(changeRandomImageCell, 1000, fieldCell, imageElement, true);

for (let i of fieldCell) {
  i.addEventListener('click', () => {
    if (i === fieldCell[randomCell]) {
      clearInterval(intervalId);
      changeRandomImageCell(fieldCell, imageElement);
      intervalId = setInterval(changeRandomImageCell, 1000, fieldCell, imageElement, true);
      correctHit++;
    }
  });
}