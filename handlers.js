import { getSum, getDifference, getMultiple, getDivision } from './mathUtils.js';

const additionField = document.getElementById
    ('add-input-1');
const additionField2 = document.getElementById
    ('add-input-2');
const addResults = document.getElementById('add-results');

export function sumClickHandler() {
    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;
    console.log(fieldValue, fieldValue2);
    const sum = getSum(fieldValue, fieldValue2);
    addResults.textContent = sum;
}

export function difClickHandler() {
    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;
    console.log(fieldValue, fieldValue2);
    const dif = getDifference(fieldValue, fieldValue2);
    addResults.textContent = dif;
}

export function multiClickHandler() {
    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;
    console.log(fieldValue, fieldValue2);
    const mul = getMultiple(fieldValue, fieldValue2);
    addResults.textContent = mul;
}

export function divClickHandler() {
    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;
    console.log(fieldValue, fieldValue2);
    const div = getDivision(fieldValue, fieldValue2);
    addResults.textContent = div;
}