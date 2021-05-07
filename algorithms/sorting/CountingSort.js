function countingSort(array) {
  let frequency = new Map();
  min = Infinity;
  max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }

    if (array[i] < min) {
      min = array[i];
    }

    if (!frequency.has(array[i])) {
      frequency.set(array[i], 1);
    } else {
      frequency.set(array[i], frequency.get(array[i]) + 1);
    }
  }

  result = [];
  for (let i = min; i <= max; i++) {
    if (frequency.get(i)) {
      for (let c = 0; c < frequency.get(i); c++) {
        result.push(i);
      }
    }
  }

  return result;
}
