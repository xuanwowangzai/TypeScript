//// [templateStringsArrayTypeDefinedInES5Mode.ts]
class TemplateStringsArray {
}

function f(x: TemplateStringsArray, y: number, z: number) {
}

f({}, 10, 10);

f `abcdef${ 1234 }${ 5678 }ghijkl`;

//// [templateStringsArrayTypeDefinedInES5Mode.js]
var __getTemplateObject = (this && this.__getTemplateObject) || function (cooked, raw) {
    if (Object.freeze && Object.defineProperty) {
        return Object.freeze(Object.defineProperty(cooked, "raw", { value: Object.freeze(raw) }));
    }
    cooked.raw = raw;
    return cooked;
};
var TemplateStringsArray = /** @class */ (function () {
    function TemplateStringsArray() {
    }
    return TemplateStringsArray;
}());
function f(x, y, z) {
}
f({}, 10, 10);
f(_a || (_a = __getTemplateObject(["abcdef", "", "ghijkl"], ["abcdef", "", "ghijkl"])), 1234, 5678);
var _a;
