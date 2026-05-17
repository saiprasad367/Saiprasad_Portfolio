import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, GitBranch, Globe, Play, Server, Database, Code, Shield, CheckCircle2, LayoutGrid, ChevronDown, ChevronRight, Zap, Target } from "lucide-react";
import { useState } from "react";
import { getProjectBySlug, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name} — SaiPrasad Chindam` },
      { name: "description", content: loaderData?.tagline },
    ],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-display font-bold">Project not found</h1>
        <button onClick={() => window.history.back()} className="mt-4 inline-block text-sm text-muted-foreground hover:text-foreground">
          ← Back to home
        </button>
      </div>
    </div>
  ),
});

function VideoPlayer({ videoUrl, className }: { videoUrl?: string; className?: string }) {
  if (!videoUrl) {
    return (
      <div className={`w-full aspect-video rounded-2xl bg-black/5 flex flex-col items-center justify-center gap-3 border border-dashed border-border/60 ${className}`}>
        <div className="w-12 h-12 rounded-xl bg-black/5 grid place-items-center">
          <Play size={20} className="text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground font-secondary">Working video — coming soon</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-border shadow-2xl ${className}`}>
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        controls
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function Section({ label, children, delay = 0 }: { label: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      className="mt-24"
    >
      <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6 pl-2 border-l-2 border-primary/20">{label}</div>
      {children}
    </motion.div>
  );
}

function ProjectDetail() {
  const project = Route.useLoaderData() as Project;
  const { theme } = project;
  const [folderOpen, setFolderOpen] = useState(false);

  return (
    <div style={{ backgroundColor: theme.bg }} className="min-h-screen pb-32">
      {/* 1. HERO SECTION */}
      <nav className="sticky top-0 z-50 px-6 py-4 border-b border-border/50 backdrop-blur-md bg-white/40">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm font-secondary font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 transition-colors">
                <GitBranch size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 transition-colors text-primary">
                <Globe size={18} />
              </a>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-20 pb-16 relative"
        >
          {/* Animated Gradient Background Blob */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-br ${project.gradientAccent} rounded-full blur-[120px] opacity-40 -z-10 animate-pulse`} />

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-black mb-6 break-words">
              {project.name}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-display text-gray-800 mb-6 px-4">
              {project.tagline}
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-secondary px-4">
              {project.desc}
            </p>

            {/* Quick Stats Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
              {project.stats.map((stat, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm backdrop-blur-sm"
                  style={{ backgroundColor: "rgba(255,255,255,0.7)", borderColor: theme.borderColor, color: theme.accentColor }}
                >
                  {stat}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium hover:scale-105 transition-transform shadow-lg"
                  style={{ backgroundColor: theme.accentColor }}
                >
                  <Globe size={18} /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium border border-gray-200 hover:scale-105 transition-transform shadow-sm"
                >
                  <GitBranch size={18} /> GitHub
                </a>
              )}
            </div>
          </div>

          <div className="mt-20">
            <VideoPlayer videoUrl={project.video} />
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12" />

        {/* 2. TECH STACK SECTION */}
        <Section label="Technology Stack">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.categorizedStack.map((cat, i) => (
              <div key={i} className="glass rounded-2xl p-6 border bg-white/40 hover:bg-white/60 transition-colors" style={{ borderColor: theme.borderColor }}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-4">{cat.category}</h3>
                <ul className="space-y-3">
                  {cat.tech.map((t, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-medium text-gray-800">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.accentColor }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* 3, 4, 5. OVERVIEW, PROBLEM, SOLUTION (Storytelling) */}
        <div className="grid lg:grid-cols-12 gap-12 mt-32">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h2 className="font-display text-4xl text-black leading-tight">The Story <br />Behind {project.name}</h2>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-16">
            <div>
              <h3 className="text-xl font-display mb-4 flex items-center gap-2"><Target className="text-gray-400" /> Project Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{project.overview}</p>
            </div>
            <div>
              <h3 className="text-xl font-display mb-4 flex items-center gap-2"><LayoutGrid className="text-gray-400" /> The Problem</h3>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap border-l-4 pl-6" style={{ borderColor: theme.accentColor }}>{project.problem}</p>
            </div>
            <div>
              <h3 className="text-xl font-display mb-4 flex items-center gap-2"><CheckCircle2 className="text-gray-400" /> The Solution</h3>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{project.solution}</p>
            </div>
          </div>
        </div>

        {/* 6. KEY FEATURES GRID */}
        <Section label="Key Features">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl p-8 border bg-white/50 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ borderColor: theme.borderColor }}>
                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: theme.accentColor, opacity: 0 }} />
                <h3 className="font-display text-xl text-black mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. SYSTEM ARCHITECTURE */}
        {project.architecture.length > 0 && (
          <Section label="System Architecture">
            <div className="rounded-3xl p-8 sm:p-12 border relative overflow-hidden" style={{ backgroundColor: theme.accentBg, borderColor: theme.borderColor }}>
              <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                {project.architecture.map((node, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="glass px-6 py-4 rounded-xl border border-white/40 shadow-sm text-center font-medium text-gray-800 whitespace-nowrap min-w-[160px] hover:scale-105 transition-transform bg-white/80">
                      {node}
                    </div>
                    {i < project.architecture.length - 1 && (
                      <div className="text-gray-400 md:rotate-0 rotate-90 my-2 md:my-0">
                        <ChevronRight size={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* 8. HOW IT WORKS (Timeline UI) */}
        <Section label="Request Flow">
          <div className="max-w-3xl mx-auto space-y-8 relative">
            <div className="absolute top-4 bottom-4 left-[27px] w-px bg-gray-200" />
            {project.howItWorks.map((step, i) => {
              const [title, ...rest] = step.split(":");
              const desc = rest.join(":");
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16"
                >
                  <div 
                    className="absolute left-0 top-1 w-14 h-14 rounded-full border-4 border-white flex items-center justify-center font-display text-xl text-white shadow-sm z-10"
                    style={{ backgroundColor: theme.accentColor }}
                  >
                    {i + 1}
                  </div>
                  <div className="glass rounded-2xl p-6 border bg-white/60" style={{ borderColor: theme.borderColor }}>
                    <h4 className="font-display text-xl text-black mb-2">{title}</h4>
                    {desc && <p className="text-gray-600 leading-relaxed">{desc.trim()}</p>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>

        {/* 9. PERFORMANCE METRICS */}
        {project.metrics.length > 0 && (
          <Section label="Performance Metrics">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.metrics.map((metric, i) => {
                const [title, value] = metric.split(": ");
                return (
                  <div key={i} className="rounded-2xl p-6 border bg-white shadow-sm flex flex-col justify-center items-center text-center hover:border-black transition-colors">
                    <span className="text-gray-500 font-secondary text-sm mb-2">{title}</span>
                    <span className="font-display text-2xl sm:text-3xl text-black" style={{ color: theme.accentColor }}>{value || title}</span>
                  </div>
                );
              })}
            </div>
          </Section>
        )}

        {/* 13. ENGINEERING CHALLENGES */}
        <Section label="Engineering Challenges">
          <div className="space-y-6">
            {project.challenges.map((challenge, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-3xl border bg-white" style={{ borderColor: theme.borderColor }}>
                <div className="sm:w-1/3">
                  <div className="inline-flex items-center gap-2 text-sm font-mono px-3 py-1 rounded-full mb-3" style={{ backgroundColor: theme.tagBg, color: theme.tagText }}>
                    Challenge {i + 1}
                  </div>
                  <h3 className="font-display text-2xl text-black">{challenge.title}</h3>
                </div>
                <div className="sm:w-2/3 border-t sm:border-t-0 sm:border-l pt-4 sm:pt-0 sm:pl-8" style={{ borderColor: theme.borderColor }}>
                  <p className="text-gray-700 leading-relaxed text-lg">{challenge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 10. SCREENSHOTS SECTION */}
        {project.screenshots && project.screenshots.length > 0 && (
          <Section label="Gallery">
            <div className="grid sm:grid-cols-2 gap-4">
              {project.screenshots.map((src, n) => (
                <div
                  key={n}
                  className="h-72 sm:h-96 rounded-2xl flex items-center justify-center border overflow-hidden bg-black/5 group"
                  style={{ borderColor: theme.borderColor }}
                >
                  <img src={src} alt={`Screenshot ${n + 1}`} className="w-full h-full object-contain p-2 drop-shadow-sm group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* 12. FOLDER STRUCTURE */}
        {project.folderStructure && (
          <Section label="Codebase">
            <div className="rounded-2xl border overflow-hidden bg-[#0D1117] shadow-xl">
              <button 
                onClick={() => setFolderOpen(!folderOpen)}
                className="w-full flex items-center justify-between p-4 bg-[#161B22] text-gray-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Code size={18} />
                  <span className="font-mono text-sm">Project Structure</span>
                </div>
                <ChevronDown size={18} className={`transition-transform duration-300 ${folderOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {folderOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <pre className="p-6 text-[13px] font-mono text-gray-400 leading-[1.8] overflow-x-auto whitespace-pre">
                      {project.folderStructure}
                    </pre>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Section>
        )}

        {/* 14 & 15. LEARNINGS & FUTURE */}
        <div className="grid md:grid-cols-2 gap-8 mt-24">
          <div className="glass p-8 rounded-3xl border bg-white/40" style={{ borderColor: theme.borderColor }}>
            <h3 className="font-display text-2xl text-black mb-6">Key Learnings</h3>
            <ul className="space-y-3">
              {project.learnings.map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: theme.accentColor }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass p-8 rounded-3xl border bg-white/40" style={{ borderColor: theme.borderColor }}>
            <h3 className="font-display text-2xl text-black mb-6">Future Enhancements</h3>
            <ul className="space-y-3">
              {project.future.map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gray-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 16. FINAL CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 sm:p-16 rounded-[3rem] text-center border relative overflow-hidden"
          style={{ backgroundColor: theme.bg, borderColor: theme.borderColor }}
        >
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br ${project.gradientAccent} rounded-full blur-[100px] opacity-30 -z-10`} />
          <h2 className="font-display text-4xl sm:text-5xl text-black mb-6">Interested in the architecture?</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Review the source code on GitHub to see the full implementation, or reach out to discuss the technical decisions made during development.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium hover:scale-105 transition-transform shadow-lg w-full sm:w-auto justify-center"
                style={{ backgroundColor: theme.accentColor }}
              >
                <GitBranch size={18} /> View Source Code
              </a>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium border border-gray-200 hover:scale-105 transition-transform shadow-sm w-full sm:w-auto justify-center"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
