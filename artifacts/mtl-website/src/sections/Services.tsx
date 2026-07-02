import { motion } from "framer-motion";
import { CreditCard, LayoutDashboard, ShoppingCart, GraduationCap, ArrowRight, Globe, HardDrive, Wrench, BarChart3 } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const services = [
  {
    icon: CreditCard,
    num: "01",
    color: "#34d399",
    title: "Custom FinTech & Local Payment Gateways",
    desc: "Custom billing systems, automated payroll software, and secure digital wallets integrated seamlessly with native Mobile Money APIs (Orange Money & Lonestar MTN) and commercial banking networks.",
    value: "Eliminates cross-border financial friction and manual processing overhead.",
  },
  {
    icon: LayoutDashboard,
    num: "02",
    color: "#a78bfa",
    title: "Enterprise Resource Planning (ERP) Systems",
    desc: "Lightweight, data-lite internal software built to track real-time inventory, manage personnel, maintain local client records, and generate secure corporate balance sheets.",
    value: "Operates completely on self-hosted infrastructure — no expensive foreign cloud subscriptions.",
  },
  {
    icon: ShoppingCart,
    num: "03",
    color: "#f472b6",
    title: "Next-Gen E-Commerce & Supply Chain",
    desc: "High-performance online marketplace architectures, end-to-end delivery tracking pipelines, and automated vendor payout engines optimized to load instantly under heavy network constraints.",
    value: "Empowers agricultural networks, retail lines, and local tech startups to scale regionally.",
  },
  {
    icon: GraduationCap,
    num: "04",
    color: "#fbbf24",
    title: "Bespoke EdTech & Corporate Training Portals",
    desc: "Advanced learning management platforms with localized video-compression pipelines and offline-capable lesson sync modules, custom-tailored for specialized organizations.",
    value: "Tailored for private universities, corporate onboarding pipelines, and international NGOs.",
  },
];

const managed = [
  { icon: Globe, title: "Sovereign Cloud Hosting", body: "Your product runs on our optimized, low-latency infrastructure, completely bypassing expensive foreign cloud subscription traps." },
  { icon: HardDrive, title: "Automated Backups & Redundancy", body: "Daily automated database snapshots ensuring your critical corporate data is 100% secure and instantly restorable." },
  { icon: Wrench, title: "Continuous Maintenance & Patching", body: "Real-time server monitoring, backend optimization, security protocol updates, and monthly maintenance — hands-free." },
  { icon: BarChart3, title: "Scalability On-Demand", body: "As your user base grows from Monrovia across the counties, we dynamically scale backend nodes to handle heavy traffic." },
];

export function Services() {
  return (
    <section className="py-28 relative overflow-hidden" id="services"
      style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.25em] uppercase mb-4" style={{ color: "#a78bfa" }}>
            — Enterprise Services
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.06 }} className="font-black text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}>
            Custom Software for<br />
            <span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Your Enterprise
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-[15px] max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.42)" }}>
            From FinTech to EdTech — purpose-built systems designed around West Africa's unique digital infrastructure reality.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }}
              className="rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden transition-all duration-300"
              style={{ background: "#0d0d0d", border: `1px solid ${s.color}1a` }}>
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${s.color}15, transparent 70%)` }} />
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${s.color}14`, border: `1px solid ${s.color}28` }}>
                  <s.icon size={20} style={{ color: s.color }} />
                </div>
                <span className="font-black text-[2.5rem] leading-none" style={{ color: `${s.color}14` }}>{s.num}</span>
              </div>
              <h3 className="text-[16px] font-black text-white leading-snug">{s.title}</h3>
              <p className="text-[13px] leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.42)" }}>{s.desc}</p>
              <div className="flex items-start gap-2 pt-3" style={{ borderTop: `1px solid ${s.color}14` }}>
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: s.color }} />
                <p className="text-[12px] font-bold" style={{ color: s.color }}>{s.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Managed infra */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[10px] font-black tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>
          Managed Infrastructure — Included With Every Deployment
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
          {managed.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}>
                <m.icon size={15} style={{ color: "#a78bfa" }} />
              </div>
              <h4 className="text-[13px] font-black text-white mb-2">{m.title}</h4>
              <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.36)" }}>{m.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between rounded-2xl p-7"
          style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.18)" }}>
          <div>
            <h3 className="text-xl font-black text-white mb-1">Ready to build something sovereign?</h3>
            <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>No templates. No shortcuts. Just production-grade systems built for Africa.</p>
          </div>
          <motion.button onClick={() => scrollTo("contact")} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-[13px] text-white"
            style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 24px rgba(124,58,237,0.4)" }}>
            Start Your Project <ArrowRight size={14} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
