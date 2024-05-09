// Object literal { key: value };
// new Object();
// Object.create();

// key -> 문자, 숫자, 문자열, Symbol
// value = 원시값, 객체 (함수)

let apple = {
  name: 'apple',
  helloBye: '‼️',
  0: 1,
  ['hello-bye1']: '‼️'
};

// 속성, 데이터에 접근
console.log(apple['hello-bye']);

apple.emoji = '🍎'
console.log(apple.emoji)
console.log(apple)

delete apple.emoji;
console.log(apple)