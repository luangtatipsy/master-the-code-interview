function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    min_idx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min_idx]) {
        min_idx = j;
      }
    }
    const largerNumber = array[i];
    array[i] = array[min_idx];
    array[min_idx] = largerNumber;
  }
}
