import { getSum, getDifference, getMultiple, getDivision } from '../mathUtils.js';

const test = QUnit.test;

test('it should return 11 when provided 9 and 2', (expect) => {

    const expected = 11;
    const actual = getSum(9, 2);
    expect.equal(actual, expected);
});

test('it should return 11 when provided 9 and 2', (expect) => {

    const expected = -5;
    const actual = getSum(-9, 4);
    expect.equal(actual, expected);
});

test('it should return 700 when provided 900 and 200', (expect) => {

    const expected = 700;
    const actual = getDifference(900, 200);
    expect.equal(actual, expected);
});

test('it should return 1234 when provided 5000 and 3766', (expect) => {

    const expected = 1234;
    const actual = getDifference(5000, 3766);
    expect.equal(actual, expected);
});

test('it should return 55 when provided 5 and 11', (expect) => {

    const expected = 55;
    const actual = getMultiple(5, 11);
    expect.equal(actual, expected);
});

test('it should return 120 when provided 12 and 10', (expect) => {

    const expected = 120;
    const actual = getMultiple(12, 10);
    expect.equal(actual, expected);
});

test('it should return 4 when provided 16 and 4', (expect) => {

    const expected = 4;
    const actual = getDivision(16, 4);
    expect.equal(actual, expected);
});

test('it should return 100 when provided 1000 and 10', (expect) => {

    const expected = 100;
    const actual = getDivision(1000, 10);
    expect.equal(actual, expected);
});