import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden bg-white"
      id="hero"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Soft blue gradient top-right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-50 rounded-full blur-[80px] opacity-80 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 w-full py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/8 border border-primary/20 rounded-full text-primary text-[11px] font-semibold tracking-wide uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          West Africa's Digital Infrastructure Layer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight mb-6 max-w-4xl"
        >
          Engineering Africa's Digital Future Through{" "}
          <span className="text-primary">High-Performance</span> Software Infrastructure.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed mb-10 font-normal"
        >
          We build data-lite, self-hosted applications and secure peer-to-peer monetization engines tailored specifically for the constraints and opportunities of the West African digital market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <motion.button
            onClick={() => scrollTo("products")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-[14px] transition-all shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:bg-primary/90"
            data-testid="button-explore"
          >
            Explore Our Products
            <ArrowRight size={16} />
          </motion.button>

          <motion.button
            onClick={() => scrollTo("about")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold text-[14px] hover:bg-slate-100 transition-colors"
            data-testid="button-manifesto"
          >
            Read Our Story
            <ChevronRight size={16} />
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-6 mt-14 pt-10 border-t border-slate-100"
        >
          {[
            { value: "90/10", label: "Revenue Split" },
            { value: "60%", label: "Bandwidth Saved" },
            { value: "1080p", label: "Max Bitrate" },
            { value: "100%", label: "Self-Hosted" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl font-black text-slate-900">{stat.value}</span>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide uppercase mt-0.5">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
