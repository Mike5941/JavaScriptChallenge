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
