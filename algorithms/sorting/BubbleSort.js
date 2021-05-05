function bubbleSort(array) {
  for (let _ = 0; _ < array.length; _++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const largerNumber = array[j];
        array[j] = array[j + 1];
        array[j + 1] = largerNumber;
      }
    }
  }
}
