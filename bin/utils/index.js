"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showHelp = exports.parseSentence = void 0;
function parseSentence(words) {
    let sentence = "";
    for (var i = 1; i < words.length; i++) {
        sentence = sentence + words[i] + " ";
    }
    return sentence;
}
exports.parseSentence = parseSentence;
function showHelp() {
    console.log(`
    Usage: dssh <slugify> <filename.json>

    Options:
			--version             Show version number.              [boolean]
			--help                Show help.                        [boolean]
  `);
}
exports.showHelp = showHelp;
