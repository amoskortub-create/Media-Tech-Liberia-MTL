import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,210,255,0.3)]">
              <span className="font-bold text-sm tracking-wider text-primary">MTL</span>
            </div>
            <span className="text-sm font-semibold tracking-widest text-foreground hidden sm:block">
              MEDIA TECH LIBERIA
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
              West Africa's Digital Infrastructure Layer
            </span>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(true)}
            data-testid="button-menu-open"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button
                className="p-2 text-foreground"
                onClick={() => setIsOpen(false)}
                data-testid="button-menu-close"
              >
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 mt-12">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-foreground/80 hover:text-primary transition-colors"
                  data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-auto pb-8">
              <span className="text-xs uppercase tracking-widest text-primary font-medium">
                Media Tech Liberia
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
