// typeof: 데이터 타입을 확인
// 값을 type 문자열로 반환
let variable;
console.log(typeof variable)

variable = '';
console.log(typeof variable)

variable = 123; // <<= 할당된 값에 따라 타입이 결정됨

variable = function () {};
console.log(typeof variable);

console.log(typeof 123);
