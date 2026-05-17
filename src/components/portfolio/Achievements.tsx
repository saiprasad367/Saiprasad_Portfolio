import { motion } from "framer-motion";
import { Trophy, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./About";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>06 — Recognition</SectionLabel>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <h2 className="font-display text-4xl sm:text-5xl tracking-[-0.03em] leading-[1.05] max-w-3xl text-balance">
            Earned in the arena, not the syllabus.
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs">
            Click any achievement to read the full story.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {achievements.map((it, i) => (
            <motion.div
              key={it.event}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <Link
                to="/achievements/$slug"
                params={{ slug: it.slug }}
                className="group block glass rounded-2xl p-6 h-full hover:shadow-[0_20px_60px_-20px_rgba(17,17,17,0.15)] transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 rounded-xl bg-glow-gold grid place-items-center">
                    <Trophy size={16} />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary">{it.date}</span>
                </div>
                <div className="font-display text-base mt-5 leading-tight">{it.event}</div>
                <div className="text-xs text-muted-foreground mt-1.5">{it.host}</div>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-secondary">{it.place}</span>
                  <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}