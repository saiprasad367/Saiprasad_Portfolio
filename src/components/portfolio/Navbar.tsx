import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "leetcode", label: "LeetCode" },
  { id: "achievements", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= y) {
          setActive(links[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "w-[min(95%,1100px)]" : "w-[min(95%,1180px)]"
        }`}
      >
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_8px_40px_rgba(17,17,17,0.06)]" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display font-semibold tracking-tight">
            <span className="w-7 h-7 rounded-full bg-foreground text-background grid place-items-center text-xs">SC</span>
            <span className="hidden sm:inline text-sm">SaiPrasad</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative px-3 py-1.5 text-[13px] font-secondary font-medium rounded-full transition-colors ${
                    active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="navactive"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-1 text-[13px] font-medium px-4 py-1.5 rounded-full bg-foreground text-background hover:opacity-90 transition"
          >
            Let's talk
          </a>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden w-9 h-9 grid place-items-center rounded-full bg-secondary"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </nav>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[60] lg:hidden"
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm glass-strong p-8 flex flex-col"
          >
            <button
              onClick={() => setOpen(false)}
              className="self-end w-9 h-9 grid place-items-center rounded-full bg-secondary"
            >
              <X size={18} />
            </button>
            <ul className="mt-8 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-2xl font-display font-medium border-b border-border"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}