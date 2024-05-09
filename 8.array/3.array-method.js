// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['바나나', '사과', '레몬'];

console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('사과'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('바나나'));

// 추가 - 제일 뒤
let length = fruits.push('복숭아'); // 배열 자체를 수정
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('딸기');
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift();
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
let deleted = fruits.splice(0, 1);
console.log(fruits)
console.log(deleted)
fruits.splice(1, 0, '샐러리', '양파');
console.log(fruits)

// 잘라진 새로운 배열을 만듦
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);

// 여러 개의 배열을 합침
const arr1 = [1,2,3]