import { motion } from "framer-motion";
import { Lock, Zap, ShieldCheck, Server } from "lucide-react";

const cards = [
  {
    icon: Lock, num: "01", color: "#a78bfa",
    title: "Data Encryption & Isolation",
    body: "All custom ERP and management architectures are built with strict database tenant isolation and encrypted end-to-end using AES-256 standards. Your internal corporate numbers, employee logs, and financial records remain completely under your control.",
    tag: "AES-256 · Tenant Isolation",
  },
  {
    icon: Zap, num: "02", color: "#34d399",
    title: "Secured Payment Handshakes",
    body: "Our FinTech integrations utilize secure, cryptographic webhook handshakes with local Mobile Money APIs (Orange Money & Lonestar MTN). No transaction data is ever cached insecurely, preventing fraud at the network layer.",
    tag: "Cryptographic Webhooks · Zero Cache",
  },
  {
    icon: ShieldCheck, num: "03", color: "#06b6d4",
    title: "Self-Hosted Sovereign Nodes",
    body: "Every system we deploy runs on self-hosted Appwrite infrastructure — never on a foreign cloud provider. Your data stays within the boundaries you control, with no third-party surveillance, no vendor lock-in, and no surprise data residency violations.",
    tag: "Appwrite Powered · On-Premise",
  },
  {
    icon: Server, num: "04", color: "#fbbf24",
    title: "Infrastructure Access Control",
    body: "Role-based access permissions are enforced at both the API and database level. Employees only see what they need. Audit logs capture every sensitive operation — giving your compliance team a full, tamper-proof record of system activity.",
    tag: "RBAC · Audit Logs",
  },
];

export function Security() {
  return (
    <section className="py-28 relative overflow-hidden" id="security"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="absolute inset-0 line-grid" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="mb-20">
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.25em] uppercase mb-4" style={{ color: "#a78bfa" }}>
            — Enterprise Security & Data Sovereignty
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.06 }} className="font-black text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)" }}>
            Sovereign Infrastructure,<br />
            <span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Practical Security
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-[15px] max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.42)" }}>
            How we protect corporate intelligence and secure local financial pipelines across all our custom integrations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {cards.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.09 }} whileHover={{ y: -5 }}
              className="rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden transition-all duration-300"
              style={{ background: "#0d0d0d", border: `1px solid ${c.color}1a` }}>
              <div className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: `linear-gradient(90deg, ${c.color}80, transparent)` }} />
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${c.color}12`, border: `1px solid ${c.color}25` }}>
                  <c.icon size={20} style={{ color: c.color }} />
                </div>
                <span className="font-black text-[2.5rem] leading-none" style={{ color: `${c.color}12` }}>{c.num}</span>
              </div>
              <div>
                <h3 className="text-[16px] font-black text-white mb-3">{c.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.44)" }}>{c.body}</p>
              </div>
              <span className="mt-auto self-start px-3 py-1.5 rounded-lg text-[11px] font-black tracking-wide"
                style={{ background: `${c.color}10`, border: `1px solid ${c.color}22`, color: c.color }}>
                {c.tag}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {["Encryption Ready", "Access Controls", "Audit Logging", "Secure Integrations", "Mobile Money Support"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[12px] font-bold" style={{ color: "rgba(255,255,255,0.32)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#a78bfa" }} />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
