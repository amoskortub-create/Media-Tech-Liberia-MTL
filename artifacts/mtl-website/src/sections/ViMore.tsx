import { motion } from "framer-motion";
import { Play, DollarSign, MessageCircle, ExternalLink, Download, Smartphone, Star } from "lucide-react";
import screenshot1 from "@assets/Screenshot_20260524-173421_1779748627809.jpg";
import screenshot2 from "@assets/Screenshot_20260523-045223_1779748627968.jpg";
import screenshot3 from "@assets/Screenshot_20260523-045245_1779748628179.jpg";

const VIMORE_URL = "https://www.vimore.cfd";
const APK_URL = `${import.meta.env.BASE_URL}vimore.apk`;

const features = [
  { icon: Play, label: "Social Feed + Reels + Music Hub", color: "#8b5cf6" },
  { icon: DollarSign, label: "Secure Automated Revenue Engine", color: "#10b981" },
  { icon: MessageCircle, label: "Community Messaging & Localization", color: "#3b82f6" },
];

export function ViMore() {
  return (
    <section className="py-24 relative overflow-hidden" id="viMore"
      style={{ background: "hsl(222 47% 4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="absolute inset-0 grid-bg-sm" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 border text-[11px] font-bold uppercase tracking-widest"
            style={{ background: "rgba(139,92,246,0.08)", borderColor: "rgba(139,92,246,0.25)", color: "#a78bfa" }}
          >
            <Star size={10} />
            Live Product — Available Now
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight"
          >
            ViMore
            <span style={{ background: "linear-gradient(135deg,#8b5cf6,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> — The Sovereign Economy Engine</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            West Africa's first fully self-hosted social monetization platform — built in Liberia, owned by Liberians.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex flex-col gap-5"
          >
            {/* Commission cards */}
            <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(139,92,246,0.15)" }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#a78bfa" }}>Marketplace Commission</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg text-[12px] font-bold"
                  style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", color: "#c4b5fd" }}>
                  10% — Verified Nodes
                </span>
                <span className="px-3 py-1.5 rounded-lg text-[12px] font-semibold"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
                  20% — Standard Nodes
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-2.5">
              {features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl transition-all"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${feat.color}18`, border: `1px solid ${feat.color}30` }}>
                    <feat.icon size={16} style={{ color: feat.color }} />
                  </div>
                  <span className="text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>{feat.label}</span>
                </div>
              ))}
            </div>

            {/* Monetization */}
            <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Monetization Engine</p>
              <div className="flex flex-col gap-2.5">
                {[
                  "Monthly Verification Badges",
                  "Ad Campaigns Engine for Local MSMEs",
                  "On-Demand Post Boosting via Mobile Money",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href={VIMORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 font-bold py-4 rounded-xl text-[14px] text-white transition-all"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  boxShadow: "0 0 24px rgba(139,92,246,0.4)",
                }}
                data-testid="link-open-vimore"
              >
                <ExternalLink size={15} />
                Open ViMore Web App
              </motion.a>
              <motion.a
                href={APK_URL}
                download="ViMore.apk"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 font-bold py-4 rounded-xl text-[14px] transition-all"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  color: "#34d399",
                  boxShadow: "0 0 16px rgba(16,185,129,0.15)",
                }}
                data-testid="link-download-apk"
              >
                <Download size={15} />
                Download APK
              </motion.a>
            </div>

            {/* APK note */}
            <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl"
              style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.1)" }}>
              <Smartphone size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
              <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Android APK — Install directly on your Android device. Enable "Install from unknown sources" in your settings if prompted.
              </p>
            </div>
          </motion.div>

          {/* Right: Phone stack */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex justify-center"
          >
            <div className="relative w-full max-w-[320px] mx-auto" style={{ minHeight: 500 }}>
              <motion.div
                initial={{ opacity: 0, rotate: 8, y: 20 }}
                whileInView={{ opacity: 1, rotate: 8, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -right-4 top-6 w-[185px] rounded-[28px] overflow-hidden"
                style={{ zIndex: 1, border: "3px solid rgba(139,92,246,0.3)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
              >
                <img src={screenshot3} alt="ViMore Music Hub" className="w-full object-cover object-top" style={{ maxHeight: 360 }} data-testid="img-vimore-music" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: -6, y: 28 }}
                whileInView={{ opacity: 1, rotate: -6, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="absolute -left-4 top-10 w-[185px] rounded-[28px] overflow-hidden"
                style={{ zIndex: 2, border: "3px solid rgba(59,130,246,0.3)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
              >
                <img src={screenshot2} alt="ViMore Menu" className="w-full object-cover object-top" style={{ maxHeight: 360 }} data-testid="img-vimore-menu" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mx-auto w-[240px] rounded-[34px] overflow-hidden"
                style={{ zIndex: 3, marginTop: 50, marginBottom: 40, border: "4px solid rgba(139,92,246,0.5)", boxShadow: "0 0 40px rgba(139,92,246,0.25), 0 20px 60px rgba(0,0,0,0.7)" }}
              >
                <img src={screenshot1} alt="ViMore Home Feed" className="w-full object-cover object-top" data-testid="img-vimore-feed" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
