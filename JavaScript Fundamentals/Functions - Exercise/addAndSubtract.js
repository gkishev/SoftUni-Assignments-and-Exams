function addAndSubtract(a, b, c) {
  let sumTwoNumbers = (a, b) => a + b;
  let subtractTwoNumbers = (a, b) => a - b;

  let sum = sumTwoNumbers(a, b);
  let subtract = subtractTwoNumbers(sum, c);

  return subtract;
}

console.log(addAndSubtract(23, 6, 10));
