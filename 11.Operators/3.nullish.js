// Nullish Coalescing Operator

//ES11 (ECMAScript 2020)
// ?? null, undefined
// || falshy한 경우 설정(할당)
let num = 0;
// 0은 false이기 때문에 문제가 생김
console.log(num || '-1');

// num이라는 값이 없을 때만 -1을 설정하고 싶을 때 ?? 연산자 사용
console.log(num ?? '-1');