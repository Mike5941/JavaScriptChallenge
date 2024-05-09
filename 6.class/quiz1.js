class Counter {
  #value;
  constructor(startValue) {
    if(isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  increment = () => {
    this.#value++;
  }

  get value() {
    return this.#value;
  }
}

const counter = new Counter(1);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value)