function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

function doubleAndLog(num) {
  console.log(num * 2);
}

iterate(4, (num) => console.log(num));
iterate(10, doubleAndLog)

setTimeout(() => {
  console.log('1초뒤에 실행될거에요');
}, 3000);