// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키워로 교체하는 함수 만들기
// 단, 주어진 배열을 수정하지 않도록 한다.
// input: ['🍌', '🍊', '🍓', '🍊']
// output: ['🍌', '🥝', '🍇', '🥝']

//나의 풀이
// 오렌지를 키위로 변경 해야함.
// Array를 순회하며 if = 🍊 경우, 🥝로 변경
const quiz1 = ['🍌', '🍊', '🍓', '🍊'];
const quiz1Solved = []
for(i=0; i < quiz1.length; i++) {
  if(quiz1[i] === '🍊') {
    quiz1Solved.push("🥝");
  } else {
    quiz1Solved.push(quiz1[i]);
  }
}

// 고차 함수 활용: map 함수 활용
function replace(array) {
  const result = quiz1.map(item => item === "🍊" ? "🥝" : item);
  console.log(result);
}

replace(quiz1);


/********************************************************************/

// 퀴즈2:
// 배열과 특정한 요소를 전달받아, 배열안에  그 요소가 몇 개나 있는지 카운트 하는 함수 만들기
// input: ['🍌', '🥝', '🍇', '🥝']

/* 나의 풀이
* 1. array와 카운트할 요소를 받는 function 생성
* 2. 전달받은 array를 순회하며, 과일 수를 셈*/

const quiz2 = ['🍌', '🥝', '🍇', '🥝'];
function countFruit (fruits, fruit) {
  let count = 0;
  for(let i=0; i < fruits.length; i++){
    if (fruits[i] === fruit) {
      count ++;
    }
  }
  return count;
}

console.log(countFruit(quiz2, '🥝'));

/* Clean Code ver. */
function countFruit(fruits, fruit) {
  return fruits.filter(f => f === fruit).length;
}

/* quiz3. 배열1, 배열2 두개의 배열을 전달받아,
* 배열1 아이템 중, 배열 2에 존재하는 아이템만 담고 있는 배열 반환 */
/* input: ['🍌', '🥝', '🍇']. ['🍌', '🍓', '🍇', '🍓']
* output: ['🍌', '🍇'] */

/* 나의 풀이
* 1. 배열 두 개를 인자로 받는 함수 생성 */
const arr1 = ['🍌', '🥝', '🍇']
const arr2 = ['🍌', '🍓', '🍇', '🍓']

/* arr1의 요소가 arr2에 포함되어 있다면 새로운 배열에 할당한다.*/
const result = arr1.filter(item => arr2.includes(item) ? item : console.log("No Match"));

console.log(result)