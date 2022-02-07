#! /usr/bin/env node

import yargs from "yargs/yargs";
import { katla } from "./app/katla";
import { slugifier } from "./app/slugifier";
import { showHelp } from "./utils";

function main() {
  const args = yargs(process.argv.slice(2))
    .options({
      //   a: { type: "boolean", default: false },
    })
    .parseSync();

  const [cmd, ...params] = args._;

  if (cmd === null) {
    showHelp();
    return;
  }

  console.log({ cmd });

  switch (cmd.toString()) {
    case "slugify":
      const stringList = params[0].toString().split(/\r?\n/);

      slugifier(stringList);
      break;
    case "katla":
      const { includes, excludes } = args;
      const _includes = (includes as string).split(",");
      const _excludes = (excludes as string).split(",");

      katla(_includes, _excludes);
      break;
  }
}

main();
