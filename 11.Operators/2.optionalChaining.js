// Optional Chaining Operator

// ES11

let item = { price: 1 };
// const price = item && item.price; -> 간소화 가능
//item이 있으면 price에 접근하고, 없으면 접근하지마!
const price = item?.price;

console.log(price);

// 언제 유익한가?
let obj = { name: '🐶', owner: {name: 'Mike'}};
function printName(obj) {
  // const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}

printName(obj);