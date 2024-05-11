// Set
const set = new Set([1, 2, 3]);

console.log(set)
console.log(set.size);
// 요소가 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach(item => console.log(item));
for(const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6); // 중복이 안된다.
console.log(set)

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 객체도 가능

const obj1 = { name: '🍎', price: 8 };
const obj2 ={ name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs)

// 퀴즈: obj1을 변경 후 objs Set에 추가하면 요소가 2 or 3?
obj1.price = 10;
objs.add(obj1);
console.log(objs) // obj는 Shallow Copy

// 퀴즈
const obj3 = { name: '🍌', price: 5 };
// 메모리 주소가 다르므로 요소가 3개가 된다
objs.add(obj3);
console.log(objs);

// obj3만 업데이트 된다.
obj3.price = 8;
console.log(objs)