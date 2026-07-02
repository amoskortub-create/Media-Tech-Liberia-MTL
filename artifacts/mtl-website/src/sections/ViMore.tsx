import { motion } from "framer-motion";
import { Play, DollarSign, MessageCircle, ExternalLink, Download, Smartphone } from "lucide-react";
import screenshot1 from "@assets/Screenshot_20260524-173421_1779748627809.jpg";
import screenshot2 from "@assets/Screenshot_20260523-045223_1779748627968.jpg";
import screenshot3 from "@assets/Screenshot_20260523-045245_1779748628179.jpg";

const VIMORE_URL = "https://www.vimore.cfd";
const APK_URL = `${import.meta.env.BASE_URL}vimore.apk`;

export function ViMore() {
  return (
    <section className="py-28 relative overflow-hidden" id="viMore"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="absolute inset-0 line-grid" />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 65%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.25em] uppercase mb-4" style={{ color: "#a78bfa" }}>
            — Live Product · Available Now
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.06 }} className="font-black text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}>
            ViMore
            <span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {" "}— The Sovereign Economy Engine
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-[15px] max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.42)" }}>
            West Africa's first fully self-hosted social monetization platform — built in Liberia, owned by Liberians.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex-1 flex flex-col gap-5">

            {/* Commission */}
            <div className="rounded-2xl p-5" style={{ background: "#0d0d0d", border: "1px solid rgba(167,139,250,0.12)" }}>
              <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(167,139,250,0.6)" }}>Marketplace Commission</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg text-[12px] font-black"
                  style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.28)", color: "#c4b5fd" }}>
                  10% — Verified Nodes
                </span>
                <span className="px-3 py-1.5 rounded-lg text-[12px] font-semibold"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}>
                  20% — Standard Nodes
                </span>
              </div>
            </div>

            {/* Features */}
            {[
              { icon: Play, label: "Social Feed + Reels + Music Hub", color: "#a78bfa" },
              { icon: DollarSign, label: "Secure Automated Revenue Engine", color: "#34d399" },
              { icon: MessageCircle, label: "Community Messaging & Localization", color: "#06b6d4" },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3.5 p-4 rounded-xl transition-all"
                style={{ background: "#0d0d0d", border: `1px solid ${f.color}14` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${f.color}12`, border: `1px solid ${f.color}25` }}>
                  <f.icon size={16} style={{ color: f.color }} />
                </div>
                <span className="text-[13px] font-bold" style={{ color: "rgba(255,255,255,0.75)" }}>{f.label}</span>
              </div>
            ))}

            {/* Monetization list */}
            <div className="rounded-xl p-5" style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.05)" }}>
              <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.28)" }}>Monetization Engine</p>
              {["Monthly Verification Badges", "Ad Campaigns Engine for Local MSMEs", "On-Demand Post Boosting via Mobile Money"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 py-2 text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#a78bfa" }} />
                  {item}
                </div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a href={VIMORE_URL} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-[13px] text-white"
                style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 28px rgba(124,58,237,0.4)" }}
                data-testid="link-open-vimore">
                <ExternalLink size={14} /> Open Web App
              </motion.a>
              <motion.a href={APK_URL} download="ViMore.apk"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-[13px]"
                style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.28)", color: "#34d399", boxShadow: "0 0 16px rgba(52,211,153,0.12)" }}
                data-testid="link-download-apk">
                <Download size={14} /> Download APK
              </motion.a>
            </div>
            <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl"
              style={{ background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.1)" }}>
              <Smartphone size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#34d399" }} />
              <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                Android APK — Enable "Install from unknown sources" in your settings to install.
              </p>
            </div>
          </motion.div>

          {/* Right: phone stack */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex-1 flex justify-center w-full">
            <div className="relative w-full max-w-[320px] mx-auto" style={{ minHeight: 520 }}>
              <motion.div initial={{ opacity: 0, rotate: 8, y: 20 }} whileInView={{ opacity: 1, rotate: 8, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="absolute -right-4 top-6 w-[185px] rounded-[28px] overflow-hidden"
                style={{ zIndex: 1, border: "2px solid rgba(124,58,237,0.3)", boxShadow: "0 8px 40px rgba(0,0,0,0.7)" }}>
                <img src={screenshot3} alt="ViMore Music Hub" className="w-full object-cover object-top" style={{ maxHeight: 370 }} />
              </motion.div>
              <motion.div initial={{ opacity: 0, rotate: -6, y: 28 }} whileInView={{ opacity: 1, rotate: -6, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.15 }}
                className="absolute -left-4 top-10 w-[185px] rounded-[28px] overflow-hidden"
                style={{ zIndex: 2, border: "2px solid rgba(6,182,212,0.25)", boxShadow: "0 8px 40px rgba(0,0,0,0.7)" }}>
                <img src={screenshot2} alt="ViMore Menu" className="w-full object-cover object-top" style={{ maxHeight: 370 }} />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="relative mx-auto w-[245px] rounded-[34px] overflow-hidden"
                style={{ zIndex: 3, marginTop: 55, marginBottom: 40, border: "3px solid rgba(124,58,237,0.55)", boxShadow: "0 0 50px rgba(124,58,237,0.25), 0 24px 60px rgba(0,0,0,0.8)" }}>
                <img src={screenshot1} alt="ViMore Home Feed" className="w-full object-cover object-top" data-testid="img-vimore-feed" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
