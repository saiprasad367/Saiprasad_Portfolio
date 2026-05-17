import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, CheckCircle, Mail, MapPin, Send, XCircle } from "lucide-react";
import { SectionLabel } from "./About";
import { sendContactEmail } from "./contactFn";
const socials = [
  { label: "Email", handle: "saiprasad2523@gmail.com", href: "mailto:saiprasad2523@gmail.com" },
  { label: "LinkedIn", handle: "linkedin.com/in/saiprasad2523", href: "https://linkedin.com/in/saiprasad2523" },
  { label: "GitHub", handle: "github.com/saiprasad367", href: "https://github.com/saiprasad367" },
  { label: "LeetCode", handle: "leetcode.com/u/saiprasad2518", href: "https://leetcode.com/u/saiprasad2518/" },
];

function Field({
  label,
  type = "text",
  textarea = false,
  name,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
  name: string;
}) {
  const [focused, setFocused] = useState(false);
  const [val, setVal] = useState("");
  const float = focused || val.length > 0;
  const common =
    "w-full bg-transparent border-b border-border focus:border-foreground outline-none pt-6 pb-2 text-foreground transition-colors";
  return (
    <label className="relative block">
      <span
        className={`absolute left-0 transition-all pointer-events-none font-secondary ${
          float ? "top-0 text-[11px] text-muted-foreground" : "top-5 text-sm text-muted-foreground"
        }`}
      >
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          required
          className={common + " resize-none"}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          className={common}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </label>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
      if (!scriptUrl) {
        console.error("VITE_GOOGLE_SHEET_URL is not defined in .env");
        throw new Error("Missing Web App URL");
      }

      const res = await fetch(scriptUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      
      // With no-cors, the response is opaque, so we assume success if it doesn't throw a network error
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="relative max-w-6xl mx-auto">
        <SectionLabel>08 — Contact</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl tracking-[-0.03em] leading-[1.05] max-w-3xl text-balance">
          Let's build something meaningful.
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Open to Software Engineering, GenAI Engineering, and Full-Stack opportunities — on-site, hybrid, or remote.
        </p>
        <div className="grid lg:grid-cols-12 gap-6 mt-16">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-7 sm:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your name" name="name" />
                <Field label="Email" type="email" name="email" />
              </div>
              <Field label="Subject" name="subject" />
              <Field label="Message" textarea name="message" />

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-emerald-600 font-secondary"
                >
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-500 font-secondary"
                >
                  <XCircle size={16} />
                  Something went wrong. Try emailing me directly.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: 4 }}
                className="group glass rounded-2xl p-5 flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-muted-foreground">{s.label}</div>
                  <div className="font-secondary text-sm mt-1">{s.handle}</div>
                </div>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </motion.a>
            ))}
            <div className="glass rounded-2xl p-5 flex items-center gap-3 text-sm">
              <MapPin size={16} className="text-muted-foreground" />
              Greater Hyderabad Area, India
            </div>
            <div className="glass rounded-2xl p-5 flex items-center gap-3 text-sm">
              <Mail size={16} className="text-muted-foreground" />
              Available · On-site, Hybrid, Remote
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}