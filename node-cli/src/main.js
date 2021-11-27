// @ts-check
/* eslint-disable no-console */

require("dotenv").config();
const { program } = require("commander");
const { Octokit } = require("octokit");

const { GITHUB_ACCESS_TOKEN } = process.env;

program.version("0.0.1");

const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

program
  .command("me")
  .description("Check My Profile")
  .action(async () => {
    const {
      data: { login },
    } = await octokit.rest.users.getAuthenticated();
    console.log(`Hello, ${login}`);
  });

program
  .command("list-bugs")
  .description("List Issues with bug label")
  .action(async () => {
    const result = await octokit.rest.issues.listForRepo({
      owner: "sh8121",
      repo: "learning-node",
    });

    const issuesWithBugLabel = result.data.filter(
      (issue) =>
        issue.labels.find(
          (label) => typeof label === "object" && label.name === "bug"
        ) !== undefined
    );

    const output = issuesWithBugLabel.map((issue) => ({
      title: issue.title,
      number: issue.number,
    }));

    console.log(output);
  });

program
  .command("check-prs")
  .description("Check Pull Request status")
  .action(async () => {
    console.log("Check PRs!");
  });

program.parseAsync();
