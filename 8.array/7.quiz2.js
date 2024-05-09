/* 퀴즈: 5이상의 숫자들의 평균 */

const nums = [10, 10, 10, 10, 10];

const result = nums
  .filter((num) => num > 5)
  .reduce((a, b, _, array) => a + b / array.length, 0);
console.log(result)

