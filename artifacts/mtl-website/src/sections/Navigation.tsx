import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import mtlLogo from "@assets/1775314197014_transcpr_1779748663765.jpg";

const links = [
  { name: "Capabilities", href: "capabilities" },
  { name: "Services", href: "services" },
  { name: "ViMore", href: "viMore" },
  { name: "Scholar Net", href: "scholarNet" },
  { name: "Security", href: "security" },
  { name: "Process", href: "workflow" },
  { name: "Team", href: "about" },
  { name: "Contact", href: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNav(href: string) {
    setIsOpen(false);
    setTimeout(() => scrollTo(href), isOpen ? 280 : 0);
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(5,11,24,0.92)"
            : "rgba(5,11,24,0.6)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(59,130,246,0.15)"
            : "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 cursor-pointer flex-shrink-0 group"
            data-testid="button-logo-home"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-blue-500/30 shadow-lg group-hover:border-blue-400/60 transition-colors flex-shrink-0"
              style={{ boxShadow: "0 0 12px rgba(59,130,246,0.2)" }}>
              <img src={mtlLogo} alt="Media Tech Liberia" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-[12px] font-bold tracking-widest text-white/90 uppercase">Media Tech Liberia</span>
              <div className="flex items-center gap-1.5">
                <Zap size={8} className="text-blue-400" />
                <span className="text-[9px] text-blue-400/80 font-semibold tracking-wider uppercase">West Africa's Digital Layer</span>
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center" aria-label="Main navigation">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href)}
                className="px-3 py-2 text-[12px] font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 whitespace-nowrap tracking-wide"
                data-testid={`button-nav-${link.href}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => handleNav("contact")}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-all duration-200 shadow-lg"
              style={{ boxShadow: "0 0 16px rgba(59,130,246,0.4)" }}
              data-testid="button-nav-cta"
            >
              <Zap size={12} />
              Contact Us
            </button>
            <button
              className="lg:hidden p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              onClick={() => setIsOpen(true)}
              data-testid="button-menu-open"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 border-l border-blue-500/10"
              style={{ background: "rgba(5,11,24,0.98)", backdropFilter: "blur(24px)" }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <span className="text-[12px] font-bold text-white/80 uppercase tracking-widest">Navigation</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  data-testid="button-menu-close"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4">
                {links.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleNav(link.href)}
                    className="text-left px-4 py-3 text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-blue-500/10"
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => handleNav("contact")}
                  className="mt-4 flex items-center justify-center gap-2 py-3 bg-blue-500 text-white rounded-xl font-semibold text-[13px] hover:bg-blue-400 transition-colors"
                  style={{ boxShadow: "0 0 20px rgba(59,130,246,0.4)" }}
                >
                  <Zap size={13} />
                  Contact Us
                </motion.button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
