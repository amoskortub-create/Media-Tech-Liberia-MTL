import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import mtlLogo from "@assets/1775314197014_transcpr_1779748663765.jpg";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Products", href: "#products" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "ViMore", href: "#viMore" },
    { name: "Scholar Net", href: "#scholarNet" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_18px_rgba(0,210,255,0.4)] flex-shrink-0">
              <img
                src={mtlLogo}
                alt="Media Tech Liberia Logo"
                className="w-full h-full object-cover"
                data-testid="img-mtl-logo"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest text-foreground leading-tight hidden sm:block">
                MEDIA TECH LIBERIA
              </span>
              <span className="text-[9px] uppercase tracking-[0.15em] text-primary/70 font-medium hidden sm:block">
                Est. 2025
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
              West Africa's Digital Infrastructure Layer
            </span>
          </div>

          <div className="flex items-center gap-3">
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase rounded-lg hover:bg-white/5"
                  data-testid={`link-nav-desktop-${link.name.toLowerCase().replace(" ", "-")}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(true)}
              data-testid="button-menu-open"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                  <img src={mtlLogo} alt="MTL" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold tracking-wider text-sm text-foreground">MEDIA TECH LIBERIA</span>
              </div>
              <button
                className="p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                data-testid="button-menu-close"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-foreground/70 hover:text-primary transition-colors py-2 border-b border-white/5"
                  data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto pb-6">
              <span className="text-xs uppercase tracking-widest text-primary/60 font-medium">
                Many Ideas, One Mindset.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
