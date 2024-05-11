// key와 값으로 이루어져 있고, key의 값은 유일하다.
// object와 유사
const map = new Map([
  ["key1", "🍎"],
  ["key2", "🍌"],
]);

console.log(map);

// 사이즈 확인
console.log(map.size);
// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key5'));
// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
// key와 value 값을 모두 받아옴
console.log(map.entries())
// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key3'));
// 추가
map.set('key3', '🥝');
console.log(map)
// 삭제
map.delete('key3');
console.log(map)
// 전부 삭제
map.clear();

// object와의 큰 차이점
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
  [key]: milk,
};

// obj와 map은 사용할 수 있는 함수가 다르다
// • map이 이 함수가 더 많고 순회가 가능
// •
//
console.log(obj)
const map2 = new Map([[key, milk]]);
console.log(map2);
// obj는 key값으로 동적으로 접근 가능
//
console.log(obj[key])
console.log(map2[key]) // undefined
console.log(map2.get(key)); // get()을 통해 값을 가져옴