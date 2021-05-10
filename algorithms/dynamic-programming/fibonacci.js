cache = {};
function fibonacci(n) {
  if (n in cache) {
    return cache[n];
  } else {
    if (n < 2) {
      return n;
    }

    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }

  return cache[n];
}

console.log(fibonacci(100));
