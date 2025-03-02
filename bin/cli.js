#!/usr/bin/env node
import { Command } from "commander";
import { scanPorts, killPortByNumber } from "../src/index.js";
import { interactiveKill } from "../src/interactive.js";
import chalk from "chalk";

const program = new Command();

program.version("1.0.0").description("🚀 Next.js & Web Dev Port Manager");

// 🔍 List active ports
program
  .command("list")
  .description("List all active ports with separation of web development and other ports.")
  .action(() => {
    console.log(chalk.cyan.bold("\n📡 Scanning active ports..."));
    scanPorts();
  });

// ❌ Interactive kill
program
  .command("kill")
  .description("Interactively select ports to kill")
  .action(() => {
    interactiveKill();
  });

// 🚀 Kill a specific port via --port <number>
program
  .option("--port <port_number>", "Kill a specific port")
  .action((options) => {
    if (options.port) {
      killPortByNumber(options.port);
    }
  });

program.parse(process.argv);
