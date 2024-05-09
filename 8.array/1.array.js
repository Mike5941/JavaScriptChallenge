// 배열 생성 방법
let array = new Array(2); // size 지정 가능
console.log(array);

array = new Array(1,2,3); // 값을 보내어 생성 가능
console.log(array);

array = Array.of(1,2,3); // Static 함수 활용
console.log(array);

const anotherArray = [1,2,3,4];
console.log(anotherArray);

array = Array.from('text') // 기존의 배열을 가져와서 생성
// 순회 가능한 것들
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
// 하지만 JS의 배열은 연속적으로 이어져 있지 않고
// Object와 유사!
// JS 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음.

array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
})
console.log(array)