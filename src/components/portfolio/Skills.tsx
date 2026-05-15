import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const galaxies = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML", "JavaScript"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Python", "REST", "GraphQL"],
  },
  {
    name: "AI / ML",
    items: ["Azure OpenAI", "GenAI", "Prompt Eng.", "Neural Nets", "Custom Vision", "RAG"],
  },
  {
    name: "Cloud / DevOps",
    items: ["Azure", "Docker", "Redis", "Git", "CI/CD", "Vercel"],
  },
  {
    name: "Databases",
    items: ["MongoDB", "Cosmos DB", "Firebase", "PostgreSQL", "SQL"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="relative max-w-6xl mx-auto">
        <SectionLabel>03 — Skills</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl tracking-[-0.03em] leading-[1.05] max-w-3xl text-balance">
          A constellation of tools I build with.
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Grouped by domain — chosen for what they let me ship reliably, not for buzz.
        </p>

        <div className="mt-16 space-y-3">
          {galaxies.map((g, gi) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              className="glass rounded-2xl p-6 sm:p-8 grid sm:grid-cols-12 gap-6 items-center"
            >
              <div className="sm:col-span-3">
                <div className="text-xs font-mono text-muted-foreground">{`0${gi + 1}`}</div>
                <div className="font-display text-2xl mt-1">{g.name}</div>
              </div>
              <div className="sm:col-span-9 flex flex-wrap gap-2">
                {g.items.map((it, i) => (
                  <motion.span
                    key={it}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-background border border-border text-sm font-secondary cursor-default hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
                  >
                    {it}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}