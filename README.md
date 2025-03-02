# next-freeports
An intelligent port manager for Next.js and web developers.

``next-freeports`` is a **powerful CLI tool** that helps developers manage ports effectively. It identifies web development-related ports, lists active processes, and allows interactive or direct termination of ports.

💡 **No installation needed!** Just run it via ``npx`` anytime.  
✨ **Want faster access?** Install it globally using ``npm i -g next-freeports``.

---

## 📌 Features

✔️ **Scan Active Ports** - Lists all occupied ports in a categorized format.  
✔️ **Web Development Focus** - Detects and highlights common dev ports.  
✔️ **Interactive Port Killing** - Allows users to select which ports to terminate.  
✔️ **Instant Port Termination** - Quickly kill a port via ``--port`` flag.  
✔️ **Aliases for Convenience** - Use ``npx next-freeports`` or short forms like ``npx kp`` and ``npx killport``.  

---

## 📦 Quick Usage

No need to install! Just run:

`` npx next-freeports list ``

or use shorter aliases:

`` npx kp list ``  
`` npx killport list ``

---

## 🛠 Commands Reference

| Command | Description |
|---------|-------------|
| ``npx next-freeports list`` | List all active ports categorized into web development and system ports. |
| ``npx kp list`` | Alias for listing active ports. |
| ``npx killport list`` | Another alias for listing ports. |
| ``npx next-freeports kill`` | Opens an interactive mode to select ports to terminate. |
| ``npx kp kill`` | Alias for interactive port killing. |
| ``npx killport kill`` | Another alias for interactive port termination. |
| ``npx next-freeports kill --port 3000`` | Instantly kills a specific port (example: ``3000``). |
| ``npx killport kill --port 8080`` | Alias for killing a specific port. |

---

## 🔄 Aliases

To save time, you can also use:  

`` npx kp list ``  
`` npx killport list ``  
`` npx kp kill ``  
`` npx killport kill --port 8080 ``

These aliases work exactly like ``npx next-freeports``.

---

## ❓ How Does ``npx`` Work?

### **1️⃣ Do I Need to Install Next-Freeports?**
No! You can **directly run**:

`` npx next-freeports list ``

``npx`` will **automatically fetch the latest version from npm** and execute it.

### **2️⃣ Why Does ``npx`` Ask to Install?**
If ``next-freeports`` is not **globally installed**, ``npx`` downloads it **temporarily**. You’ll see:

Need to install the following packages: next-freeports@latest

Just **press ``y`` to continue**, and ``npx`` will cache it for future use.

### **3️⃣ Want Faster Execution? Install Globally**
If you use ``next-freeports`` frequently, avoid repeated downloads by installing globally:

`` npm i -g next-freeports ``

Now, ``npx next-freeports list`` will run **instantly** without re-downloading.

---

## 📜 License

MIT License © 2025 [Mohammed Ufraan](https://github.com/moroii69)

---

## 🛠 Troubleshooting

❌ **Command not found?**  
✅ Run ``npm link`` inside the project directory for local testing.

❌ **Need to uninstall?**  
✅ No need! Since we use ``npx``, it’s never installed permanently.

