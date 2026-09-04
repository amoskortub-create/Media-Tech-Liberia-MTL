import { motion } from "framer-motion";
import amosPhoto from "@assets/Face_Clean-up_Studio_In_a_studio_portrait_style_a_man_with_dar_1779748900032.jpg";

const values = [
  { label: "Africa-First", desc: "Built for African voices and communities." },
  { label: "Integrity", desc: "Honest, transparent, and trustworthy in all we do." },
  { label: "Innovation", desc: "Always pushing the boundaries of what's possible." },
  { label: "Empathy", desc: "Led by genuine care for our community." },
];

export function Leadership() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      id="about"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="absolute inset-0 line-grid" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.25em] uppercase mb-4"
            style={{ color: "#a78bfa" }}
          >
            — Executive Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-black text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)" }}
          >
            The Team Building
            <br />
            <span
              style={{
                background: "linear-gradient(135deg,#a78bfa,#7c3aed,#06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Africa's Digital Future
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            A passionate team of Liberian builders, creatives, and strategists committed to engineering
            world-class technology from the heart of West Africa.
          </motion.p>
        </div>

        {/* ── Founder featured card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden mb-5"
          style={{ background: "#0d0d0d", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          {/* Top accent */}
          <div
            className="h-[2px] w-full"
            style={{ background: "linear-gradient(90deg, #7c3aed, #a78bfa, #06b6d4, transparent)" }}
          />

          <div className="flex flex-col lg:flex-row">
            {/* Founder photo */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="h-80 lg:h-full overflow-hidden">
                <img
                  src={amosPhoto}
                  alt="Amos B. Kortu — Founder & CEO"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 15%" }}
                  data-testid="img-founder-amos"
                />
              </div>
            </div>

            {/* Founder info */}
            <div className="flex-1 p-7 md:p-9 flex flex-col gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl md:text-3xl font-black text-white">Amos B. Kortu</h3>
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-black tracking-widest uppercase"
                    style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#a78bfa" }}
                  >
                    Founder & CEO
                  </span>
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Every great movement begins with a single, burning idea. For Amos B. Kortu, that idea was
                  rooted in a profound belief: that Africa — and Liberia in particular — deserved its own
                  world-class technology platform. A platform built not by outsiders, but by Liberians who
                  understood the heartbeat of their nation.
                </p>
              </div>

              <blockquote
                className="pl-5 py-1"
                style={{ borderLeft: "2px solid rgba(124,58,237,0.55)" }}
              >
                <p className="text-[14px] italic font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
                  "Africa's digital future is not something to wait for — it is something to build."
                </p>
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* ── Core values ── */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black tracking-[0.25em] uppercase mb-6"
            style={{ color: "rgba(255,255,255,0.22)" }}
          >
            Our Core Values
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="rounded-xl p-5 transition-all"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <p className="text-[14px] font-black text-white mb-1.5">{v.label}</p>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
