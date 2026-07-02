import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Terminal, Globe, Shield } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const floatingBadges = [
  { icon: Terminal, label: "Self-Hosted", sub: "100% Sovereign", color: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/20" },
  { icon: Globe, label: "West Africa", sub: "Digital Infrastructure", color: "from-cyan-500/20 to-cyan-600/10", border: "border-cyan-500/20" },
  { icon: Shield, label: "AES-256", sub: "Enterprise Security", color: "from-emerald-500/20 to-emerald-600/10", border: "border-emerald-500/20" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden"
      id="hero"
      style={{ background: "hsl(222 47% 4%)" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Left glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
      {/* Right glow */}
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 border"
            style={{
              background: "rgba(59,130,246,0.08)",
              borderColor: "rgba(59,130,246,0.25)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            <span className="text-[11px] font-bold tracking-widest text-blue-400 uppercase">
              West Africa's Digital Infrastructure Layer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-white">Engineering Africa's</span>
            <br />
            <span className="text-white">Digital Future Through </span>
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              High-Performance
            </span>
            <br />
            <span className="text-white">Software Infrastructure.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            We build data-lite, self-hosted applications and secure peer-to-peer monetization engines 
            tailored specifically for the constraints and opportunities of the West African digital market.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 mb-16"
          >
            <motion.button
              onClick={() => scrollTo("products")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-7 py-3.5 rounded-xl font-semibold text-[14px] transition-all"
              style={{ boxShadow: "0 0 24px rgba(59,130,246,0.45), 0 4px 12px rgba(0,0,0,0.4)" }}
              data-testid="button-explore"
            >
              Explore Our Products
              <ArrowRight size={16} />
            </motion.button>
            <motion.button
              onClick={() => scrollTo("about")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[14px] transition-all border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.8)",
              }}
              data-testid="button-manifesto"
            >
              Meet the Team
              <ChevronRight size={16} />
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-8 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            {[
              { value: "90/10", label: "Revenue Split" },
              { value: "60%", label: "Bandwidth Saved" },
              { value: "1080p", label: "Max Bitrate" },
              { value: "100%", label: "Self-Hosted" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-black text-white">{stat.value}</span>
                <span className="text-[11px] font-semibold tracking-widest uppercase mt-0.5"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating tech badges — hidden on small screens */}
        <div className="hidden xl:flex flex-col gap-3 absolute right-8 top-1/2 -translate-y-1/2">
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-gradient-to-r ${badge.color} ${badge.border}`}
              style={{ backdropFilter: "blur(8px)" }}
            >
              <badge.icon size={16} className="text-white/70 flex-shrink-0" />
              <div>
                <div className="text-[12px] font-bold text-white/90">{badge.label}</div>
                <div className="text-[10px] text-white/50">{badge.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
