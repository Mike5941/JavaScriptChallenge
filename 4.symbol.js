// Symbol
// 유일한 키를 생성할 수 있음
const map = new Map();

// 다른 변수지만 key 값이 같으므로 key2를 불러와도 key1의 value가 불러와진다.
// const key1 = "key";
// const key2 = "key";

// Symbol로 생성할 경우 이름이 같아도 다른 변수로 인식된다.
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, "Hello");

console.log(map.get(key2));
console.log(key1 === key2);

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 Symbol Registry(Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

// keyFor은 전역 레지스트리에서만 접근할 수 있다.
console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(k2));

// Symbol은 Map에서 유용하게 사용할 수 있다.
// • map에서 key를 이용할 때, 문자열을 사용하면 동일한 key를 통해 접속이 가능하다
// • Class or module 내부에서 생성된 Symbol을 이용해서만 Map에 있는 값을 읽어와야 한다면,
//   보안을 조금 더 높이고 싶을 때, 유일한 키를 만들어야 할 때, 문자열보다는 Symbol을 이용하는게
//   unique함을 보장한다.

const obj = {[k1]: 'Hello', [Symbol('key')]: 1};
console.log(obj[k1]);