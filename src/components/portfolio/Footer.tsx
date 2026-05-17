export function Footer() {
  return (
    <footer className="relative px-6 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-serif text-2xl sm:text-3xl text-balance max-w-2xl mx-auto leading-tight">
          "Engineering intelligent systems that create meaningful impact."
        </p>

        {/* Cursive signature */}
        <div className="mt-8 flex items-center justify-center">
          <span className="signature text-4xl sm:text-5xl text-foreground/80 select-none">
            saiprasad chindam
          </span>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/saiprasad2523" },
            { label: "GitHub", href: "https://github.com/saiprasad367" },
            { label: "LeetCode", href: "https://leetcode.com/u/saiprasad2518/" },
            { label: "Email", href: "mailto:saiprasad2523@gmail.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-xs font-secondary border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="mt-10 text-[11px] font-mono text-muted-foreground">
          © 2026 SaiPrasad Chindam · Designed &amp; engineered with care
        </div>
      </div>
    </footer>
  );
}