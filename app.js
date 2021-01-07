const additionalField = document.getElementById
    ('add-input-1');
const additionalField2 = document.getElementById
    ('add-input-2');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');
const addResults = document.getElementById('add-results');

addButton.addEventListener('click', () => {
    const result = Number(additionalField.value) + Number(additionalField2.value);
    addResults.textContent = result;
})

subtractButton.addEventListener('click', () => {
    const result = Number(additionalField.value) - Number(additionalField2.value);
    addResults.textContent = result;
})

multiplyButton.addEventListener('click', () => {
    const result = Number(additionalField.value) * Number(additionalField2.value);
    addResults.textContent = result;
})

divideButton.addEventListener('click', () => {
    const result = Number(additionalField.value) / Number(additionalField2.value);
    addResults.textContent = result;
})