import { motion } from "framer-motion";
import { Layers, Zap, Server, Shield, CheckCircle2, Code2, Cpu } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Capabilities() {
  const cards = [
    {
      icon: Layers,
      gradient: "from-blue-500/15 to-blue-600/5",
      border: "rgba(59,130,246,0.15)",
      iconColor: "#3b82f6",
      accent: "#3b82f6",
      title: "Full-Stack Development",
      subtitle: "Consumer & Enterprise Architectures",
      description: "High-retention architectures built for West Africa's diverse connectivity landscape — from Monrovia to regional clusters.",
      chips: ["React", "Node.js", "Appwrite", "PostgreSQL"],
    },
    {
      icon: Zap,
      gradient: "from-amber-500/15 to-amber-600/5",
      border: "rgba(245,158,11,0.15)",
      iconColor: "#f59e0b",
      accent: "#f59e0b",
      title: "Data-Lite Optimization",
      subtitle: "Compression & Bandwidth Engineering",
      description: "Specialized video compression pipelines and chunked multimedia upload protocols built to bypass high mobile data costs and network latency.",
      chips: ["FFmpeg", "WebCodecs", "HEVC", "Chunked Upload"],
    },
    {
      icon: Server,
      gradient: "from-emerald-500/15 to-emerald-600/5",
      border: "rgba(16,185,129,0.15)",
      iconColor: "#10b981",
      accent: "#10b981",
      title: "Self-Hosted Appwrite Cluster",
      subtitle: "Sovereign Cloud Infrastructure",
      description: "Operated on our own secure, fully customized self-hosted Appwrite cluster — absolute data sovereignty with no third-party cloud pricing tiers.",
      badges: [
        { icon: CheckCircle2, text: "Online & Operational" },
        { icon: Shield, text: "Absolute Data Sovereignty" },
        { icon: Zap, text: "High-Speed Execution" },
      ],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="capabilities"
      style={{ background: "hsl(222 47% 4%)" }}>
      <div className="absolute inset-0 grid-bg-sm" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 border text-[11px] font-bold uppercase tracking-widest"
            style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.2)", color: "#60a5fa" }}
          >
            <Cpu size={10} />
            Technical Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight"
          >
            Built for Africa's
            <span style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> Connectivity Reality</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Our engineering stack is purpose-built for low-bandwidth environments without sacrificing performance or security.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-2xl p-6 flex flex-col gap-5 bg-gradient-to-b ${card.gradient} transition-all duration-300 overflow-hidden`}
              style={{ border: `1px solid ${card.border}` }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${card.iconColor}18`, border: `1px solid ${card.iconColor}30` }}>
                <card.icon size={20} style={{ color: card.iconColor }} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-white mb-1">{card.title}</h3>
                <p className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: card.accent }}>{card.subtitle}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{card.description}</p>
              </div>
              {'chips' in card && card.chips && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {card.chips.map((chip) => (
                    <span key={chip} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                      style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      {chip}
                    </span>
                  ))}
                </div>
              )}
              {'badges' in card && card.badges && (
                <div className="flex flex-col gap-2 mt-auto">
                  {card.badges.map((b) => (
                    <div key={b.text} className="flex items-center gap-2">
                      <b.icon size={13} style={{ color: card.iconColor }} />
                      <span className="text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>{b.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl p-8 md:p-10"
          style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(6,182,212,0.06) 100%)", border: "1px solid rgba(59,130,246,0.2)" }}
        >
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)" }} />
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Code2 size={14} className="text-blue-400" />
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400">Our Standard</p>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">Sovereign Code. No Templates.</h3>
              <p className="text-[14px] leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.5)" }}>
                Media Tech Liberia builds production-grade, secure, data-optimized software systems tailored precisely to how your enterprise actually operates in the real world.
              </p>
            </div>
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-7 py-3.5 rounded-xl font-bold text-[13px] transition-all"
              style={{ boxShadow: "0 0 24px rgba(59,130,246,0.4)" }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
