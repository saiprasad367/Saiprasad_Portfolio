import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Award, Briefcase, ChevronRight, CheckCircle2 } from "lucide-react";
import { getExperienceBySlug, type ExperienceDetail } from "@/data/experience";

export const Route = createFileRoute("/experience/$slug")({
  loader: ({ params }) => {
    const exp = getExperienceBySlug(params.slug);
    if (!exp) throw notFound();
    return exp;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.role} at ${loaderData?.company} — SaiPrasad Chindam` },
      { name: "description", content: loaderData?.desc },
    ],
  }),
  component: ExperienceDetailView,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-display font-bold">Experience not found</h1>
        <button onClick={() => window.history.back()} className="mt-4 inline-block text-sm text-muted-foreground hover:text-foreground">
          ← Back to home
        </button>
      </div>
    </div>
  ),
});

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">{label}</div>
      {children}
    </motion.div>
  );
}

function ExperienceDetailView() {
  const exp = Route.useLoaderData() as ExperienceDetail;
  const { theme } = exp;

  return (
    <div style={{ backgroundColor: theme.bg }} className="min-h-screen">
      {/* Navbar back link */}
      <nav className="sticky top-0 z-50 px-6 py-4 border-b border-border/50 backdrop-blur-sm" style={{ backgroundColor: theme.bg + "CC" }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm font-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pt-16 pb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-6"
            style={{ backgroundColor: theme.tagBg, color: theme.tagText }}
          >
            {exp.period}
          </div>
          <h1 className="font-display text-5xl sm:text-7xl tracking-[-0.03em] leading-[1] text-black">
            {exp.role}
          </h1>
          <p className="mt-4 text-2xl text-gray-800 font-secondary font-medium">
            @ {exp.company}
          </p>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
            {exp.desc}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-8">
            {exp.tags.map((s) => (
              <span
                key={s}
                className="text-xs font-mono px-3 py-1 rounded-full"
                style={{ backgroundColor: theme.accentBg, color: theme.accentColor }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px" style={{ backgroundColor: theme.borderColor }} />

        {/* Overview */}
        <Section label="Overview">
          <div className="glass rounded-2xl p-8 border" style={{ borderColor: theme.borderColor }}>
            <h2 className="font-display text-2xl sm:text-3xl text-black mb-4 leading-tight">
              About the internship
            </h2>
            <div className="space-y-4">
              {exp.overview.map((paragraph, i) => (
                <p key={i} className="text-gray-700 leading-relaxed text-[15px]">{paragraph}</p>
              ))}
            </div>
          </div>
        </Section>

        {/* What I Worked On */}
        <Section label="Scope">
          <div className="rounded-2xl p-8" style={{ backgroundColor: theme.accentBg }}>
            <h2 className="flex items-center gap-3 font-display text-2xl sm:text-3xl text-black mb-6 leading-tight">
              <Briefcase className="text-black/60" /> What I worked on
            </h2>
            <ul className="space-y-3">
              {exp.whatIWorkedOn.map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-gray-800 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: theme.accentColor }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* What I Developed */}
        <Section label="Impact">
          <div className="glass rounded-2xl p-8 border" style={{ borderColor: theme.borderColor }}>
            <h2 className="flex items-center gap-3 font-display text-2xl sm:text-3xl text-black mb-6 leading-tight">
              <CheckCircle2 className="text-gray-400" /> What I developed
            </h2>
            <ul className="space-y-3">
              {exp.whatIDeveloped.map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-gray-700 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Collaboration */}
        <Section label="Teamwork">
          <div className="rounded-2xl p-8" style={{ backgroundColor: theme.tagBg }}>
            <h2 className="font-display text-2xl sm:text-3xl text-black mb-6 leading-tight">
              How I collaborated
            </h2>
            <div className="space-y-4">
              {exp.collaboration.map((item, i) => (
                <p key={i} className="text-gray-800 leading-relaxed text-[15px]">{item}</p>
              ))}
            </div>
          </div>
        </Section>

        {/* Key Learning Outcomes */}
        <Section label="Key Learning Outcomes">
          <div className="glass rounded-2xl p-8 border" style={{ borderColor: theme.borderColor }}>
            <h2 className="font-display text-2xl sm:text-3xl text-black mb-6 leading-tight">
              What I learned
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {exp.keyLearningOutcomes.map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-gray-700 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: theme.accentColor }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Certification */}
        {exp.certificateDetails && (
          <Section label="Credential">
            <div className="rounded-2xl p-8 border border-dashed flex flex-col md:flex-row gap-8 items-center" style={{ borderColor: theme.accentColor, backgroundColor: theme.tagBg }}>
              <div className="flex-1">
                <h2 className="flex items-center gap-3 font-display text-2xl sm:text-3xl text-black mb-4 leading-tight">
                  <Award className="text-gray-600" /> Certification & Recognition
                </h2>
                <div className="space-y-4">
                  {exp.certificateDetails.map((item, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed text-[15px]">{item}</p>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-80 h-56 rounded-xl bg-white/80 border border-white shadow-sm flex items-center justify-center p-2 text-center overflow-hidden">
                {exp.certificateImage ? (
                  <img src={exp.certificateImage} alt="Certificate" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs font-mono text-gray-400">Certificate Placeholder</span>
                )}
              </div>
            </div>
          </Section>
        )}

        {/* Back */}
        <div className="mt-20 pt-12 border-t" style={{ borderColor: theme.borderColor }}>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm font-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to home
          </button>
        </div>
      </main>
    </div>
  );
}
