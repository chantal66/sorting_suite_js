
function bubbleSort(items) {
    let length = items.length;
    for (let i = (length - 1); i >= 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (items[j] < items[j - 1]) {
                let tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
    return items;
}

module.exports = bubbleSort;