import { Given, When, Then } from '@cucumber/cucumber'
import { add, subtract, multiply,divide } from '../../app/calc.js';
import {assert} from 'chai';

let x, y, result;
Given ('the numbers {int} and {int}', function (int, int2) {
    x = int;
    y = int2

});
When ('they are added', function () {
    result = add(x, y)
});
When ('they are subtracted', function () {
    result = subtract(x, y)
});
When ('they are multiplied', function () {
    result = multiply(x, y)
});
When ('they are divided', function () {
    result = divide(x, y)
});

// Then ('result is {int}', function (expected) {
//     assert.equal(result, expected)
// });
Then ('result is {float}', function (expected) {
    assert.closeTo(result, expected, 0.05)
});