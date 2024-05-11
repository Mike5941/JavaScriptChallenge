// [Symbol.iterator](): Iterator{ next(): {value, done}};
//
// 0부터 10이하까지 숫자의 2배를  순회하는 Iterator 만들기
//
// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2 , done: num > max }
//       }
//     }
//   },
// };

function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
    let num = initialValue;
    return {
      next() {
        return { value: callback(num++) , done: num > maxValue }
      }
    }
  },
  }
}

const multiple = makeIterable(0, 10, (n) => n * 2);

for(const num of multiple) {
  console.log(num);
}