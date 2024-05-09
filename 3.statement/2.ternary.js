// 삼항 조건 연산자 Ternary Operator
// 조건식 ? true : false

let fruit = 'orange';
if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('🍊');
}

fruit === 'apple' ? console.log('🍎') : console.log('🍊')

let emoji = fruit === 'apple' ? '🍎' : '🍊';
console.log(emoji);