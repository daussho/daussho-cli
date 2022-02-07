#! /usr/bin/env node

import yargs from "yargs/yargs";
import { slugifier } from "./app/slugifier";
import { parseSentence, showHelp } from "./utils";

function main() {
  const _argv = yargs(process.argv.slice(2))
    .options({
      //   a: { type: "boolean", default: false },
    })
    .parseSync();

  if (_argv._[0] == null) {
    showHelp();
    return;
  }

  const app = _argv._[0];
  console.log({ app });

  switch (app) {
    case "slugify":
      const str = _argv._[1].toString().split(/\r?\n/);

      slugifier(str);
  }
}

main();
