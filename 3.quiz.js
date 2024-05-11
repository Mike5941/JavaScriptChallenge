// 주어진 배열에서 중복을 제거하라
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍊"];

const set = new Set(fruits);
console.log(set)

function removeDuplicates(array) {
  return [...new Set(array)];
}

console.log(removeDuplicates(fruits));


const set1= new Set([1, 2, 3, 4, 5]);
const set2 = new Set ([1, 2, 3]);

function findIntersection (set1, set2) {
  const array = [...set1].filter(item => set2.has(item));
  // return new Set(array);
  return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(findIntersection(set1, set2));