import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionLabel } from "./About";

function Counter({ to }: { to: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{n}</>;
}

const stats = [
  { n: 542, l: "Problems Solved" },
  { n: 1420, l: "Contest Rating" },
  { n: 128, l: "Day Streak" },
  { n: 47, l: "Contests" },
];

function Heatmap() {
  const cells = Array.from({ length: 26 * 7 }, (_, i) => {
    const r = Math.sin(i * 12.9898) * 43758.5453;
    const v = r - Math.floor(r);
    return Math.floor(v * 5);
  });
  const colors = [
    "bg-secondary",
    "bg-glow-cyan",
    "bg-glow-blue",
    "bg-foreground/40",
    "bg-foreground/80",
  ];
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-1">
      {cells.map((v, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: (i % 26) * 0.012 }}
          className={`w-3 h-3 rounded-[3px] ${colors[v]}`}
        />
      ))}
    </div>
  );
}

export function LeetCode() {
  return (
    <section id="leetcode" className="relative py-32 px-6 bg-cloud">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>05 — Competitive</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl tracking-[-0.03em] leading-[1.05] max-w-3xl text-balance">
          Daily reps. Sharp algorithms.
        </h2>
        <p className="mt-5 max-w-xl text-muted-foreground">
          Consistent problem-solving keeps the fundamentals fluent — DSA, graph theory, and system thinking applied daily.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="font-display text-4xl tracking-tight"><Counter to={s.n} /></div>
              <div className="text-xs font-secondary text-muted-foreground mt-2">{s.l}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mt-6">
          <div className="lg:col-span-2 glass rounded-2xl p-6 sm:p-8 overflow-x-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs font-mono text-muted-foreground">ACTIVITY</div>
                <div className="font-display text-xl mt-1">Last 6 months</div>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
                less <span className="w-2.5 h-2.5 rounded-sm bg-secondary" /><span className="w-2.5 h-2.5 rounded-sm bg-glow-blue" /><span className="w-2.5 h-2.5 rounded-sm bg-foreground/40" /><span className="w-2.5 h-2.5 rounded-sm bg-foreground/80" /> more
              </div>
            </div>
            <Heatmap />
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="text-xs font-mono text-muted-foreground">DIFFICULTY</div>
            <div className="font-display text-xl mt-1 mb-6">Breakdown</div>
            {[
              { l: "Easy", v: 234, p: 43, c: "bg-emerald-400" },
              { l: "Medium", v: 256, p: 47, c: "bg-amber-400" },
              { l: "Hard", v: 52, p: 10, c: "bg-rose-400" },
            ].map((d, i) => (
              <div key={d.l} className="mb-4">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-secondary">{d.l}</span>
                  <span className="font-mono text-muted-foreground">{d.v}</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${d.p}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.15 }}
                    className={`h-full ${d.c}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}