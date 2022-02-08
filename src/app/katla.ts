import { readFileSync } from "fs";

function loadWords() {
  const word = JSON.parse(readFileSync("./data/word.json", "utf8")) as string[];

  const wordArr = word.filter((t) => t.length === 5);
  return wordArr;
}

export function katla(includes: string[], excludes: string[]) {
  const wordArr = loadWords();

  const guess = wordArr.filter((w) => {
    let res = true;

    if (includes.length > 0) {
      res = res && includes.every((v) => w.includes(v));
    }

    if (excludes.length > 0) {
      res = res && !excludes.some((v) => w.includes(v));
    }

    return res;
  });

  console.log({
    guess,
    total: guess.length,
  });
}
