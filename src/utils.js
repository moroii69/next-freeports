import { execSync } from "child_process";

// 🛠️ Common web development ports  
const WEB_DEV_PORTS = new Set([
  // Next.js, React, Vue, Angular, Svelte, Remix  
  3000, 3001, 3002, 3003, 3004, 3005, 5173, 5174, 5175,  
  // Express.js, Django, Flask, Rails, Laravel  
  8000, 8001, 8080, 8081, 5000, 5001, 4000,  
  // PostgreSQL, MySQL, Redis, MongoDB  
  5432, 3306, 27017, 6379,  
  // WebSockets, API Gateways  
  9000, 9001, 1883  
]);

// 🛠️ Get command based on OS  
export function getCommand() {
  return process.platform === "win32"
    ? "netstat -ano | findstr LISTENING"
    : "lsof -i -P -n | grep LISTEN";
}

// 🛠️ Parse port & process info  
export function parsePorts(output) {
  const regex = /:(\d+).*?(\d+)$/gm;
  let webDevPorts = [];
  let otherPorts = [];

  let match;
  while ((match = regex.exec(output)) !== null) {
    const port = parseInt(match[1], 10);
    const pid = match[2];

    if (WEB_DEV_PORTS.has(port)) {
      webDevPorts.push({ port, pid });
    } else {
      otherPorts.push({ port, pid });
    }
  }

  return { webDevPorts, otherPorts };
}

// 🛠️ Fetch active ports  
export function getActivePorts() {
  try {
    const output = execSync(getCommand(), { encoding: "utf-8" });
    return parsePorts(output);
  } catch (error) {
    return { webDevPorts: [], otherPorts: [] };
  }
}
