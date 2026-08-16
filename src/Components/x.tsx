import { useState } from "react";

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);

  const handleCommand = (e) => {
    if (e.key !== "Enter") return;

    const cmd = command.trim();

    if (!cmd) return;

    let output = "";

    if (cmd === "help") {
      output = "Available commands: help, about, projects, clear";
    } else if (cmd === "about") {
      output = "Frontend developer passionate about building useful products.";
    } else if (cmd === "projects") {
      output = "ProCare-Web\nMamaWatch\nPortfolio";
    } else if (cmd === "clear") {
      setHistory([]);
      setCommand("");
      return;
    } else {
      output = `Command not found: ${cmd}`;
    }

 

    setCommand("");
  };

  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-black text-green-400 shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-2 bg-zinc-900 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {/* Terminal body */}
      <div className="min-h-[400px] p-5 font-mono text-sm">
        <div>Welcome to my terminal 👋</div>
        <div>Type <span className="text-white">help</span> to get started.</div>

        {history.map((item, index) => (
          <div key={index} className="mt-4">
            <div>
              <span className="text-cyan-400">$</span>{" "}
              {item.command}
            </div>

            <pre className="mt-1 whitespace-pre-wrap text-gray-300">
              {item.output}
            </pre>
          </div>
        ))}

        {/* Input */}
        <div className="mt-4 flex items-center">
          <span className="mr-2 text-cyan-400">$</span>

          <input
            autoFocus
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent outline-none"
            placeholder="type a command..."
          />
        </div>
      </div>
    </div>
  );
}