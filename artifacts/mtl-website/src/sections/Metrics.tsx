import { motion } from "framer-motion";

export function Metrics() {
  const metrics = [
    {
      value: "90/10",
      label: "Revenue Split",
      desc: "Creators keep 90% of marketplace earnings — the highest rate in West Africa",
      accent: "from-blue-500 to-blue-600",
      glow: "rgba(59,130,246,0.2)",
      border: "rgba(59,130,246,0.15)",
    },
    {
      value: "60%",
      label: "Bandwidth Saved",
      desc: "Our proprietary data-lite compression engine slashes mobile data usage",
      accent: "from-cyan-500 to-cyan-600",
      glow: "rgba(6,182,212,0.2)",
      border: "rgba(6,182,212,0.15)",
    },
    {
      value: "1080p",
      label: "Max Bitrate",
      desc: "Full HD streaming optimized for West Africa's low-bandwidth infrastructure",
      accent: "from-emerald-500 to-emerald-600",
      glow: "rgba(16,185,129,0.2)",
      border: "rgba(16,185,129,0.15)",
    },
    {
      value: "100%",
      label: "Self-Hosted",
      desc: "Complete data sovereignty — no foreign cloud, no hidden fees, no lock-in",
      accent: "from-violet-500 to-violet-600",
      glow: "rgba(139,92,246,0.2)",
      border: "rgba(139,92,246,0.15)",
    },
  ];

  return (
    <section className="py-16" id="metrics" style={{ background: "hsl(222 47% 5%)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 group"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${metric.border}`,
                boxShadow: `0 0 30px ${metric.glow}`,
              }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${metric.accent} opacity-70`} />

              <span
                className={`text-5xl font-black block mb-2 bg-gradient-to-r ${metric.accent} bg-clip-text`}
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                {metric.value}
              </span>
              <span className="text-[13px] font-bold text-white/90 block mb-2">{metric.label}</span>
              <span className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                {metric.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
