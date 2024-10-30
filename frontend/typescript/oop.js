//직원 정보
var Employee = /** @class */ (function () {
    // private _empName: string;
    // public age: number;
    // protected empJob: string;
    function Employee(_empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log("".concat(_this.empName, "\uC758 \uB098\uC774\uB294 ").concat(_this._age, " \uC9C1\uC5C5\uC740 ").concat(_this._empJob));
        };
        // this._empName = empName;
        // this.age = age;
        // this.empJob = empJob;
    }
    Object.defineProperty(Employee.prototype, "empName", {
        //getter
        get: function () {
            return this._empName;
        },
        set: function (name) {
            this._empName = name;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee("x", 20, "개발자");
employee1.empName = "lee";
employee1.printEmp();
