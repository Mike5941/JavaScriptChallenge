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

/* 위를 조금 더 심플하게 만들 수 있는 generator 라는게 있음 */
// 값을 생성할 수 있음

function* multipleGenerator() {
  for(let i = 0; i < 10; i++) {
    console.log(i);
    yield i ** 2; // return은 바로 반환하는 반면에 yield는 사용자가 원할 때 하나하나씩 return
  }
}

const multiple = multipleGenerator();

let next = multiple.next();

console.log(next.value, next.done)
multiple.return();
multiple.throw('Error!') // error을 던질 수 있다.
next = multiple.next();
console.log(next.value)