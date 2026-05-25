import { motion } from "framer-motion";
import { Lock, Zap, ShieldCheck, Server } from "lucide-react";

const cards = [
  {
    icon: Lock,
    emoji: "🔒",
    title: "Data Encryption & Isolation",
    body: "All custom ERP and management architectures are built with strict database tenant isolation and encrypted end-to-end using AES-256 standards. Your internal corporate numbers, employee logs, and financial records remain completely under your control.",
    tag: "AES-256 · Tenant Isolation",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    iconBg: "bg-blue-50 text-blue-600 border-blue-100",
    glow: "from-blue-500/10",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Secured Payment Handshakes",
    body: "Our FinTech integrations utilize secure, cryptographic webhook handshakes with local Mobile Money APIs (Orange Money & Lonestar MTN). No transaction data is ever cached insecurely, preventing fraud at the network layer.",
    tag: "Cryptographic Webhooks · Zero Cache",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    glow: "from-emerald-500/10",
  },
  {
    icon: ShieldCheck,
    emoji: "🛡️",
    title: "Self-Hosted Sovereign Nodes",
    body: "Every system we deploy runs on self-hosted Appwrite infrastructure — never on a foreign cloud provider. Your data stays within the boundaries you control, with no third-party surveillance, no vendor lock-in, and no surprise data residency violations.",
    tag: "Appwrite Powered · On-Premise",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
    iconBg: "bg-violet-50 text-violet-600 border-violet-100",
    glow: "from-violet-500/10",
  },
  {
    icon: Server,
    emoji: "🖥️",
    title: "Infrastructure Access Control",
    body: "Role-based access permissions are enforced at both the API and database level. Employees only see what they need. Audit logs capture every sensitive operation — giving your compliance team a full, tamper-proof record of system activity.",
    tag: "RBAC · Audit Logs",
    tagColor: "bg-amber-50 text-amber-700 border-amber-100",
    iconBg: "bg-amber-50 text-amber-600 border-amber-100",
    glow: "from-amber-500/10",
  },
];

export function Security() {
  return (
    <section className="py-20 bg-slate-900" id="security">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-2"
          >
            Enterprise Security & Data Sovereignty
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight max-w-2xl"
          >
            Sovereign Infrastructure,{" "}
            <span className="text-blue-400">Bulletproof Security</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[14px] text-slate-400 max-w-xl leading-relaxed"
          >
            How we protect corporate intelligence and secure local financial pipelines across our custom integrations.
          </motion.p>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative overflow-hidden bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 flex flex-col gap-4 hover:border-slate-600 transition-all duration-300"
            >
              {/* Subtle glow */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.glow} to-transparent`} />

              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0 ${card.iconBg}`}>
                <card.icon size={18} />
              </div>

              <div>
                <h3 className="text-[15px] font-bold text-white mb-2 leading-snug">{card.title}</h3>
                <p className="text-[13px] text-slate-400 leading-relaxed">{card.body}</p>
              </div>

              {/* Tag */}
              <div className="mt-auto">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-lg border text-[11px] font-semibold tracking-wide ${card.tagColor}`}>
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
          transition={{ delay: 0.25 }}
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {["End-to-End Encrypted", "No Foreign Cloud", "Audit Logging", "Zero Vendor Lock-In", "Mobile Money Secured"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[12px] text-slate-400 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
