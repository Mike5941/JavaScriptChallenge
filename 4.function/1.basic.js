function print (a = 1, b = 2) {
  console.log(a);
  console.log(b);
  console.log(arguments)
  console.log(arguments[1])
  return a + b;
}
print()

function sum(a, b, ...numbers) {
  console.log(arguments[0])
  console.log(arguments[4])
}

sum(1,2,4,5,6)