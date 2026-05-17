import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";

const roles = [
  "Software Engineer",
  "GenAI Engineer",
  "Full-Stack Developer",
  "Cloud-Native Builder",
  "AI Systems Architect",
];

const orbitTech = [
  { label: "React", angle: 0 },
  { label: "Azure", angle: 45 },
  { label: "Node", angle: 90 },
  { label: "TS", angle: 135 },
  { label: "Redis", angle: 180 },
  { label: "Docker", angle: 225 },
  { label: "GenAI", angle: 270 },
  { label: "Mongo", angle: 315 },
];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);

  const headline = "SaiPrasad Chindam";

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* mesh + grid background */}
      <div className="absolute inset-0 mesh-bg opacity-70" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-glow-blue blur-3xl opacity-50 animate-pulse-glow" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-glow-violet blur-3xl opacity-50 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Text content */}
        <div className="w-full max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-secondary text-muted-foreground mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities · Greater Hyderabad
          </motion.div>

          <h1 className="font-display text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-0.04em] font-medium text-balance">
            {headline.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.025, ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
                className="inline-block"
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h1>

          <div className="mt-6 h-9 sm:h-10 overflow-hidden font-secondary text-lg sm:text-xl text-muted-foreground">
            <motion.div
              animate={{ y: -roleIdx * 40 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              {roles.map((r) => (
                <div key={r} className="h-10 flex items-center gap-2">
                  <Sparkles size={16} className="text-foreground" />
                  {r}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="font-serif text-2xl sm:text-3xl mt-8 leading-tight text-balance max-w-xl"
          >
            Building scalable AI-powered systems beyond prototypes — into production-grade experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-5 max-w-xl text-[15px] text-muted-foreground leading-relaxed"
          >
            Software Engineer focused on cloud-native AI systems, GenAI workflows, and full-stack engineering. I design reliable products that solve real problems at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium hover:scale-[1.02] transition-transform shadow-[0_10px_40px_-10px_rgba(17,17,17,0.4)]"
            >
              Explore Projects
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1jKMHA5k1S_69wqRCZOuaRq9DIDUjqPCr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-strong px-6 py-3.5 rounded-full text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              <Download size={16} />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border border-border hover:bg-secondary transition"
            >
              <Mail size={16} />
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Terminal() {
  const lines = [
    { p: "$ initializing ai systems...", o: "✓ Connected to Azure OpenAI" },
    { p: "$ deploying cloud-native services...", o: "✓ Backend services running" },
    { p: "$ optimizing redis caching layer...", o: "✓ Cache hit rate: 94%" },
    { p: "$ running genai workflows...", o: "✓ Model inference ready" },
  ];
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setShown((s) => (s < lines.length ? s + 1 : s)), 700);
    return () => clearInterval(t);
  }, [lines.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative max-w-4xl mx-auto px-6 mt-20"
    >
      <div className="glass-strong rounded-2xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
          <span className="ml-3 text-[11px] font-mono text-muted-foreground">~/saiprasad — system.boot</span>
        </div>
        <div className="p-5 font-mono text-[13px] leading-7 min-h-[180px]">
          {lines.slice(0, shown).map((l, i) => (
            <div key={i}>
              <div className="text-foreground">{l.p}</div>
              <div className="text-emerald-600/80">{l.o}</div>
            </div>
          ))}
          {shown >= lines.length && (
            <div className="mt-2">
              <span className="text-foreground">$ system ready</span>
              <span className="ml-1 inline-block w-2 h-4 bg-foreground align-middle blink" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}