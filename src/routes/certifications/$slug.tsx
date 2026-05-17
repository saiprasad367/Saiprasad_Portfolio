import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck, BookOpen, Star, Globe, Sparkles } from "lucide-react";
import { getCertificationBySlug, type Certification } from "@/data/certifications";

export const Route = createFileRoute("/certifications/$slug")({
  loader: ({ params }) => {
    const cert = getCertificationBySlug(params.slug);
    if (!cert) throw notFound();
    return cert;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name} — SaiPrasad Chindam` },
      { name: "description", content: loaderData?.description },
    ],
  }),
  component: CertificationDetail,
});

function Section({ title, children, icon: Icon }: { title: string; children: React.ReactNode; icon?: React.ElementType }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 sm:mb-24"
    >
      <div className="flex items-center gap-3 mb-8">
        {Icon && <Icon className="text-blue-500/70" size={20} />}
        <h2 className="text-xs font-mono text-gray-400 uppercase tracking-[0.2em]">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function CertificationDetail() {
  const cert = Route.useLoaderData() as Certification;

  return (
    <div className="min-h-screen bg-gray-50/30 selection:bg-blue-100 selection:text-blue-900 pb-32">
      {/* Nav */}
      <nav className="sticky top-0 z-50 px-6 py-5 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm font-secondary text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Certifications
          </button>
          <span className="text-xs font-mono text-gray-400 bg-gray-100 px-3 py-1 rounded-full">{cert.year}</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6">
        {/* 1. HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-24 pb-16 sm:pt-32 sm:pb-24"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50/50 border border-blue-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-secondary mb-8 shadow-sm">
            <BadgeCheck size={16} className="text-blue-500" />
            <span className="font-medium tracking-wide">{cert.issuer}</span>
          </div>
          
          <h1 className="font-display text-5xl sm:text-7xl tracking-tight leading-[1.05] text-gray-900 text-balance mb-8">
            {cert.name}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm font-secondary text-gray-500">
            <span className="flex items-center gap-2"><Globe size={14} className="text-gray-400" /> Global Certification</span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-2"><Sparkles size={14} className="text-gray-400" /> Enterprise Validated</span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16 sm:mb-24" />

        {/* 2. ABOUT THE CERTIFICATION */}
        <Section title="About This Certification">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-secondary whitespace-pre-wrap max-w-3xl">
            {cert.description}
          </p>
        </Section>

        {/* 3. WHAT I LEARNED */}
        <Section title="What I Learned">
          <div className="grid sm:grid-cols-2 gap-4">
            {cert.whatILearned.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div className="mt-1 bg-blue-50 p-1.5 rounded-lg">
                  <BookOpen size={16} className="text-blue-500" />
                </div>
                <p className="text-[15px] text-gray-700 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* 4. SKILLS & KNOWLEDGE GAINED */}
        <Section title="Skills & Knowledge Gained">
          <div className="flex flex-wrap gap-3">
            {cert.skills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="text-[13px] font-mono px-4 py-2 rounded-xl bg-gray-900 text-white shadow-sm border border-gray-800 hover:bg-black transition-colors"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </Section>

        {/* 5. REAL-WORLD UNDERSTANDING */}
        {cert.realWorld && (
          <Section title="Real-World Understanding">
            <div className="p-8 sm:p-10 rounded-[2rem] bg-white border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Globe size={120} />
              </div>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-secondary whitespace-pre-wrap relative z-10 max-w-3xl">
                {cert.realWorld}
              </p>
            </div>
          </Section>
        )}

        {/* 6. WHY THIS CERTIFICATION MATTERS */}
        {cert.importance && (
          <Section title="Why This Matters">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-secondary whitespace-pre-wrap max-w-3xl">
              {cert.importance}
            </p>
          </Section>
        )}

        {/* 7. CERTIFICATION HIGHLIGHTS */}
        {cert.highlights && cert.highlights.length > 0 && (
          <Section title="Certification Highlights">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cert.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3 hover:border-blue-100 transition-colors"
                >
                  <Star size={16} className="text-blue-400 flex-shrink-0" />
                  <span className="text-[14px] text-gray-800 font-medium">{h}</span>
                </motion.div>
              ))}
            </div>
          </Section>
        )}

        {/* 8. CERTIFICATE IMAGE SECTION */}
        <Section title="Official Certification">
          <div className="relative group max-w-5xl mx-auto">
            {/* Premium background glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-indigo-50 to-blue-100 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 -z-10" />
            
            <div className="w-full aspect-[4/3] sm:aspect-[1.414/1] bg-white rounded-[2rem] overflow-hidden relative shadow-2xl border border-gray-100/50 p-2 sm:p-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 to-transparent z-0" />
              
              <img 
                src={`/assets/certifications/${cert.imageName || 'placeholder.jpg'}`}
                alt={`${cert.name} Certificate`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 100 100'%3E%3Crect width%3D'100' height%3D'100' fill%3D'%23f8fafc' %2F%3E%3Ccircle cx%3D'50' cy%3D'40' r%3D'10' fill%3D'%23e2e8f0' %2F%3E%3Ctext x%3D'50' y%3D'65' font-family%3D'sans-serif' font-size%3D'4' fill%3D'%2394a3b8' text-anchor%3D'middle'%3EAdd ${cert.imageName || 'certificate image'} to%3C%2Ftext%3E%3Ctext x%3D'50' y%3D'72' font-family%3D'sans-serif' font-size%3D'4' fill%3D'%2394a3b8' text-anchor%3D'middle'%3E/assets/certifications/%3C%2Ftext%3E%3C%2Fsvg%3E`;
                }}
                className="w-full h-full object-cover object-center rounded-[1.5rem] shadow-sm relative z-10 group-hover:scale-[1.02] transition-transform duration-700" 
              />
            </div>

            {cert.certificateCaption && (
              <p className="mt-8 text-center text-gray-500 font-secondary text-sm max-w-2xl mx-auto leading-relaxed px-4">
                {cert.certificateCaption}
              </p>
            )}
          </div>
        </Section>

        {/* 9. FINAL ENDING */}
        {cert.ending && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 sm:mt-32 text-center"
          >
            <p className="text-xl sm:text-2xl text-gray-800 font-display text-balance leading-relaxed max-w-3xl mx-auto">
              "{cert.ending}"
            </p>
          </motion.div>
        )}

      </main>
    </div>
  );
}
