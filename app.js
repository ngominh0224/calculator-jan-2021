import { sumClickHandler, difClickHandler, multiClickHandler, divClickHandler } from './handlers.js';

const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');


addButton.addEventListener('click', sumClickHandler);

subtractButton.addEventListener('click', difClickHandler);

multiplyButton.addEventListener('click', multiClickHandler);

divideButton.addEventListener('click', divClickHandler);
