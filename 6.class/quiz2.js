// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
  /* Employee Class 생성 후, 정직원 파트타임 직원 상속
  * */
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
  // constructor(이름, 부서이름, 한달 근무 시간)
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
  // super() 한달 근무 시간 x 정직원, 한근시 x 8000;
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTime extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTime.PAY_RATE);
  }
}

class PartTime extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTime.PAY_RATE);
  }
}

const 원승연 = new FullTime("원승연", "개발", 102);
const bob = new PartTime("bob", "인사", 20);

console.log(원승연.calculatePay());