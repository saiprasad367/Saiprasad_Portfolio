import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { SectionLabel } from "./About";

const items = [
  { name: "Microsoft AI Internship", issuer: "Edunet × Microsoft × AICTE", year: "2025" },
  { name: "Google Vertex AI — Prompt Design", issuer: "Google Cloud", year: "2025" },
  { name: "Scaler Masterclass — OTT HLD", issuer: "Scaler", year: "2024" },
  { name: "Introduction to Modern AI", issuer: "Cisco Networking Academy", year: "2024" },
  { name: "Web Development Internship", issuer: "CodSoft", year: "2024" },
  { name: "Full Stack Developer Internship", issuer: "CodTech", year: "2024" },
  { name: "Cyber Security Internship", issuer: "Prodigy InfoTech", year: "2023" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32 px-6 bg-cloud">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>07 — Credentials</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl tracking-[-0.03em] leading-[1.05] max-w-3xl text-balance">
          Certifications & continued learning.
        </h2>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group flex items-center justify-between py-5 hover:px-6 hover:bg-background transition-all rounded-md cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-secondary grid place-items-center">
                  <BadgeCheck size={16} />
                </div>
                <div>
                  <div className="font-display text-lg">{it.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{it.issuer}</div>
                </div>
              </div>
              <div className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">{it.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}