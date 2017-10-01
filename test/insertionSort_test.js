
const assert = require('chai').assert;
const insertionSort = require('../insertionSort');


describe('bubble sort func', function () {
    it('it can sort a given array of numbers', function () {
        assert.deepEqual(insertionSort([1, 0, 4, 3, 2]), [0,1,2,3,4]);
    });

    it('can sort a given array of letters', function () {
        assert.deepEqual(insertionSort(["d", "b", "a", "c"]), ['a', 'b', 'c', 'd'])
    })
});