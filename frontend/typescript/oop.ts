//직원 정보

class Employee {
  // private _empName: string;
  // public age: number;
  // protected empJob: string;

  constructor(
    private _empName: string,
    private _age: number,
    private _empJob: string
  ) {
    // this._empName = empName;
    // this.age = age;
    // this.empJob = empJob;
  }
  //getter
  get empName() {
    return this._empName;
  }
  set empName(name: string) {
    this._empName = name;
  }

  printEmp = (): void => {
    console.log(`${this.empName}의 나이는 ${this.age} 직업은 ${this.empJob}`);
  };
}

let employee1 = new Employee("x", 20, "개발자");

employee1.empName = "lee";
employee1.printEmp();
