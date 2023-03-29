#!/usr/bin/env node
const { program } = require("commander");


program.option("-t, --typescript", "生成 TypeScript 版本");
program.option("-y, --yarn", "使用 yarn 初始化项目");
program.option("-td, --TDesign", "使用 TDesign 组件初始化项目");


program.usage(
  "\n  tea init <kit-name> <app-name> [options]\n" +
  "\n  初始化一个 Tea 项目\n" +
  "\n  <kit-name>  app, sdk 或其他自定义模板"
);
program.parse(process.argv);

const run = () =>
  runGenerator({
    referenceUrl:
      "http://tapd.oa.com/tcp_access/markdown_wikis/0#1020399462010989087",
  });

run();