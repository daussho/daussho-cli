export function parseSentence(words: (string | number)[]) {
  let sentence = "";
  for (var i = 1; i < words.length; i++) {
    sentence = sentence + words[i] + " ";
  }

  return sentence;
}

export function showHelp() {
  console.log(`
    Usage: dssh <slugify> <filename.json>

    Options:
			--version             Show version number.              [boolean]
			--help                Show help.                        [boolean]
  `);
}
