// 단항 연산자 (Unary Operators)

// +
// -
// !
let a = 5;
a = -a; // -1 * 5
console.log(a);
console.log(-a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있음
console.clear()
console.log(+false);// 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text') // NaN
console.log(+undefined) //NaN

let d = 1
let b = 2
console.log(d);

let c = d++ + b
console.log(c);
console.log(d)