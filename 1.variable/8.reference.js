// primitive type 값이 복사되어 전달됨
let a = 1;
let b = a;

b = 2;
console.log(a);
console.log(b);

// object 타입은 (메모리주소, 레퍼런스)가 복사되어 전달됨
const apple = {
  name: '사과',
};

let orange = apple
