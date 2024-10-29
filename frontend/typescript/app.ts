function logName(name: string) {
  console.log(name);
}

logName("ash");

let id = 1111;
let ncikname = "kim";
let gender = "male";
let compile = false;

interface Student {
  stdId: number;
  name: string;
  gender: String;
}

enum GenderType {
  "male",
  "female",
}

function getInfo(id: number): Student {
  return {
    stdId: 1,
    name: "a",
    gender: "a",
  };
}

let anyVal: any = 100;
anyVal = 200;

//Array
let numbers: number[] = new Array(1, 2, 3, 4); // 힙 메모리
let strings: string[];
let mixed: (number | string)[] = [1, "a", 2, "b"];

//ReadonlyArray<number> 추가불가능
let readOnlyArray: ReadonlyArray<number> = [1, 2, 3];
//튜플
let tuple: [number, string, boolean] = [1, "a", false];
//Spread
let a = [1, 2, 3];
let b = [4, 5, 6];
let mixedSpread = [...a, ...b]; // [1,2,3,4,5,6]
let stringTo = "abc";
let arrayTo = [...stringTo]; //["a","b","c"]
