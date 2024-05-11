// Spread 연산자
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 펼쳐질 수 있다.
// func(...9.iterable)
// [...9.iterable]
// { ...object }
// ECMAScript 2018
function add (a, b, c) {
  return a + b + c;

}

const nums = [1,2,3];
console.log(add(nums[0], nums[1], nums[2])); // 불편
console.log(add(...nums)); // 편안


const fruits1 = ["🍏", "🥝"];
const fruits2 = ['🍓', '🍌']
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, '🍓', ...fruits2];
console.log(arr);

//Object
const ellie = {
  name: 'Mike',
  age: 30,
  home: { address: 'home'}
};

const updated = {
  ...ellie,
  job: 's/w engineer',
}

console.log(updated);
console.log(ellie)
