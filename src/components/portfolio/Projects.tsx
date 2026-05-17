import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./About";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-cloud">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>04 — Selected Work</SectionLabel>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-display text-4xl sm:text-6xl tracking-[-0.03em] leading-[1.05] max-w-3xl text-balance">
            Building intelligent systems &amp; scalable products.
          </h2>
          <a
            href="https://github.com/saiprasad367"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
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
              className={`group relative glass-strong rounded-3xl p-7 overflow-hidden ${p.comingSoon ? "opacity-60" : ""}`}
            >
              {/* preview area */}
              <div className={`relative h-44 -mx-7 -mt-7 mb-6 rounded-b-none rounded-t-3xl overflow-hidden bg-gradient-to-br ${p.gradientAccent}`}>
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
                {p.comingSoon ? (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-[10px] font-mono tracking-widest text-foreground/60">
                    Coming Soon
                  </div>
                ) : (
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full glass grid place-items-center group-hover:bg-foreground group-hover:text-background transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                )}
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
              {!p.comingSoon && (
                <div className="mt-6 flex items-center gap-3 text-xs">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      GitHub <ArrowUpRight size={12} />
                    </a>
                  )}
                  {p.liveUrl && (
                    <>
                      <span className="text-border">·</span>
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        Live demo <ArrowUpRight size={12} />
                      </a>
                    </>
                  )}
                  <span className="text-border">·</span>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center gap-1 hover:underline font-medium"
                  >
                    View details <ArrowUpRight size={12} />
                  </Link>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}