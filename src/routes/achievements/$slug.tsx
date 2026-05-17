import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Trophy, Users, Calendar, MapPin, Target, Sparkles, ChevronRight, Cpu, Star, Award, HeartHandshake, FileBadge, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { getAchievementBySlug, type Achievement } from "@/data/achievements";

export const Route = createFileRoute("/achievements/$slug")({
  loader: ({ params }) => {
    const achievement = getAchievementBySlug(params.slug);
    if (!achievement) throw notFound();
    return achievement;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.event} — SaiPrasad Chindam` },
      { name: "description", content: loaderData?.about },
    ],
  }),
  component: AchievementDetail,
});

function Section({ label, children, delay = 0 }: { label: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      className="mt-24 sm:mt-32"
    >
      <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8 pl-2 border-l-2 border-amber-400/40">{label}</div>
      {children}
    </motion.div>
  );
}

function AchievementDetail() {
  const a = Route.useLoaderData() as Achievement;
  const { theme } = a;

  return (
    <div style={{ backgroundColor: theme.bg }} className="min-h-screen pb-32 selection:bg-amber-200/40">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 px-6 py-4 border-b border-black/5 backdrop-blur-xl bg-white/40">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm font-secondary font-medium text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Achievements
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-mono text-gray-400">{a.date}</span>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 overflow-hidden">
        {/* 1. HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-24 pb-16 relative"
        >
          {/* Trophy Glow Blob */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b ${a.gradientAccent} rounded-full blur-[140px] opacity-60 -z-10`} />

          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border shadow-xl bg-white/80 backdrop-blur-md mb-8"
              style={{ borderColor: theme.borderColor }}
            >
              <Trophy size={18} className="text-amber-500" />
              <span className="font-display text-lg text-black">{a.prize}</span>
            </motion.div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-black mb-6 break-words">
              {a.event}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-10 text-gray-600 font-secondary text-base sm:text-lg">
              <span className="inline-flex items-center gap-2">
                <MapPin size={18} className="text-gray-400" /> {a.host}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={18} className="text-gray-400" /> {a.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users size={18} className="text-gray-400" /> Team of {a.teamSize}
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2. MAIN PHOTO SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 mb-24 relative group"
        >
          <div className="w-full aspect-[21/9] sm:aspect-[24/9] bg-black rounded-[2rem] overflow-hidden relative shadow-2xl border border-black/10">
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            
            <img 
              src={`${a.imageFolder}/${a.mainImageName || "team.jpg"}`} 
              alt={a.mainImageTitle || "Team Photo"} 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 100 100'%3E%3Crect width%3D'100' height%3D'100' fill%3D'%23111' %2F%3E%3Ctext x%3D'50' y%3D'50' font-family%3D'monospace' font-size%3D'4' fill%3D'%23444' text-anchor%3D'middle' dominant-baseline%3D'middle'%3EAdd ${a.mainImageName || "team.jpg"} to image folder%3C%2Ftext%3E%3C%2Fsvg%3E`;
              }}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90" 
            />

            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-20">
              <h3 className="font-display text-3xl sm:text-5xl text-white mb-2">{a.mainImageTitle || "Our Team"}</h3>
              <p className="text-white/70 font-mono text-sm uppercase tracking-widest">{a.mainImageSubtitle || `${a.teamSize} Engineers · ${a.date}`}</p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="font-display text-2xl text-black mb-6">The Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{a.teamStory}</p>
          </div>
        </motion.div>

        {/* 3 & 4. ABOUT & IDEA STORYTELLING */}
        <div className="grid lg:grid-cols-12 gap-12 mt-20">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <h2 className="font-display text-4xl sm:text-5xl text-black leading-tight">The Vision <br />Behind {a.event.split("—")[0].trim()}</h2>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h3 className="text-xl font-display mb-4 flex items-center gap-2"><Target className="text-amber-500" /> About The Event</h3>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{a.about}</p>
            </div>
            <div>
              <h3 className="text-xl font-display mb-4 flex items-center gap-2"><Sparkles className="text-amber-500" /> The Problem & Idea</h3>
              <div className="p-6 sm:p-8 rounded-3xl border bg-white/40 glass" style={{ borderColor: theme.borderColor }}>
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{a.problem}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. HARDWARE + AI COLLABORATION */}
        <Section label="What We Built">
          <div className="rounded-3xl p-8 sm:p-12 border relative overflow-hidden bg-white shadow-xl" style={{ borderColor: theme.borderColor }}>
            <div className={`absolute -right-32 -top-32 w-96 h-96 bg-gradient-to-br ${a.gradientAccent} rounded-full blur-[100px] opacity-40`} />
            <h3 className="font-display text-3xl sm:text-4xl text-black mb-6 relative z-10">Hardware + AI Collaboration</h3>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed whitespace-pre-wrap relative z-10">{a.solution}</p>
          </div>
        </Section>

        {/* 6. TEAM CONTRIBUTIONS */}
        {a.teamContributions.length > 0 && (
          <Section label="The Team">
            <div className="grid sm:grid-cols-2 gap-6">
              {a.teamContributions.map((member, i) => (
                <div key={i} className="group relative rounded-3xl p-8 border bg-white/60 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ borderColor: theme.borderColor }}>
                  {i === 0 && (
                    <div className="absolute top-4 right-4 bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star size={12} fill="currentColor" /> Team Lead
                    </div>
                  )}
                  <h4 className="font-display text-2xl text-black mb-1">{member.name}</h4>
                  <p className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-wide">{member.role}</p>
                  <ul className="space-y-3">
                    {member.contributions.map((c, j) => (
                      <li key={j} className="flex gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: theme.accentColor }} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* 7. MY CONTRIBUTION */}
        <Section label="My Contribution">
          <div className={`grid ${a.contributionImageName ? "md:grid-cols-2" : "grid-cols-1"} gap-12 items-center`}>
            <div>
              <h3 className="font-display text-3xl sm:text-4xl text-black mb-6">My Responsibilities</h3>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{a.myContribution}</p>
            </div>
            {a.contributionImageName && (
              <div className="h-64 sm:h-96 rounded-3xl bg-black/5 border border-black/10 flex flex-col items-center justify-center gap-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent z-0" />
                <img 
                  src={`${a.imageFolder}/${a.contributionImageName}`} 
                  alt="Contribution Detail" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 100 100'%3E%3Crect width%3D'100' height%3D'100' fill%3D'%23f3f4f6' %2F%3E%3Ccircle cx%3D'50' cy%3D'40' r%3D'10' fill%3D'%23d1d5db' %2F%3E%3Crect x%3D'30' y%3D'60' width%3D'40' height%3D'4' rx%3D'2' fill%3D'%23d1d5db' %2F%3E%3Crect x%3D'40' y%3D'70' width%3D'20' height%3D'4' rx%3D'2' fill%3D'%23d1d5db' %2F%3E%3C%2Fsvg%3E";
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 z-10 relative" 
                />
              </div>
            )}
          </div>
        </Section>

        {/* 8. ARCHITECTURE */}
        {a.architecture.length > 0 && (
          <Section label="Technical Architecture">
            <div className="rounded-3xl p-8 sm:p-12 border relative overflow-hidden flex flex-wrap items-center justify-center gap-4 sm:gap-6" style={{ backgroundColor: theme.accentBg, borderColor: theme.borderColor }}>
              {a.architecture.map((node, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-6">
                  <div className="glass px-6 py-4 rounded-xl border border-white/40 shadow-sm text-center font-medium text-gray-800 bg-white/80 hover:scale-105 transition-transform">
                    {node}
                  </div>
                  {i < a.architecture.length - 1 && (
                    <div className="text-gray-500">
                      <ChevronRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* 9. KEY FEATURES GRID */}
        {a.features.length > 0 && (
          <Section label="Platform Features">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {a.features.map((feature, i) => (
                <div key={i} className="rounded-3xl p-8 border bg-white hover:border-amber-400 transition-colors duration-300" style={{ borderColor: theme.borderColor }}>
                  <h3 className="font-display text-xl text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* 10. TIMELINE JOURNEY */}
        {a.timeline.length > 0 && (
          <Section label="Hackathon Journey">
            <div className="max-w-3xl mx-auto space-y-8 relative">
              <div className="absolute top-4 bottom-4 left-[23px] w-px bg-amber-200" />
              {a.timeline.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16 group"
                >
                  <div className="absolute left-0 top-1 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center bg-amber-100 shadow-sm z-10 group-hover:scale-110 transition-transform">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                  </div>
                  <div className="p-6 rounded-2xl border bg-white/80 glass group-hover:border-amber-300 transition-colors" style={{ borderColor: theme.borderColor }}>
                    <h4 className="font-display text-xl text-amber-600 mb-2">{step.time}</h4>
                    <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        )}

        {/* 10.5. VIDEO DEMONSTRATION */}
        {a.videoFilename && (
          <Section label="Video Demonstration">
            <div className="relative group mx-auto max-w-4xl mb-12">
              <div className={`absolute -inset-4 bg-gradient-to-r ${a.gradientAccent} rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 -z-10`} />
              
              <div className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-4 sm:p-6 shadow-2xl relative overflow-hidden" style={{ borderColor: theme.borderColor }}>
                <div className="w-full aspect-video bg-black/50 rounded-[2rem] overflow-hidden relative shadow-inner">
                  <video 
                    src={`${a.imageFolder}/${a.videoFilename}`} 
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover object-center transition-transform duration-700" 
                  />
                </div>
                {a.videoCaption && (
                  <p className="mt-6 text-center text-white/60 font-secondary text-sm max-w-2xl mx-auto leading-relaxed px-4">
                    {a.videoCaption}
                  </p>
                )}
              </div>
            </div>
          </Section>
        )}

        {/* 11. LEADERSHIP & OUTCOME */}
        <div className="grid md:grid-cols-2 gap-8 mt-32">
          <div className="p-8 sm:p-10 rounded-3xl border bg-white shadow-sm flex flex-col justify-center" style={{ borderColor: theme.borderColor }}>
            <h3 className="font-display text-2xl text-black mb-6 flex items-center gap-3">
              <Users className="text-amber-500" /> My Role as Team Leader
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{a.leadership}</p>
          </div>
          <div className="p-8 sm:p-10 rounded-3xl border bg-black text-white shadow-xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Award size={120} />
            </div>
            <h3 className="font-display text-2xl text-white mb-6 flex items-center gap-3 relative z-10">
              <Trophy className="text-amber-400" /> The Final Result
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap relative z-10">{a.outcome}</p>
          </div>
        </div>

        {/* 11.5. SOLO PRIZE PHOTO SECTION */}
        {a.soloPrizeCaption && (
          <Section label="Prize Moment">
            <div className="relative group mx-auto max-w-4xl mb-12">
              <div className={`absolute -inset-4 bg-gradient-to-r ${a.gradientAccent} rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 -z-10`} />
              
              <div className="bg-white/80 glass border rounded-[2.5rem] p-4 sm:p-6 shadow-2xl relative overflow-hidden" style={{ borderColor: theme.borderColor }}>
                <div className="w-full aspect-[4/5] sm:aspect-video bg-black/5 rounded-[2rem] overflow-hidden relative shadow-inner">
                  <img 
                    src={`${a.imageFolder}/solo.jpg`} 
                    alt="Solo Prize Moment" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 100 100'%3E%3Crect width%3D'100' height%3D'100' fill%3D'%23f3f4f6' %2F%3E%3Ctext x%3D'50' y%3D'50' font-family%3D'monospace' font-size%3D'4' fill%3D'%239ca3af' text-anchor%3D'middle' dominant-baseline%3D'middle'%3EAdd solo.jpg to image folder%3C%2Ftext%3E%3C%2Fsvg%3E";
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <p className="mt-6 text-center text-gray-600 font-secondary text-sm max-w-2xl mx-auto leading-relaxed px-4">
                  {a.soloPrizeCaption}
                </p>
              </div>
            </div>
          </Section>
        )}

        {/* 12. CERTIFICATE SECTION (NEW) */}
        <Section label="Proof of Achievement">
          <div className="relative group mx-auto max-w-4xl">
            {/* Glowing Spotlight Background */}
            <div className={`absolute -inset-4 bg-gradient-to-r ${a.gradientAccent} rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 -z-10`} />
            
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono text-sm mb-8 backdrop-blur-md">
                  <CheckCircle2 size={16} className="text-amber-400" /> Official Credential
                </div>
                
                <div className="w-full max-w-3xl aspect-[1.414/1] bg-black/50 border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl group-hover:shadow-amber-500/20 transition-all duration-500">
                  <img 
                    src={`${a.imageFolder}/certificate.jpg`} 
                    alt="Winning Certificate" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 100 100'%3E%3Crect width%3D'100' height%3D'100' fill%3D'%23111' %2F%3E%3Ctext x%3D'50' y%3D'50' font-family%3D'monospace' font-size%3D'4' fill%3D'%23444' text-anchor%3D'middle' dominant-baseline%3D'middle'%3EAdd certificate.jpg to image folder%3C%2Ftext%3E%3C%2Fsvg%3E";
                    }}
                    className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>

                <p className="mt-8 text-white/60 font-secondary text-sm max-w-2xl leading-relaxed">
                  {a.certificateCaption || `Official Certificate awarded for securing ${a.place} at ${a.event}.`}
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 13. EMOTIONAL CLOSING */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center max-w-3xl mx-auto"
        >
          <HeartHandshake size={48} className="mx-auto text-amber-500 mb-8 opacity-80" />
          <p className="font-display text-3xl sm:text-4xl text-black leading-tight text-balance whitespace-pre-wrap">
            {a.emotionalClosing}
          </p>
        </motion.div>

      </main>
    </div>
  );
}
