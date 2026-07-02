import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import mtlLogo from "@assets/1775314197014_transcpr_1779748663765.jpg";

const links = [
  { name: "Capabilities", href: "capabilities" },
  { name: "Services", href: "services" },
  { name: "ViMore", href: "viMore" },
  { name: "Scholar Net", href: "scholarNet" },
  { name: "Security", href: "security" },
  { name: "Process", href: "workflow" },
  { name: "Team", href: "about" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    setTimeout(() => scrollTo(href), isOpen ? 280 : 0);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(5,5,5,0.97)" : "rgba(5,5,5,0.5)",
          backdropFilter: "blur(24px)",
          borderBottom: scrolled
            ? "1px solid rgba(124,58,237,0.2)"
            : "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 flex-shrink-0 group"
            data-testid="button-logo-home"
          >
            <div
              className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300"
              style={{
                border: "1px solid rgba(124,58,237,0.4)",
                boxShadow: "0 0 14px rgba(124,58,237,0.25)",
              }}
            >
              <img src={mtlLogo} alt="MTL" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <p className="text-[12px] font-black tracking-widest text-white/90 uppercase leading-none">
                Media Tech Liberia
              </p>
              <p className="text-[9px] font-bold tracking-[0.2em] mt-0.5 uppercase"
                style={{ color: "rgba(167,139,250,0.7)" }}>
                West Africa · Digital Infrastructure
              </p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <button
                key={l.name}
                onClick={() => handleNav(l.href)}
                className="px-3.5 py-2 text-[12px] font-semibold tracking-wide transition-all duration-200 rounded-lg"
                style={{ color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#ffffff";
                  (e.target as HTMLElement).style.background = "rgba(124,58,237,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
                data-testid={`button-nav-${l.href}`}
              >
                {l.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => handleNav("contact")}
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg text-[12px] font-bold text-white transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                boxShadow: "0 0 20px rgba(124,58,237,0.35)",
              }}
              data-testid="button-nav-cta"
            >
              Contact Us
            </button>
            <button
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: "rgba(255,255,255,0.6)" }}
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 flex flex-col"
              style={{ background: "#0a0a0a", borderLeft: "1px solid rgba(124,58,237,0.2)" }}
            >
              <div className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span className="text-[11px] font-black tracking-widest text-white/50 uppercase">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  <X size={18} />
                </button>
              </div>
              <div className="flex flex-col gap-1 p-4 flex-1">
                {links.map((l, i) => (
                  <motion.button
                    key={l.name}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleNav(l.href)}
                    className="text-left px-4 py-3 rounded-xl text-[13px] font-semibold transition-all"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {l.name}
                  </motion.button>
                ))}
              </div>
              <div className="p-5">
                <button
                  onClick={() => handleNav("contact")}
                  className="w-full py-3 rounded-xl font-bold text-[13px] text-white"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 24px rgba(124,58,237,0.4)" }}
                >
                  Contact Us
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
