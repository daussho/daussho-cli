"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugifier = void 0;
const slugify_1 = __importDefault(require("slugify"));
function slugifier(list) {
    let res = {};
    list.forEach((str) => {
        res = Object.assign(Object.assign({}, res), { [generateSlug(str)]: str });
    });
    console.log({ res });
}
exports.slugifier = slugifier;
function generateSlug(str) {
    const result = (0, slugify_1.default)(str, {
        replacement: "-",
        remove: undefined,
        lower: true,
        strict: true,
        locale: "vi",
        trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });
    return result;
}
