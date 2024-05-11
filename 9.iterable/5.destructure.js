// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits = ['🍏','🥝','🍓','🍌'];
console.log(fruits[0]);
// 더 의미있는 이름을 지을 수 있다.
const [first, second, ...others] = fruits;
console.log(first)
console.log(second)
console.log(...others)

const point = [1, 2];
// const [x, y] = point;
const [y, x, z = 0] = point
console.log(x);
console.log(y);

function createEmoji() {
  return ['apple', '🍎'];
}

/*
const array = createEmoji();
console.log(array);
*/
// 더 의미 있는 이름 지정 가능
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const mike = { name: 'Mike', age: 30, job: 'devops Engineer'};
// function display(person) { // person이 반복됨 구조 분해를 통해 받아올 수 있다.
//   console.log('이름', person.name);
//   console.log('나이', person.age);
//   console.log('직업', person.job);
// }

function display({name, age, job}) {
  console.log('이름', name);
  console.log('나이', age);
  console.log("직업", job);
}

display(mike)

const { name, age, job: occupation, pet = '강아지' } = mike;
console.log(age)
console.log(occupation)
console.log(pet)

const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: {color}}) {
  console.log(color);
}

changeColor(prop);