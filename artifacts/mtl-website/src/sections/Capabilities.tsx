import { motion } from "framer-motion";
import { Layers, Zap, Server, CheckCircle2, Shield, Code2 } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Capabilities() {
  const cards = [
    {
      icon: Layers,
      num: "01",
      title: "Full-Stack Development",
      sub: "Consumer & Enterprise Architectures",
      body: "High-retention architectures built for West Africa's diverse connectivity landscape — from Monrovia to regional clusters.",
      chips: ["React", "Node.js", "Appwrite", "PostgreSQL"],
      color: "#a78bfa",
    },
    {
      icon: Zap,
      num: "02",
      title: "Data-Lite Optimization",
      sub: "Compression & Bandwidth Engineering",
      body: "Specialized video compression pipelines and chunked multimedia upload protocols built to bypass high mobile data costs and network latency.",
      chips: ["FFmpeg", "WebCodecs", "HEVC", "Chunked Upload"],
      color: "#34d399",
    },
    {
      icon: Server,
      num: "03",
      title: "Self-Hosted Appwrite Cluster",
      sub: "Sovereign Cloud Infrastructure",
      body: "Operated on our own secure, fully customized self-hosted Appwrite cluster — absolute data sovereignty with no third-party cloud pricing tiers.",
      badges: [
        { icon: CheckCircle2, text: "Online & Operational" },
        { icon: Shield, text: "Absolute Data Sovereignty" },
        { icon: Zap, text: "High-Speed Execution" },
      ],
      color: "#06b6d4",
    },
  ];

  return (
    <section
      className="py-28 relative overflow-hidden"
      id="capabilities"
      style={{ background: "#050505" }}
    >
      <div className="absolute inset-0 line-grid" />
      <div
        className="absolute -top-32 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Label + heading */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.25em] uppercase mb-4"
            style={{ color: "#a78bfa" }}
          >
            — Technical Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-black leading-tight text-white mb-5"
            style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)" }}
          >
            Built for Africa's
            <br />
            <span style={{
              background: "linear-gradient(135deg,#a78bfa,#7c3aed,#06b6d4)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>Connectivity Reality</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            Our engineering stack is purpose-built for low-bandwidth environments without sacrificing performance or security.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-7 flex flex-col gap-6 relative overflow-hidden transition-all duration-300"
              style={{ background: "#0d0d0d", border: `1px solid ${c.color}1a` }}
            >
              {/* Gradient corner */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${c.color}18, transparent 70%)` }}
              />
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${c.color}14`, border: `1px solid ${c.color}28` }}>
                  <c.icon size={20} style={{ color: c.color }} />
                </div>
                <span className="font-black text-[2.5rem] leading-none" style={{ color: `${c.color}15` }}>{c.num}</span>
              </div>
              <div>
                <p className="text-[11px] font-black tracking-widest uppercase mb-2" style={{ color: c.color }}>{c.sub}</p>
                <h3 className="text-[17px] font-black text-white mb-3 leading-snug">{c.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.44)" }}>{c.body}</p>
              </div>
              {"chips" in c && c.chips && (
                <div className="flex flex-wrap gap-2">
                  {c.chips.map((chip) => (
                    <span key={chip} className="px-2.5 py-1 rounded-md text-[11px] font-bold"
                      style={{ background: `${c.color}10`, border: `1px solid ${c.color}22`, color: c.color }}>
                      {chip}
                    </span>
                  ))}
                </div>
              )}
              {"badges" in c && c.badges && (
                <div className="flex flex-col gap-2">
                  {c.badges.map((b) => (
                    <div key={b.text} className="flex items-center gap-2">
                      <b.icon size={13} style={{ color: c.color }} />
                      <span className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>{b.text}</span>
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
          className="relative overflow-hidden rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
          style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.06))", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="relative z-10 flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Code2 size={13} style={{ color: "#a78bfa" }} />
              <span className="text-[11px] font-black tracking-widest uppercase" style={{ color: "#a78bfa" }}>Our Standard</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Sovereign Code. No Templates.</h3>
            <p className="text-[14px] leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.45)" }}>
              Media Tech Liberia builds production-grade, secure, data-optimized software systems tailored precisely to how your enterprise actually operates.
            </p>
          </div>
          <motion.button
            onClick={() => scrollTo("contact")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 flex-shrink-0 px-8 py-4 rounded-xl font-black text-[13px] text-white"
            style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 28px rgba(124,58,237,0.4)" }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
