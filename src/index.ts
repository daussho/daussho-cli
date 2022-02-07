#! /usr/bin/env node

import yargs from "yargs/yargs";
import { slugifier } from "./app/slugifier";
import { parseSentence, showHelp } from "./utils";

function main() {
  const args = yargs(process.argv.slice(2))
    .options({
      //   a: { type: "boolean", default: false },
    })
    .parseSync();

  const [cmd, param] = args._;

  if (cmd === null) {
    showHelp();
    return;
  }

  console.log({ cmd });

  switch (cmd) {
    case "slugify":
      const stringList = param.toString().split(/\r?\n/);

      slugifier(stringList);
  }
}

main();
