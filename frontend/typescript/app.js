var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function logName(name) {
    console.log(name);
}
logName("ash");
var id = 1111;
var ncikname = "kim";
var gender = "male";
var compile = false;
var GenderType;
(function (GenderType) {
    GenderType[GenderType["male"] = 0] = "male";
    GenderType[GenderType["female"] = 1] = "female";
})(GenderType || (GenderType = {}));
function getInfo(id) {
    return {
        stdId: 1,
        name: "a",
        gender: "a",
    };
}
var anyVal = 100;
anyVal = 200;
//Array
var numbers = new Array(1, 2, 3, 4); // 힙 메모리
var strings;
var mixed = [1, "a", 2, "b"];
//ReadonlyArray<number> 추가불가능
var readOnlyArray = [1, 2, 3];
//튜플
var tuple = [1, "a", false];
//Spread
var a = [1, 2, 3];
var b = [4, 5, 6];
var mixedSpread = __spreadArray(__spreadArray([], a, true), b, true); // [1,2,3,4,5,6]
var stringTo = "abc";
var arrayTo = __spreadArray([], stringTo, true); //["a","b","c"]
