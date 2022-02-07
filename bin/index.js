#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs/yargs"));
const slugifier_1 = require("./app/slugifier");
const utils_1 = require("./utils");
function main() {
    const _argv = (0, yargs_1.default)(process.argv.slice(2))
        .options({
    //   a: { type: "boolean", default: false },
    })
        .parseSync();
    if (_argv._[0] == null) {
        (0, utils_1.showHelp)();
        return;
    }
    const app = _argv._[0];
    console.log({ app });
    switch (app) {
        case "slugify":
            const str = (0, utils_1.parseSentence)(_argv._);
            (0, slugifier_1.slugifier)(str);
    }
}
main();
