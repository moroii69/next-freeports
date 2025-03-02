import inquirer from "inquirer";
import { getActivePorts } from "./utils.js";
import { killPorts } from "./index.js";
import chalk from "chalk";

export async function interactiveKill() {
  const { webDevPorts, otherPorts } = getActivePorts();

  // Ask which category the user wants to manage
  const { category } = await inquirer.prompt([
    {
      type: "list",
      name: "category",
      message: "Which type of ports do you want to manage?",
      choices: [
        { name: "🌍 Web Development Ports", value: "webDev" },
        { name: "🛠️ Other Active Ports", value: "other" },
        { name: "❌ Cancel", value: "cancel" }
      ]
    }
  ]);

  if (category === "cancel") {
    console.log(chalk.green("\n✅ Operation cancelled."));
    return;
  }

  const selectedPorts = category === "webDev" ? webDevPorts : otherPorts;

  if (selectedPorts.length === 0) {
    console.log(chalk.green("\n✅ No active ports in this category."));
    return;
  }

  // Show interactive selection
  const { portsToKill } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "portsToKill",
      message: "Select ports to terminate:",
      choices: selectedPorts.map(({ port, pid }) => ({
        name: `Port ${port} (PID: ${pid})`,
        value: { port, pid }
      }))
    }
  ]);

  // Kill selected ports
  killPorts(portsToKill);
}
