function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return "Something went wrong, all arrays are empty!";
  }

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  const mergedArray = [];
  let i = 0;
  let j = 0;
  let arr1Item = arr1[i];
  let arr2Item = arr2[j];

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[++i];
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[++j];
    }
  }

  return mergedArray;
}
