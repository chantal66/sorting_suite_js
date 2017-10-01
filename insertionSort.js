
function insertionSort(array) {
    let length = array.length;

    for (let i = 0; i < length; i++){

        let temp = array[i];
        let j = i - 1;

        while(j >= 0  && (array[j] > temp)){
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array
}


module.exports = insertionSort;