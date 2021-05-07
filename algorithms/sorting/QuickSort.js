function quickSort(array, low, high) {
  if (low >= high) {
    return;
  }

  const part = partition(array, low, high);
  quickSort(array, low, part - 1);
  quickSort(array, part + 1, high);

  return array;
}

function partition(array, low, high) {
  const center = array[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (array[j] < center) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i += 1;
    }
  }
  temp = array[i];
  array[i] = array[high];
  array[high] = temp;

  return i;
}
