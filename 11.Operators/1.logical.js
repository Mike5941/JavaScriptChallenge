// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '😸', owner: 'Mike'};

if (obj1 && obj2) {
  console.log('둘다 true!')
};

if (obj1 || obj2) {
  console.log('둘다 true!');
}

// 조건문 밖에서 쓰면 평가가 단축됨

let result = obj1 && obj2;

console.log(result)
// obj1이 true이고 obj2가 true이니 obj2가 할당됨 (평가가 단축됨)
// { name: '😸', owner: 'Mike' }

// or 연산자는 둘 중 하나만 true여도 되니, obj1만 평가하고 바로 obj1을 할당
result = obj1 || obj2;
console.log(result)
// { name: '🐶' }

// 활용예
// && 조건이 truthy 일 때, 무언가를 해야할 경우
// || 조건이 falshy 일 때, 무언가를 해야할 경우

// 주인이 있는 경우에만 새로운 주인으로 바꿈
function changeOwner(animal) {
  if(!animal.owner) {
    throw new Error('주인이 없어')
  }
  animal.owner = '바뀐 주인!';
}

// 주인이 없는 경우에 새로운 주인으로 만듦
function makeNewOwner(animal) {
  if(animal.owner) {
    throw new Error('주인이 있어')
  }
  animal.owner = '새루운 주인!';
}


obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1)
console.log(obj2)

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1)
console.log(obj2)

// null 또는 undefined인 경우를 확인할 때
let item // = { price: 1 };
// const price = item.price; -> 에러 발생
const price = item && item.price; // 에러 발생 방지
console.log(price);

// 기본값을 설정
// default parameter는 전달하지 않거나, undefiend 설정 됨
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}
print();

// default parameter의 경우 아래 값들이 그대로 전달됨
// falshy한 값들을 할당하고 싶은 경우 ||을 사용: (0, -0, null, undefined, '')
print(undefined);
print(null);
print(0);