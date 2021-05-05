function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciIterative(n) {
  const seq = [1, 1];
  let current_value = 1;

  for (let i = 2; i < n; i++) {
    const last_item = seq.pop();
    const before_last_item = seq.pop();

    current_value = last_item + before_last_item;
    seq.push(last_item);
    seq.push(current_value);
  }

  return current_value;
}

console.log(fibonacciRecursive(1));
