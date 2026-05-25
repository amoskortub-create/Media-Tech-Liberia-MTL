import { useState } from "react";
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
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNav(href: string) {
    setIsOpen(false);
    setTimeout(() => scrollTo(href), isOpen ? 280 : 0);
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
            data-testid="button-logo-home"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/25 shadow-sm flex-shrink-0">
              <img src={mtlLogo} alt="Media Tech Liberia" className="w-full h-full object-cover" data-testid="img-mtl-logo-nav" />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-[11px] font-bold tracking-wide text-slate-800">Media Tech Liberia</span>
              <span className="text-[9px] text-primary font-semibold tracking-wider">Self-Hosted · Appwrite Powered</span>
            </div>
          </button>

          {/* Desktop nav — hidden on smaller screens, shown on lg+ */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center" aria-label="Main navigation">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href)}
                className="px-2.5 py-1.5 text-[12px] font-medium text-slate-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all whitespace-nowrap"
                data-testid={`button-nav-${link.href}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => handleNav("contact")}
              className="hidden md:flex items-center px-4 py-1.5 text-[12px] font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="button-nav-cta"
            >
              Contact Us
            </button>
            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-1.5 text-slate-700 hover:text-primary transition-colors rounded-lg hover:bg-slate-100"
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
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-64 bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-primary/20">
                    <img src={mtlLogo} alt="MTL" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 tracking-wide">Media Tech Liberia</span>
                </div>
                <button
                  className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                  data-testid="button-menu-close"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col p-3 gap-0.5 flex-1 overflow-y-auto">
                {links.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-4 py-2.5 text-[13px] font-medium text-slate-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                    data-testid={`button-nav-mobile-${link.href}`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>

              <div className="p-4 border-t border-slate-100">
                <button
                  onClick={() => handleNav("contact")}
                  className="w-full py-2.5 text-[13px] font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-nav-mobile-cta"
                >
                  Contact Us
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-3">Self-Hosted · Appwrite Powered</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
