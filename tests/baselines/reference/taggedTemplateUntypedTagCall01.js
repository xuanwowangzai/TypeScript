//// [taggedTemplateUntypedTagCall01.ts]
var tag: Function;
tag `Hello world!`;

//// [taggedTemplateUntypedTagCall01.js]
var __getTemplateObject = (this && this.__getTemplateObject) || function (cooked, raw) {
    if (Object.freeze && Object.defineProperty) {
        return Object.freeze(Object.defineProperty(cooked, "raw", { value: Object.freeze(raw) }));
    }
    cooked.raw = raw;
    return cooked;
};
var tag;
tag(_a || (_a = __getTemplateObject(["Hello world!"], ["Hello world!"])));
var _a;
