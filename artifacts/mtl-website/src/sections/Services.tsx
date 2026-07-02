import { motion } from "framer-motion";
import { CreditCard, LayoutDashboard, ShoppingCart, GraduationCap, ArrowRight, Globe, HardDrive, Wrench, BarChart3 } from "lucide-react";

const managed = [
  {
    icon: Globe,
    emoji: "🌐",
    title: "Sovereign Cloud Hosting",
    body: "Your product runs seamlessly on our optimized, low-latency infrastructure, completely bypassing expensive foreign cloud subscription traps and hidden platform fees.",
  },
  {
    icon: HardDrive,
    emoji: "💾",
    title: "Automated Backups & System Redundancy",
    body: "We orchestrate daily automated database snapshots and state-backups, ensuring your critical corporate data is 100% secure and instantly restorable.",
  },
  {
    icon: Wrench,
    emoji: "🔧",
    title: "Continuous Maintenance & Security Patching",
    body: "Our team handles real-time server monitoring, backend optimization, security protocol updates, and monthly software maintenance without your operations skipping a single beat.",
  },
  {
    icon: BarChart3,
    emoji: "📊",
    title: "Scalability On-Demand",
    body: "As your user base or business operations grow from Monrovia across the counties, we dynamically scale your backend nodes to handle heavy data traffic smoothly.",
  },
];

const services = [
  {
    icon: CreditCard,
    emoji: "🏦",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    accent: "text-emerald-600",
    title: "Custom FinTech & Local Payment Gateways",
    description:
      "Custom billing systems, automated payroll software, and secure digital wallets integrated seamlessly with native Mobile Money APIs (Orange Money & Lonestar MTN) and commercial banking networks.",
    value: "Eliminates cross-border financial friction and manual processing overhead.",
    valueColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    icon: LayoutDashboard,
    emoji: "🏢",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    accent: "text-blue-600",
    title: "Enterprise Resource Planning (ERP) & Management Systems",
    description:
      "Lightweight, data-lite internal software frameworks built to track real-time inventory, manage personnel logging, maintain local client records, and generate secure corporate balance sheets.",
    value: "Operates completely on self-hosted infrastructure, cutting out expensive foreign cloud subscription costs.",
    valueColor: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    icon: ShoppingCart,
    emoji: "🛒",
    color: "bg-violet-50 text-violet-600 border-violet-100",
    accent: "text-violet-600",
    title: "Next-Gen E-Commerce & Supply Chain Logistics",
    description:
      "High-performance online marketplace architectures, end-to-end delivery tracking pipelines, and automated vendor payout engines optimized specifically to load instantly under heavy network constraints.",
    value: "Empowers agricultural networks, retail lines, and local tech startups to scale commerce into neighboring regional clusters.",
    valueColor: "bg-violet-50 text-violet-700 border-violet-100",
  },
  {
    icon: GraduationCap,
    emoji: "🎓",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    accent: "text-amber-600",
    title: "Bespoke EdTech & Corporate Training Portals",
    description:
      "Advanced internal learning management platforms engineered with localized video-compression pipelines and offline-capable lesson sync modules, custom-tailored for specialized organizations.",
    value: "Tailored for private universities, corporate onboarding pipelines, and international development agencies (NGOs).",
    valueColor: "bg-amber-50 text-amber-700 border-amber-100",
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Services() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100" id="services">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2"
          >
            Custom Software Development & Digital Transformation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight max-w-3xl"
          >
            Limitless Engineering: Custom Digital Architecture for Any Entity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[14px] text-slate-500 max-w-2xl leading-relaxed"
          >
            We design, build, and deploy custom sovereign digital infrastructure engineered to automate operations, secure local transactions, and perform beautifully under West Africa's unique connectivity constraints.
          </motion.p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/25 hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300 cursor-default"
            >
              {/* Icon + emoji */}
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0 ${svc.color}`}>
                  <svc.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] font-bold text-slate-900 leading-snug">{svc.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13px] text-slate-500 leading-relaxed">{svc.description}</p>

              {/* Core value pill */}
              <div className={`flex items-start gap-2 px-3 py-2.5 rounded-xl border text-[12px] font-medium leading-relaxed ${svc.valueColor}`}>
                <span className="flex-shrink-0 mt-0.5">✦</span>
                <span>{svc.value}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Managed Infrastructure premium card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative overflow-hidden rounded-2xl mb-8"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #0c1a2e 100%)",
            boxShadow: "0 0 0 1px rgba(6,182,212,0.35), 0 0 40px 0 rgba(6,182,212,0.08)",
          }}
        >
          {/* Cyan glow blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-cyan-500/8 blur-[60px] pointer-events-none" />
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 p-6 md:p-9">
            {/* Header */}
            <div className="mb-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">MTL Advantage</span>
                <span className="px-2 py-0.5 bg-cyan-500/15 border border-cyan-500/30 rounded-md text-[10px] font-bold text-cyan-300">
                  Premium Managed Service
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight">
                🚀 Full Lifecycle Product Management &{" "}
                <span className="text-cyan-400">Sovereign Hosting</span>
              </h3>
              <p className="text-[13px] text-slate-400 leading-relaxed max-w-2xl">
                We don't just hand you a folder of code and walk away. We host, scale, and fully maintain your digital application on our independent, self-hosted Appwrite production clusters.
              </p>
            </div>

            {/* Deliverables grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {managed.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="flex flex-col gap-3 bg-white/[0.04] border border-cyan-500/15 rounded-xl p-4 hover:border-cyan-500/35 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                      <item.icon size={15} className="text-cyan-400" />
                    </div>
                    <h4 className="text-[13px] font-bold text-white leading-snug">{item.title}</h4>
                  </div>
                  <p className="text-[12px] text-slate-400 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA block */}
            <div className="border-t border-cyan-500/15 pt-6 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-black uppercase tracking-widest text-cyan-400 mb-2">
                  Let Us Manage the Code. You Manage the Business.
                </p>
                <p className="text-[13px] text-slate-400 leading-relaxed max-w-xl">
                  Skip the stress of server management. Contact our engineering team today to schedule a{" "}
                  <span className="text-white font-semibold">15-minute technical discovery scope</span>. We will provide a completely customized development blueprint and a transparent, value-driven management quote tailored precisely to your entity's data needs{" "}
                  <span className="text-cyan-400 font-semibold">within 48 hours</span>.
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col sm:flex-row gap-2.5">
                <motion.a
                  href="https://wa.me/231778451835?text=Hi%20MTL%2C%20I%27d%20like%20to%20schedule%20a%20discovery%20scope%20for%20managed%20infrastructure."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black text-[13px] px-5 py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-colors whitespace-nowrap"
                  data-testid="button-managed-whatsapp"
                >
                  Schedule Discovery
                  <ArrowRight size={14} />
                </motion.a>
                <motion.button
                  onClick={() => scrollTo("contact")}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 font-semibold text-[13px] px-5 py-3 rounded-xl transition-all whitespace-nowrap"
                  data-testid="button-managed-email"
                >
                  Email Us
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom sovereign CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden bg-slate-900 rounded-2xl p-7 md:p-9"
        >
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Glow blob */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">Our Standard</p>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight">
                Sovereign Code. No Templates.
              </h3>
              <p className="text-[13px] text-slate-300 leading-relaxed max-w-xl">
                We don't deploy generic, bloated website templates. Media Tech Liberia builds production-grade, secure, data-optimized software systems tailored precisely to how your enterprise actually operates in the real world.
              </p>
            </div>
            <div className="flex-shrink-0">
              <motion.button
                onClick={() => scrollTo("contact")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-[13px] shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors whitespace-nowrap"
                data-testid="button-services-cta"
              >
                Start Your Project
                <ArrowRight size={15} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
