const apple = {
  name: 'apple',
  display: () => {
    console.log(`${this.name}: 🍎`);
  }
}

apple.display()