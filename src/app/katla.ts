import { readFileSync } from "fs";

function loadWords() {
  const word = JSON.parse(readFileSync("./data/word.json", "utf8")) as string[];

  const wordArr = word.filter((t) => t.length === 5);
  return wordArr;
}

export function katla(includes: string[], excludes: string[]) {
  const wordArr = loadWords();

  // const includes: string[] = ["rah"];
  // const excludes: string[] = ["k", "u", "s", "d"];

  const guess = wordArr.filter(
    (w) =>
      includes.some((v) => w.includes(v)) &&
      !excludes.some((v) => w.includes(v))
  );

  console.log({ wordArr });
  console.log(guess);
}
