import { useEffect, useRef, useState } from "react";

/**
 * TerminalHero
 * A hero section styled as a working terminal window, with a real,
 * interactive command line (help, ls, cd, cat, open, whoami, clear, sudo, echo).
 *
 * Colors blend dynamically with the site's theme variables (--card-color, --text-color, --special-color #00abf0).
 */

const SECTIONS = [
  "about",
  "skills",
  "projects",
  "opensource",
  "writing",
  "experience",
  "contact",
] as const;

const LINKS: Record<string, string> = {
  github: "https://github.com/agigibairene",
  linkedin: "https://www.linkedin.com/in/irene-agigiba-476a39214/",
  email: "mailto:agigibaakawin@gmail.com",
};

type LogLine = {
  id: number;
  text: string;
  kind: "echo" | "out" | "ok" | "err";
};

export default function TerminalHero() {
  const [typedName, setTypedName] = useState("");
  const [path, setPath] = useState("~");
  const [input, setInput] = useState("");
  const [log, setLog] = useState<LogLine[]>([]);
  const historyRef = useRef<string[]>([]);
  const histIndexRef = useRef(0);
  const logIdRef = useRef(0);
  const logEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resumeLinkRef = useRef<HTMLAnchorElement>(null);

  // Typewriter effect for the name
  useEffect(() => {
    const full = "Irene Akawin Agigiba";
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTypedName(full.slice(0, i));
      if (i >= full.length) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ block: "nearest" });
  }, [log]);

  function print(text: string, kind: LogLine["kind"] = "out") {
    logIdRef.current += 1;
    setLog((prev) => [...prev, { id: logIdRef.current, text, kind }]);
  }

  function echoCommand(cmd: string) {
    logIdRef.current += 1;
    setLog((prev) => [
      ...prev,
      { id: logIdRef.current, text: `irene-akawin@dev ${path} % ${cmd}`, kind: "echo" },
    ]);
  }

  function run(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;
    echoCommand(cmd);
    historyRef.current.push(cmd);
    histIndexRef.current = historyRef.current.length;

    const [name, ...rest] = cmd.split(/\s+/);
    const arg = rest.join(" ");

    switch (name!.toLowerCase()) {
      case "help":
        print("available commands:");
        print("  pwd                 print working directory");
        print("  ls                   list sections");
        print("  cd <section>         jump to a section (e.g. cd projects)");
        print("  cat resume.txt       open my resume");
        print("  open <github|linkedin|email>   open a link");
        print("  whoami               who this site belongs to");
        print("  clear                clear this terminal");
        break;
      case "pwd":
        print(
          path === "~"
            ? "/home/irene/portfolio"
            : `/home/irene/portfolio/${path.replace("~/", "")}`
        );
        break;
      case "whoami":
        print("irene agigiba — software engineer, backend & systems, full stack enthusiast");
        break;
      case "ls":
        print(SECTIONS.join("  ") + "  resume.pdf");
        break;
      case "cd": {
        if (!arg || arg === "~" || arg === "..") {
          setPath("~");
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        }
        const target = arg.replace(/^\.?\//, "").toLowerCase();
        if ((SECTIONS as readonly string[]).includes(target)) {
          setPath("~/" + target);
          document
            .getElementById(target)
            ?.scrollIntoView({ behavior: "smooth" });
        } else {
          print(`cd: no such directory: ${arg}`, "err");
        }
        break;
      }
      case "cat":
        if (/resume/i.test(arg)) {
          print("opening resume.pdf …", "ok");
          resumeLinkRef.current?.click();
        } else if (arg) {
          print(`cat: ${arg}: no such file`, "err");
        } else {
          print("usage: cat <file>", "err");
        }
        break;
      case "open": {
        const target = arg.toLowerCase();
        if (LINKS[target]) {
          print(`opening ${target} …`, "ok");
          window.open(LINKS[target], target === "email" ? "_self" : "_blank");
        } else {
          print(`open: unknown target "${arg}" — try github, linkedin, or email`, "err");
        }
        break;
      }
      case "clear":
        setLog([]);
        break;
      case "sudo":
        print("nice try — you're not root here.", "err");
        break;
      case "echo":
        print(arg);
        break;
      default:
        print(`command not found: ${name} — try 'help'`, "err");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (histIndexRef.current > 0) {
        histIndexRef.current -= 1;
        setInput(historyRef.current[histIndexRef.current] ?? '');
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIndexRef.current < historyRef.current.length - 1) {
        histIndexRef.current += 1;
        setInput(historyRef.current[histIndexRef.current] ?? '');
      } else {
        histIndexRef.current = historyRef.current.length;
        setInput("");
      }
    }
  }

  const logColor: Record<LogLine["kind"], string> = {
    echo: "text-slate-400 font-mono",
    out: "text-[var(--card-text-color)] font-mono",
    ok: "text-[#0bd1d1] font-mono",
    err: "text-red-400 font-mono",
  };

  return (
    <section className="pt-16 pb-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-(--card-color) border border-[#00abf0]/25 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] shadow-[#00abf0]/10 backdrop-blur-md transition-all duration-300 hover:border-[#00abf0]/40 hover:shadow-[0_20px_50px_rgba(0,171,240,0.18)]">
          {/* title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-[#00abf0]/15">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-2 text-xs text-[#00abf0]/80 tracking-wide" style={{ fontFamily: "var(--font-mono)" }}>
              bash — 80×24
            </span>
          </div>

          {/* body */}
          <div
            className="px-6 pt-7 pb-8 text-[15px]"
            onClick={() => inputRef.current?.focus()}
          >
            <p className="mb-1.5 text-slate-400" style={{ fontFamily: "var(--font-mono)" }}>
              <span className="text-[#00abf0] font-semibold">irene-akawin@dev</span> ~ $ whoami
            </p>
            <p style={{fontFamily: "'Playfair Display', serif"}} className="font-bold text-(--text-color) text-[clamp(22px,4vw,34px)] mt-1.5 mb-0.5">
              {typedName}
              <span className="inline-block w-2.5 h-[1em] bg-[#00abf0] ml-1 align-[-2px] animate-pulse" />
            </p>
            <p className="font-sans text-(--card-text-color) opacity-80 text-[15px] mt-2.5 max-w-[52ch] leading-relaxed">
              Software engineer focused on backend systems and
              developer tooling. I build things that are boring in the best
              way — reliable, well-tested, easy to read at 2am during an
              incident.
            </p>

            <div className="flex gap-3.5 mt-7 flex-wrap">
              <button
                className="group text-sm cursor-pointer font-semibold px-6 py-2.5 rounded-xl bg-linear-to-r from-[#00abf0] via-[#0ea5ea] to-[#0bd1d1] text-slate-950 inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] shadow-[0_4px_16px_rgba(0,171,240,0.35)] hover:shadow-[0_6px_25px_rgba(0,171,240,0.55)] border border-[#00abf0]/40 active:translate-y-0"
              >
                <span>View Projects</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <button
                className="group text-sm cursor-pointer font-medium px-5 py-2.5 rounded-xl border border-[#00abf0]/35 bg-[#00abf0]/5 backdrop-blur-sm text-(--text-color) inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[#00abf0] hover:text-[#00abf0] hover:bg-[#00abf0]/15 hover:shadow-[0_0_20px_rgba(0,171,240,0.25)] active:translate-y-0"
              >
                <span>Get in Touch</span>
              </button>
              {/* hidden resume link, triggered by `cat resume.txt` */}
              <a
                ref={resumeLinkRef}
                className="hidden"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </div>

            <div className="border-t border-dashed border-[#00abf0]/20 mt-7" />
            <p className="text-xs text-slate-400 mt-4 mb-2.5" style={{ fontFamily: "var(--font-mono)" }}>
              this terminal actually works — try{" "}
              <code className="text-[#00abf0] bg-[#00abf0]/10 border border-[#00abf0]/20 px-2 py-0.5 rounded text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                help
              </code>
            </p>

            <div
              className="text-[13.5px] max-h-65 overflow-y-auto space-y-1 my-2"
              aria-live="polite"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {log.map((line) => (
                <p
                  key={line.id}
                  className={`m-0 leading-normal whitespace-pre-wrap wrap-break-word ${logColor[line.kind]}`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {line.kind === "echo" ? (
                    <>
                      <span className="text-[#00abf0] font-semibold">irene-akawin@dev</span>
                      {line.text.replace(/^irene-akawin@dev/, "")}
                    </>
                  ) : (
                    line.text
                  )}
                </p>
              ))}
              <div ref={logEndRef} />
            </div>

            <div className="flex items-center gap-2 text-[14.5px] mt-3 p-2 rounded-lg bg-black/20 border border-[#00abf0]/20 focus-within:border-[#00abf0] focus-within:shadow-[0_0_15px_rgba(0,171,240,0.25)] transition-all" style={{ fontFamily: "var(--font-mono)" }}>
              <span className="text-[#00abf0] font-semibold">irene-akawin@dev</span>
              <span className="text-[#0bd1d1] font-medium">{path}</span>
              <span className="text-slate-400">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Terminal command input, try typing help"
                className="grow bg-transparent border-none outline-none text-(--text-color) text-[14.5px] caret-[#00abf0] min-w-0"
                style={{ fontFamily: "var(--font-mono)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}