import { motion } from "framer-motion";
import { Brain, Cloud, Code2, Layers, Workflow, Boxes } from "lucide-react";

const focuses = [
  { icon: Brain, label: "GenAI Systems", desc: "LLM workflows, RAG pipelines, agentic systems." },
  { icon: Cloud, label: "Cloud-Native", desc: "Azure-first architecture with global scale." },
  { icon: Layers, label: "Backend Engineering", desc: "Reliable APIs, caching, and data design." },
  { icon: Workflow, label: "AI Orchestration", desc: "Pipelines that move from prompt to production." },
  { icon: Code2, label: "Full-Stack Builds", desc: "End-to-end product engineering." },
  { icon: Boxes, label: "System Design", desc: "Scalable, observable, fault-tolerant systems." },
];

const stats = [
  { n: "10+", l: "Projects Built" },
  { n: "10+", l: "Hackathons" },
  { n: "30+", l: "Technologies" },
  // 💡 Update this number whenever you solve more LeetCode problems!
  { n: "300+", l: "LeetCode Problems" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>01 — About</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-6xl tracking-[-0.03em] leading-[1.05] max-w-3xl text-balance"
        >
          Engineering AI systems with real-world impact.
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-12 mt-16">
          <div className="lg:col-span-7 space-y-6 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Curiosity about how things work pulled me into engineering — and curiosity about how intelligence works pulled me into AI. Today I build systems that bring those two together: products that don't just demonstrate intelligence, but apply it reliably for real users.
            </p>
            <p>
              I work across the full stack, with deep focus on cloud architecture, GenAI workflows, and the kind of backend engineering that makes AI features dependable in production.
            </p>
            <blockquote className="font-serif text-2xl sm:text-3xl text-foreground leading-snug border-l-2 border-foreground pl-6 my-10">
              "AI products shouldn't just be intelligent — they should be reliable, scalable, and useful."
            </blockquote>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6"
              >
                <div className="font-display text-4xl tracking-tight">{s.n}</div>
                <div className="text-xs font-secondary text-muted-foreground mt-2">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">Today, I focus on</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {focuses.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 group"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary grid place-items-center mb-4 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <f.icon size={18} />
                </div>
                <div className="font-display text-lg">{f.label}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6"
    >
      {children}
    </motion.div>
  );
}