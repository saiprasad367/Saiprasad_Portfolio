import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) {
      setTouch(true);
      return;
    }
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [role=button]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (touch) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          transition: "transform 0.02s linear",
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-200 ${
            hover ? "w-10 h-10 opacity-30" : "w-2 h-2 opacity-100"
          }`}
        />
      </div>
    </>
  );
}