function insertionSort(array) {
  debugger;
  for (let i = 0; i < array.length; i++) {
    let idx = i;
    for (let j = i; j >= 0; j--) {
      if (array[j] > array[i]) {
        idx = j;
      }
    }
    const currentItem = array.splice(i, 1)[0];
    array.splice(idx, 0, currentItem);
  }
}

const numbers = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
insertionSort(numbers);
console.log(numbers);
