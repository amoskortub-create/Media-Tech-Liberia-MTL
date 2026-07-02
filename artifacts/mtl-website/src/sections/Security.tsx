import { motion } from "framer-motion";
import { Lock, Zap, ShieldCheck, Server, Shield } from "lucide-react";

const cards = [
  {
    icon: Lock,
    title: "Data Encryption & Isolation",
    body: "All custom ERP and management architectures are built with strict database tenant isolation and encrypted end-to-end using AES-256 standards. Your internal corporate numbers, employee logs, and financial records remain completely under your control.",
    tag: "AES-256 · Tenant Isolation",
    color: "#3b82f6",
  },
  {
    icon: Zap,
    title: "Secured Payment Handshakes",
    body: "Our FinTech integrations utilize secure, cryptographic webhook handshakes with local Mobile Money APIs (Orange Money & Lonestar MTN). No transaction data is ever cached insecurely, preventing fraud at the network layer.",
    tag: "Cryptographic Webhooks · Zero Cache",
    color: "#10b981",
  },
  {
    icon: ShieldCheck,
    title: "Self-Hosted Sovereign Nodes",
    body: "Every system we deploy runs on self-hosted Appwrite infrastructure — never on a foreign cloud provider. Your data stays within the boundaries you control, with no third-party surveillance, no vendor lock-in, and no surprise data residency violations.",
    tag: "Appwrite Powered · On-Premise",
    color: "#8b5cf6",
  },
  {
    icon: Server,
    title: "Infrastructure Access Control",
    body: "Role-based access permissions are enforced at both the API and database level. Employees only see what they need. Audit logs capture every sensitive operation — giving your compliance team a full, tamper-proof record of system activity.",
    tag: "RBAC · Audit Logs",
    color: "#f59e0b",
  },
];

export function Security() {
  return (
    <section className="py-24 relative overflow-hidden" id="security"
      style={{ background: "hsl(222 47% 4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 border text-[11px] font-bold uppercase tracking-widest"
            style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.2)", color: "#60a5fa" }}
          >
            <Shield size={10} />
            Enterprise Security & Data Sovereignty
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight max-w-3xl"
          >
            Sovereign Infrastructure,
            <span style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> Bulletproof Security</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            How we protect corporate intelligence and secure local financial pipelines across all our custom integrations.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${card.color}18`,
              }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }} />

              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${card.color}12`, border: `1px solid ${card.color}25` }}>
                <card.icon size={18} style={{ color: card.color }} />
              </div>

              <div>
                <h3 className="text-[15px] font-bold text-white mb-2">{card.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>{card.body}</p>
              </div>

              <div className="mt-auto">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide"
                  style={{ background: `${card.color}10`, border: `1px solid ${card.color}25`, color: card.color }}>
                  {card.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {["End-to-End Encrypted", "No Foreign Cloud", "Audit Logging", "Zero Vendor Lock-In", "Mobile Money Secured"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
