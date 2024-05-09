// Loop Statement
// for(변수 선언문; 조건식; 증감식)

for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue;
    console.log('i가 드디어 10이 되었다!');
    break;
  }
  console.log(i);
}