import { motion } from "framer-motion";
import {
  CreditCard,
  DollarSign,
  Download,
  ExternalLink,
  Gift,
  Languages,
  MessageCircle,
  Play,
  Smartphone,
  Users,
  WalletCards,
} from "lucide-react";
import screenshot1 from "@assets/Screenshot_20260524-173421_1779748627809.jpg";
import screenshot2 from "@assets/Screenshot_20260523-045223_1779748627968.jpg";
import screenshot3 from "@assets/Screenshot_20260523-045245_1779748628179.jpg";

const VIMORE_URL = "https://www.vimore.cfd";
const APK_URL = `${import.meta.env.BASE_URL}vimore.apk`;

const features = [
  { icon: Play, label: "Social feed with posts, photos, and videos" },
  { icon: DollarSign, label: "Creator monetization via locked content (100–500 LD)" },
  { icon: Gift, label: "Gift system for fan support" },
  { icon: Users, label: "Subscription model for creators" },
  { icon: CreditCard, label: "Credit Hub for boosts and verification" },
  { icon: Smartphone, label: "Dual-carrier mobile money: Orange Money + MTN MoMo" },
  { icon: WalletCards, label: "Earnings Portal with LD breakdown" },
  { icon: Languages, label: "Auto-language detection across 6 languages" },
];

export function ViMore() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      id="viMore"
      style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="mb-14 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.25em] uppercase mb-4"
            style={{ color: "#a78bfa" }}
          >
            — Official Launch Build · v1.0.0
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-black text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(1.7rem, 4vw, 3rem)" }}
          >
            ViMore
            <span
              style={{
                background: "linear-gradient(135deg,#a78bfa,#7c3aed,#06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}— Liberia's First Homegrown Social Monetization Platform
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            A homegrown platform connecting creators, communities, and local commerce through content and mobile money.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ background: "#0d0d0d", border: "1px solid rgba(167,139,250,0.12)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.24)" }}
                  >
                    <feature.icon size={15} style={{ color: "#a78bfa" }} />
                  </div>
                  <span className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <motion.a
                href={APK_URL}
                download="ViMore-v1.0.0.apk"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-[13px] text-white"
                style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 28px rgba(124,58,237,0.35)" }}
                data-testid="link-download-apk"
              >
                <Download size={15} /> Download APK
              </motion.a>
              <motion.a
                href={VIMORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-[13px]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.78)" }}
                data-testid="link-open-vimore"
              >
                <ExternalLink size={15} /> Sign Up at vimore.cfd
              </motion.a>
            </div>
            <p className="flex items-center gap-2 mt-4 text-[12px]" style={{ color: "rgba(255,255,255,0.32)" }}>
              <MessageCircle size={13} /> Built by Media Tech Liberia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[220px] mx-auto" style={{ minHeight: 360 }}>
              <div
                className="absolute -right-4 top-4 w-[128px] rounded-[20px] overflow-hidden"
                style={{ zIndex: 1, border: "2px solid rgba(124,58,237,0.3)", boxShadow: "0 8px 40px rgba(0,0,0,0.7)", transform: "rotate(8deg)" }}
              >
                <img src={screenshot3} alt="ViMore app screen" className="w-full object-cover object-top" style={{ maxHeight: 256 }} />
              </div>
              <div
                className="absolute -left-4 top-7 w-[128px] rounded-[20px] overflow-hidden"
                style={{ zIndex: 2, border: "2px solid rgba(6,182,212,0.25)", boxShadow: "0 8px 40px rgba(0,0,0,0.7)", transform: "rotate(-6deg)" }}
              >
                <img src={screenshot2} alt="ViMore app menu" className="w-full object-cover object-top" style={{ maxHeight: 256 }} />
              </div>
              <div
                className="relative mx-auto w-[168px] rounded-[24px] overflow-hidden"
                style={{ zIndex: 3, marginTop: 38, marginBottom: 28, border: "3px solid rgba(124,58,237,0.55)", boxShadow: "0 0 40px rgba(124,58,237,0.25), 0 24px 60px rgba(0,0,0,0.8)" }}
              >
                <img src={screenshot1} alt="ViMore home feed" className="w-full object-cover object-top" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}