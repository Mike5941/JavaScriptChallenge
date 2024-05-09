// 조건에 맞는(callback 함수) 아이템을 찾을 때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🥝', price: 2 };
const item2 = { name: '🍌', price: 3 };
const item3 = { name: '🍓', price: 4 };
const item4 = { name: '🍓', price: 5 };

const products = [item1, item2, item3, item4];
let result = products.find(value => value.name === '🥝');
console.log(result);

// findIndex: 제일 먼저 조건에 맞는 item의 index를 반환
result = products.findIndex(value => value.name === '🍌');
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수에)에 맞는지 확인
result = products.some(item => item.name === '🍓');
console.log(result);

// 배열의 아이템들이 전부 조건에 맞는지 확인
result = products.every(item => item.name === '🍓' );
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로
result = products.filter(item => item.name === '🍌')
console.log(result)

console.clear()

// Map 배열의 item들을 각각 다른 item으로 mapping 하여, 새로운 배열로 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map(item => item *  2);
console.log(result);

// FlatMap: 중첩된 배열을 펴줌
result = nums.map(item => [1,2]);
console.log(result);
result = nums.flatMap(item => [1,2,]);
console.log(result)

// sort 배열의 아이템들을 정렬
// 문자열 형태의 배열을 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const numbers = [0, 5, 3, 1, 10, 4];
numbers.sort();
console.log(numbers)

numbers.sort((a, b) => a - b);
console.log(numbers)

// reduce 배열의 요소들을 더하여 값을 하나로
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result)

