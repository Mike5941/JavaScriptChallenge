// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// JS에서 복사할때는 항상 얕은 복사가 이루어진다.
// Array.from, concat, slice, spread(...). Object.assign
const pizza = { name: '🍕', price: 2, owner: { name: 'Ellie'} };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
// 배열을 복사
const store2 = Array.from(store1);

store2.push(sushi); // 배열 2에만 sushi 추가
console.log('store1', store1);
console.log('store2', store2);

// if 피자 가격이 인상되면 store1과 store2에 어떤 일이 발생할까?
pizza.price = 4;

console.log('store1', store1);
console.log('store2', store2);

// 두 배열의 피자 가격이 인상됐다. 이것을 Shallow Copy라고 한다.
// 배열이 만들어질때 Object가 새로 만들어지는 것이 아니라, 만들어진 주소를 가리키고 있다.
