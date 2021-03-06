#! /usr/bin/env node

import yargs from "yargs/yargs";
import { katla } from "./app/katla";
import { slugifier } from "./app/slugifier";
import { showHelp } from "./utils";
import isEmpty from "lodash/isEmpty";

function main() {
  const args = yargs(process.argv.slice(2))
    .options({
      //   a: { type: "boolean", default: false },
    })
    .parseSync();

  const [cmd, ...params] = args._;

  if (isEmpty(cmd)) {
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
      let { includes, excludes } = args;

      let _includes: string[] = [];
      if ((includes as string).length > 0) {
        _includes = (includes as string).split(",");
      }

      let _excludes: string[] = [];
      if ((excludes as string).length > 0) {
        _excludes = (excludes as string).split(",");
      }

      katla(_includes, _excludes);
      break;
  }
}

main();
