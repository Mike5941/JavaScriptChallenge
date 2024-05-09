// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값, 타입 =
// !== 값, 타입 !=

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');  //true
console.log(2 === '2'); // false

console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
}

console.log(obj1 == obj2); // false, 메모리 주소 다름
console.log(obj1 === obj2); // false, 메모리 주소 다름
console.log(obj1.name == obj2.name); // true, 값이 같음
console.log(obj1.name === obj2.name); // true, 값이 같음

