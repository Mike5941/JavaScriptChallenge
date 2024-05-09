const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}
calculator(2, 2, add)