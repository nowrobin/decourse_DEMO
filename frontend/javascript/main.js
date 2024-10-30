// console.log(a);
// try {
//   console.log(b);
//   console.log(c);
// } catch (err) {}
// var a = 1;
// const b = 2;
// let c;

//일급객체 실습

// 실제 매개변수
function foo1(arg) {
  arg();
}
function bar1() {
  console.log("bar1");
}
foo1(bar1);

//함수의 반환 값
function foo2(arg) {
  return arg;
}
function bar2() {
  console.log("bar2");
}
foo2(bar2)();

//
function foo3(arg) {
  arg();
}
function bar3() {
  console.log("bar3");
}
foo3(bar3);

const foo4 = function (arg) {
  return arg;
};
foo4(1);

//기본값 매개변수
function foo5(arg = 1) {
  console.log(arg);
}
foo5();

//rest 매개변수
function foo6(arg, ...rest) {
  console.log(rest);
  console.log(arguments);
}
foo6(1, 2, 3, 4, 5);

//함수 선언문
function foo7() {
  console.log("foo7");
}
foo7();

//함수 표현식
const foo8 = function () {
  console.log("foo8");
};
foo8();

//생성자 함수
const foo9 = new Function(`console.log('foo9')`);

//화살표 함수 표현식
const foo10 = () => {
  console.log("foo10");
};

//즉시 실행함수
(function foo11() {
  console.log("foo11");
})();

//재귀함수
function foo12(arg) {
  console.log(arg);
  if (arg == 5) return;
  foo12(arg + 1);
}
foo12(1);

//중첩함수 내부 함수
function foo13(arg) {
  function bar() {
    console.log(arg);
  }
  bar();
}
foo13(1);

//콜백함수
function foo14(arg) {
  arg();
}
foo14(() => {
  console.log("foo14");
});
