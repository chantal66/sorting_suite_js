
const assert = require('chai').assert;
const bubbleSort = require('../bubbleSort');

describe('bubble sort func', function () {
    it('it can sort a given array of numbers', function () {
        assert.deepEqual(bubbleSort([3,5,6,0,4,1]), [0,1,3,4,5,6]);
    });

    it('can sort a given array of letters', function () {
        assert.deepEqual(bubbleSort(["d", "b", "a", "c"]), ['a', 'b', 'c', 'd'])
    })
});



