import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./About";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 bg-cloud">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>02 — Experience</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl tracking-[-0.03em] leading-[1.05] max-w-3xl text-balance">
          Building experience through real engineering.
        </h2>

        <div className="relative mt-20">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px" />
          <div className="space-y-12">
            {experiences.map((e, i) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid sm:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "sm:[&>div:first-child]:order-2"}`}
              >
                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className="text-xs font-mono text-muted-foreground">{e.period}</div>
                  <div className="font-display text-2xl mt-1">{e.role}</div>
                  <div className="text-sm text-muted-foreground mt-1">{e.company}</div>
                </div>

                {/* dot */}
                <div className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground ring-4 ring-cloud" />

                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pl-12" : "sm:pr-12"}`}>
                  <div className="glass rounded-2xl p-6 hover:shadow-[0_20px_60px_-20px_rgba(17,17,17,0.15)] transition-shadow">
                    <p className="text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {e.tags.map((t) => (
                        <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-secondary">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/experience/$slug`}
                      params={{ slug: e.slug }}
                      className="mt-5 inline-flex items-center gap-1 text-xs font-medium hover:gap-2 transition-all"
                    >
                      Read more <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}