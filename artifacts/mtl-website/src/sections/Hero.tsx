import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16"
      id="hero"
      style={{ background: "#050505" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Big violet orb — top left */}
      <div
        className="absolute -top-60 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 65%)" }}
      />
      {/* Cyan orb — bottom right */}
      <div
        className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)" }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-px h-full pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(124,58,237,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full py-24 relative z-10">
        <div className="max-w-5xl">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10"
            style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70"
                style={{ background: "#a78bfa" }} />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#a78bfa" }} />
            </span>
            <span className="text-[11px] font-black tracking-[0.2em] uppercase" style={{ color: "#a78bfa" }}>
              West Africa's Digital Infrastructure Layer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="font-black leading-[1.0] tracking-tighter mb-8"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}>
              <span className="text-white block">Engineering Africa's</span>
              <span className="text-white block">Digital Future Through</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 40%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                High-Performance
              </span>
              <span className="text-white block">Software Infrastructure.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[17px] leading-relaxed mb-12 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            We build data-lite, self-hosted applications and secure peer-to-peer monetization engines 
            tailored specifically for the constraints and opportunities of the West African digital market.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <motion.button
              onClick={() => scrollTo("viMore")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-black text-[14px] text-white tracking-wide transition-all"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                boxShadow: "0 0 32px rgba(124,58,237,0.4), 0 8px 24px rgba(0,0,0,0.6)",
              }}
              data-testid="button-explore"
            >
              Explore Our Products
              <ArrowRight size={16} />
            </motion.button>
            <motion.button
              onClick={() => scrollTo("about")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[14px] transition-all"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.75)",
              }}
              data-testid="button-manifesto"
            >
              Meet the Team
              <ChevronRight size={16} />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-10 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {[
              { value: "90/10", label: "Revenue Split" },
              { value: "60%", label: "Bandwidth Saved" },
              { value: "1080p", label: "Max Bitrate" },
              { value: "100%", label: "Self-Hosted" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-[2.2rem] font-black leading-none mb-1"
                  style={{
                    background: "linear-gradient(135deg, #ffffff, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-[10px] font-black tracking-[0.2em] uppercase"
                  style={{ color: "rgba(255,255,255,0.3)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
