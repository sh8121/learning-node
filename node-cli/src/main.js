// @ts-check
/* eslint-disable no-console */

const { program } = require("commander");

program.version("0.0.1");

program
  .command("list-bugs")
  .description("List Issues with bug label")
  .action(async () => {
    console.log("List bugs!");
  });

program
  .command("check-prs")
  .description("Check Pull Request status")
  .action(async () => {
    console.log("Check PRs!");
  });

program.parseAsync();
