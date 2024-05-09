// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행

let isActive = true
let num = 0;

while(isActive) {
  console.log(num);
  num++;
}


do {
  console.log('do-while');
} while (isActive) {
  console.log(num);
}