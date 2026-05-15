import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SectionLabel } from "./About";

const items = [
  { place: "1st Place", event: "CHARGE 2026 — 24h Hackathon", host: "Sreenidhi Institute", date: "Mar 2026" },
  { place: "2nd Place", event: "HackspireX", host: "GITAM University", date: "2025" },
  { place: "Finalist", event: "Ingenium Hackathon", host: "NIT Trichy", date: "2025" },
  { place: "Top 10", event: "Code Clash", host: "IIT Hyderabad", date: "2024" },
  { place: "Participant", event: "ISEA ISAP CTF", host: "IIT Madras", date: "2024" },
  { place: "Finalist", event: "Hack4Delhi", host: "NSUT Delhi", date: "2024" },
  { place: "Top 15", event: "Pulse Quest", host: "IIT Hyderabad", date: "2024" },
  { place: "Finalist", event: "Deutsche Börse Cybersecurity", host: "Global", date: "2024" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>06 — Recognition</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl tracking-[-0.03em] leading-[1.05] max-w-3xl text-balance">
          Earned in the arena, not the syllabus.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-16">
          {items.map((it, i) => (
            <motion.div
              key={it.event}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 group"
            >
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-xl bg-glow-gold grid place-items-center">
                  <Trophy size={16} />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary">{it.date}</span>
              </div>
              <div className="font-display text-base mt-5 leading-tight">{it.event}</div>
              <div className="text-xs text-muted-foreground mt-1.5">{it.host}</div>
              <div className="mt-4 pt-4 border-t border-border text-sm font-secondary">{it.place}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}