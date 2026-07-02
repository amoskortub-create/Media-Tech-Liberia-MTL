import { motion } from "framer-motion";
import { CreditCard, LayoutDashboard, ShoppingCart, GraduationCap, ArrowRight, Globe, HardDrive, Wrench, BarChart3, Briefcase } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const managed = [
  { icon: Globe, title: "Sovereign Cloud Hosting", body: "Your product runs on our optimized, low-latency infrastructure, completely bypassing expensive foreign cloud subscription traps and hidden platform fees." },
  { icon: HardDrive, title: "Automated Backups & Redundancy", body: "We orchestrate daily automated database snapshots, ensuring your critical corporate data is 100% secure and instantly restorable." },
  { icon: Wrench, title: "Continuous Maintenance & Patching", body: "Real-time server monitoring, backend optimization, security protocol updates, and monthly software maintenance — hands-free." },
  { icon: BarChart3, title: "Scalability On-Demand", body: "As your user base grows from Monrovia across the counties, we dynamically scale your backend nodes to handle heavy data traffic smoothly." },
];

const services = [
  {
    icon: CreditCard,
    color: "#10b981",
    title: "Custom FinTech & Local Payment Gateways",
    description: "Custom billing systems, automated payroll software, and secure digital wallets integrated seamlessly with native Mobile Money APIs (Orange Money & Lonestar MTN) and commercial banking networks.",
    value: "Eliminates cross-border financial friction and manual processing overhead.",
  },
  {
    icon: LayoutDashboard,
    color: "#3b82f6",
    title: "Enterprise Resource Planning (ERP) Systems",
    description: "Lightweight, data-lite internal software built to track real-time inventory, manage personnel logging, maintain local client records, and generate secure corporate balance sheets.",
    value: "Operates completely on self-hosted infrastructure — no expensive foreign cloud subscriptions.",
  },
  {
    icon: ShoppingCart,
    color: "#8b5cf6",
    title: "Next-Gen E-Commerce & Supply Chain",
    description: "High-performance online marketplace architectures, end-to-end delivery tracking pipelines, and automated vendor payout engines optimized specifically to load instantly under heavy network constraints.",
    value: "Empowers agricultural networks, retail lines, and local tech startups to scale commerce regionally.",
  },
  {
    icon: GraduationCap,
    color: "#f59e0b",
    title: "Bespoke EdTech & Corporate Training Portals",
    description: "Advanced learning management platforms with localized video-compression and offline-capable lesson sync modules, custom-tailored for specialized organizations.",
    value: "Tailored for private universities, corporate onboarding pipelines, and international NGOs.",
  },
];

export function Services() {
  return (
    <section className="py-24 relative overflow-hidden" id="services"
      style={{ background: "hsl(222 40% 6%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 border text-[11px] font-bold uppercase tracking-widest"
            style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.2)", color: "#60a5fa" }}
          >
            <Briefcase size={10} />
            Enterprise Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight"
          >
            Custom Software for
            <span style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> Your Enterprise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            From FinTech to EdTech — purpose-built systems designed around West Africa's unique digital infrastructure reality.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${svc.color}20`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}30` }}>
                  <svc.icon size={20} style={{ color: svc.color }} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-white leading-snug">{svc.title}</h3>
                </div>
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{svc.description}</p>
              <div className="mt-auto pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: svc.color }} />
                  <p className="text-[12px] font-semibold" style={{ color: svc.color }}>{svc.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Managed infrastructure */}
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-widest mb-6"
            style={{ color: "#60a5fa" }}
          >
            Managed Infrastructure — Included With Every Deployment
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {managed.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-xl p-5 transition-all"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)" }}>
                  <item.icon size={16} className="text-blue-400" />
                </div>
                <h4 className="text-[13px] font-bold text-white mb-2">{item.title}</h4>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-between rounded-2xl p-7"
          style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}
        >
          <div>
            <h3 className="text-xl font-black text-white mb-1">Ready to build something sovereign?</h3>
            <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>Let's engineer your platform from the ground up — no templates, no shortcuts.</p>
          </div>
          <motion.button
            onClick={() => scrollTo("contact")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-7 py-3.5 rounded-xl font-bold text-[13px] transition-all"
            style={{ boxShadow: "0 0 20px rgba(59,130,246,0.35)" }}
          >
            Start Your Project
            <ArrowRight size={15} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
