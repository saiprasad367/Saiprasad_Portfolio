import { motion } from "framer-motion";
import { BadgeCheck, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./About";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32 px-6 bg-cloud">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>07 — Credentials</SectionLabel>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-8">
          <h2 className="font-display text-4xl sm:text-5xl tracking-[-0.03em] leading-[1.05] max-w-3xl text-balance">
            Certifications &amp; continued learning.
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs">
            Click any certification to learn more.
          </p>
        </div>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {certifications.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to="/certifications/$slug"
                params={{ slug: it.slug }}
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
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                    {it.year}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}