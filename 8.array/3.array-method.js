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
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = arr1.concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(arr3);

// 배열 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩된 배열을 펼치기 (단계 입력)
let arr = [
  [1,2,3], [4, [5,6]],
];
arr = arr.flat(2)

// 특정한 값으로 배열을 채우기
arr.fill('s', 1, 3);
console.log(arr);
arr.fill(0)
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ')
console.log(text);

// 배열 자체를 수정하는지, 반환된 값으로 새로운 배열을 반환하는지가 포인트
// parameter를 전달하는 경우 어떤 조합으로 사용할 수 있는지
