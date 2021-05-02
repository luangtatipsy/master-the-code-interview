// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// Return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// Return 1

// Given an array = [2, 3, 4, 5]
// Return undefined

function seek(arr) {
  const traversed = {};

  for (let i = 0; i < arr.length; i++) {
    if (traversed[arr[i]] !== undefined) {
      return arr[i];
    }
    traversed[arr[i]] = 0;
  }
}
