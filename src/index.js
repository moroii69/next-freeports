import { execSync } from "child_process";
import { getActivePorts } from "./utils.js";
import chalk from "chalk";

// ✅ List active ports
export function scanPorts() {
  const { webDevPorts, otherPorts } = getActivePorts();

  console.log(chalk.blue.bold("\n🔍 Active Web Development Ports:"));
  if (webDevPorts.length === 0) {
    console.log(chalk.green("✅ No active web development ports found!"));
  } else {
    console.table(webDevPorts.map(({ port, pid }) => ({ Port: port, PID: pid })));
  }

  console.log(chalk.red.bold("\n🛑 Other Active Ports:"));
  if (otherPorts.length === 0) {
    console.log(chalk.green("✅ No non-web development ports found!"));
  } else {
    console.table(otherPorts.map(({ port, pid }) => ({ Port: port, PID: pid })));
  }
}

// ❌ Kill selected ports
export function killPorts(selectedPorts) {
  if (selectedPorts.length === 0) {
    console.log(chalk.green("\n✅ No ports selected for termination."));
    return;
  }

  selectedPorts.forEach(({ port, pid }) => {
    try {
      if (process.platform === "win32") {
        execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
      } else {
        execSync(`kill -9 ${pid}`, { stdio: "ignore" });
      }
      console.log(chalk.green(`✅ Successfully killed process on port ${port} (PID: ${pid})`));
    } catch (error) {
      console.error(chalk.red(`❌ Failed to kill port ${port} (PID: ${pid}): ${error.message}`));
    }
  });
}

// 🔥 Kill a specific port directly via --port <port_number>
export function killPortByNumber(portNumber) {
  const { webDevPorts, otherPorts } = getActivePorts();
  const allPorts = [...webDevPorts, ...otherPorts];
  const targetPort = allPorts.find((p) => p.port === parseInt(portNumber));

  if (!targetPort) {
    console.log(chalk.yellow(`⚠️ No active process found on port ${portNumber}.`));
    return;
  }

  killPorts([targetPort]);
}
