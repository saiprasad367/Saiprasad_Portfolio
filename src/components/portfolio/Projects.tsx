import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { SectionLabel } from "./About";

const projects = [
  {
    name: "EduBridge AI",
    tag: "GenAI · EdTech",
    tagline: "Voice-first multilingual learning platform.",
    desc: "AI tutor that adapts explanations in 50+ languages with real-time speech, powered by Azure OpenAI and Azure Speech.",
    stack: ["React", "Node", "Azure OpenAI", "Cosmos DB", "Speech"],
    accent: "from-glow-blue/60 to-glow-violet/60",
  },
  {
    name: "Shortify",
    tag: "Cloud-Native · SaaS",
    tagline: "Scalable URL shortener built for speed.",
    desc: "Base62-encoded short URLs with Redis caching, distributed counters, and sub-50ms redirects. Built to handle high QPS.",
    stack: ["Node", "Redis", "MongoDB", "Docker", "Express"],
    accent: "from-glow-cyan/60 to-glow-blue/60",
  },
  {
    name: "SiliconMind",
    tag: "AI · Hardware",
    tagline: "AI-driven FPGA design optimization.",
    desc: "ML pipeline that analyzes Vivado synthesis reports and predicts optimal placement to cut timing and power.",
    stack: ["Python", "ML", "FPGA", "Vivado", "FastAPI"],
    accent: "from-glow-violet/60 to-glow-gold/60",
  },
  {
    name: "Smart Bio GPT",
    tag: "GenAI · BioTech",
    tagline: "AI assistant for bioinformatics workflows.",
    desc: "Conversational interface over protein databases with structured query routing and 3D structure visualizations.",
    stack: ["Next.js", "Azure OpenAI", "PDB API", "Three.js"],
    accent: "from-glow-gold/60 to-glow-cyan/60",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-cloud">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>04 — Selected Work</SectionLabel>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-display text-4xl sm:text-6xl tracking-[-0.03em] leading-[1.05] max-w-3xl text-balance">
            Building intelligent systems & scalable products.
          </h2>
          <a href="#" className="text-sm inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
            View all on GitHub <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative glass-strong rounded-3xl p-7 overflow-hidden"
            >
              {/* preview area */}
              <div className={`relative h-44 -mx-7 -mt-7 mb-6 rounded-b-none rounded-t-3xl overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 grid-pattern opacity-50" />
                <div className="absolute inset-0 grid place-items-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    className="font-display text-4xl sm:text-5xl tracking-tight text-foreground/90"
                  >
                    {p.name}
                  </motion.div>
                </div>
                <div className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest text-foreground/70">
                  {p.tag}
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div className="font-serif text-xl text-foreground">{p.tagline}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {p.stack.map((s) => (
                  <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-secondary">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-xs">
                <a href="#" className="inline-flex items-center gap-1 hover:underline"><Code2 size={13} /> Code</a>
                <span className="text-border">·</span>
                <a href="#" className="inline-flex items-center gap-1 hover:underline">Live demo <ArrowUpRight size={12} /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}