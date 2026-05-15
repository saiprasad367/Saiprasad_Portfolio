export function Footer() {
  return (
    <footer className="relative px-6 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-serif text-2xl sm:text-3xl text-balance max-w-2xl mx-auto leading-tight">
          "Engineering intelligent systems that create meaningful impact."
        </p>
        <div className="text-xs font-mono text-muted-foreground mt-4">— SaiPrasad Chindam</div>
        <div className="mt-12 flex items-center justify-center gap-3 flex-wrap">
          {["LinkedIn", "GitHub", "LeetCode", "Email"].map((s) => (
            <a
              key={s}
              href="#"
              className="px-4 py-2 rounded-full text-xs font-secondary border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
        <div className="mt-12 text-[11px] font-mono text-muted-foreground">
          © 2026 SaiPrasad Chindam · Designed & engineered with care
        </div>
      </div>
    </footer>
  );
}