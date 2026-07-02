import { motion } from "framer-motion";

export function Metrics() {
  const metrics = [
    { value: "90/10", label: "Revenue Split", desc: "Creators keep 90% of marketplace earnings" },
    { value: "60%", label: "Bandwidth Saved", desc: "Via our data-lite compression engine" },
    { value: "1080p", label: "Max Bitrate", desc: "Full HD streaming on low-bandwidth networks" },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100" id="metrics">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-slate-200 rounded-xl p-7 group hover:border-primary/40 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300"
            >
              <span className="text-4xl font-black text-primary block mb-1">{metric.value}</span>
              <span className="text-[13px] font-bold text-slate-800 block mb-1">{metric.label}</span>
              <span className="text-[12px] text-slate-400 leading-relaxed">{metric.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
