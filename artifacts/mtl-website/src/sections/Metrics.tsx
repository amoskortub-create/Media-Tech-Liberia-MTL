import { motion } from "framer-motion";

const metrics = [
  {
    value: "90/10",
    label: "Revenue Split",
    desc: "Creators keep 90% of marketplace earnings — the highest rate in West Africa",
    from: "#a78bfa",
    to: "#7c3aed",
  },
  {
    value: "60%",
    label: "Bandwidth Saved",
    desc: "Proprietary data-lite compression engine slashes mobile data usage significantly",
    from: "#06b6d4",
    to: "#0891b2",
  },
  {
    value: "1080p",
    label: "Max Bitrate",
    desc: "Full HD streaming optimized for West Africa's low-bandwidth infrastructure",
    from: "#34d399",
    to: "#10b981",
  },
  {
    value: "100%",
    label: "Self-Hosted",
    desc: "Complete data sovereignty — no foreign cloud, no hidden fees, no lock-in",
    from: "#f472b6",
    to: "#db2777",
  },
];

export function Metrics() {
  return (
    <section
      className="py-14 relative"
      id="metrics"
      style={{ background: "#080808", borderTop: "1px solid rgba(124,58,237,0.12)" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl p-6 overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${m.from}22`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: `linear-gradient(90deg, ${m.from}, ${m.to}, transparent)` }}
              />
              <div
                className="text-[2.8rem] font-black leading-none mb-2"
                style={{
                  background: `linear-gradient(135deg, ${m.from}, ${m.to})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {m.value}
              </div>
              <div className="text-[12px] font-black text-white mb-2 uppercase tracking-wider">{m.label}</div>
              <div className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
