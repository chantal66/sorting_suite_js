let pry = require('pryjs');
let items = [3,5,6,0,4,1];

function bubbleSort(items) {
    let length = items.length;
    for (let i = (length - 1); i >= 0; i--) {
        //Number of passes
        for (let j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (items[j] < items[j - 1]) {
                //Swap the numbers
                let tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
    return items;
}

console.log(bubbleSort(items));
// bubbleSort(items);
// eval(pry.it);
// module.exports = bubbleSort(items);