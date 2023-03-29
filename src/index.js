#!/usr/bin/env node
const colors = require("colors");
const { program } = require("commander");


program.command("login <token>", "在本地登记开发者身份");
program.command(
  "init <kit-name> <app-name>",
  "使用脚手架创建一个 Tea 应用开发模板"
);
program.command("dev", "启动本地开发");
program.command("build", "构建项目");
program.command("commit", "部署已构建文件到 CDN，并提交版本");
program.command("scan", "扫描国际化词条文件");
program.command("dict [command]", "拉取/提交词条文件");
program.command("version", "查看 Tea 相关模块版本信息");
program.command("update", "更新 Tea 相关模块");

program.on("--help", () =>
  console.log(
    [
      "",
      "更多帮助，请参考 Tea 文档：",
      colors.blue.underline(
        "http://tapd.oa.com/tcp_access/markdown_wikis/#1020399462010376281"
      ),
      "",
    ].join("\n")
  )
);

program.parse();