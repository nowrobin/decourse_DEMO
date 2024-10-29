//직원 정보

class Employee {
  empName: string;
  age: number;
  empJob: string;
  constructor(empName: string, age: number, empJob: string) {
    this.empName = empName;
    this.age = age;
    this.empJob = empJob;
  }
  printEmp = (): void => {
    console.log(`${this.empName}의 나이는 ${this.age} 직업은 ${this.empJob}`);
  };
}

let employee1 = new Employee("x", 20, "개발자");

employee1.printEmp();
