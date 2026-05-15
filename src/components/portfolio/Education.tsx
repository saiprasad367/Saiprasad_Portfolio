import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionLabel } from "./About";

const items = [
  {
    school: "CMR College of Engineering & Technology",
    degree: "B.Tech — CSE (AI & ML)",
    period: "2023 – 2027",
    detail: "Focus: GenAI, ML, Cloud Computing, System Design.",
  },
  {
    school: "Shivani Junior College",
    degree: "Intermediate Education",
    period: "2021 – 2023",
    detail: "Score: 97.7%",
  },
  {
    school: "Sri Siddhartha High School",
    degree: "SSC",
    period: "2021",
    detail: "GPA: 10/10",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Education</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl tracking-[-0.03em] leading-[1.05] max-w-2xl text-balance">
          Where the foundation was laid.
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-7"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary grid place-items-center mb-5">
                <GraduationCap size={18} />
              </div>
              <div className="text-xs font-mono text-muted-foreground">{it.period}</div>
              <div className="font-display text-xl mt-2">{it.degree}</div>
              <div className="text-sm text-muted-foreground mt-1">{it.school}</div>
              <div className="text-sm mt-4 pt-4 border-t border-border">{it.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}