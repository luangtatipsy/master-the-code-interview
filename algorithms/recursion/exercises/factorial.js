function factorialRecursive(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

function factorialIterative(n) {
  let output = 1;
  for (let i = n; i > 1; i--) {
    output *= i;
  }
  return output;
}
