// static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS=4
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 레벨의 메소드
  static makeRandomFruit() {
    return new Fruit('banana', '🍌')
  }
  static display = () => {
    console.log(`${this.name} ${this.emoji}`);
  }
}

Fruit.display();
const apple = new Fruit('apple', '🍎')

const banana = Fruit.makeRandomFruit();
console.log(banana)
console.log(<Fruit className="MAX_FRUITS"></Fruit>)