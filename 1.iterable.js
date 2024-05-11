/* Iterable 하다는건, 순회가 가능하다는 것이다. */
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회가 가능한 객체이다 라는걸 알 수 있다.
// 순회가 가능하면 for..of, spread 연산자를 사용하여 반복이 가능하다

const array = [1, 2, 3];
for(const item of array.keys()) {
  console.log(item);
}

// Iterable Protocol을 따라가지 않는 객체는 for..in을 사용한다.
const obj = { 0: 1, 1: 2 };
for(const item in obj) {
  console.log(item);
}

const iterator = array.values();

while(true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
