import { motion } from "framer-motion";
import { Layers, Zap, Server, Shield, CheckCircle2 } from "lucide-react";

export function Capabilities() {
  const cards = [
    {
      icon: Layers,
      color: "bg-blue-50 text-blue-600",
      title: "Full-Stack Development",
      subtitle: "Consumer & Enterprise Architectures",
      description: "High-retention architectures built for West Africa's diverse connectivity landscape.",
      chips: ["React", "Node.js", "Appwrite", "PostgreSQL"],
      badges: [],
    },
    {
      icon: Zap,
      color: "bg-amber-50 text-amber-600",
      title: "Data-Lite Optimization",
      subtitle: "Compression & Bandwidth Engineering",
      description: "Specialized video compression pipelines and chunked multimedia upload protocols built to bypass high mobile data costs and network latency.",
      chips: ["FFmpeg", "WebCodecs", "Chunked Upload", "HEVC"],
      badges: [],
    },
    {
      icon: Server,
      color: "bg-emerald-50 text-emerald-600",
      title: "Self-Hosted Appwrite Cluster",
      subtitle: "Independent Technical Infrastructure",
      description: "Operated on our own secure, fully customized self-hosted Appwrite cluster — absolute data sovereignty with no third-party cloud pricing tiers.",
      chips: [],
      badges: [
        { icon: CheckCircle2, text: "Online", color: "text-emerald-600 bg-emerald-50" },
        { icon: Shield, text: "Absolute Data Sovereignty", color: "text-blue-600 bg-blue-50" },
        { icon: Zap, text: "High-Speed Execution", color: "text-amber-600 bg-amber-50" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white" id="capabilities">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-widest text-primary mb-3"
          >
            Technical Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-3 max-w-2xl leading-tight"
          >
            Built for Africa's Connectivity Reality
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] text-slate-500 max-w-xl"
          >
            Engineering solutions that perform under constraint — not around it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col gap-5 hover:border-primary/30 hover:shadow-lg hover:shadow-slate-200/80 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.color}`}>
                <card.icon size={20} />
              </div>

              <div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-0.5">{card.title}</h3>
                <p className="text-[11px] font-semibold text-primary uppercase tracking-wide">{card.subtitle}</p>
              </div>

              <p className="text-[13px] text-slate-500 leading-relaxed flex-1">{card.description}</p>

              <div>
                {card.chips.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {card.chips.map((chip) => (
                      <span key={chip} className="text-[11px] font-mono bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-slate-600 font-medium">
                        {chip}
                      </span>
                    ))}
                  </div>
                )}

                {card.badges.length > 0 && (
                  <div className="flex flex-col gap-2">
                    {card.badges.map((badge, j) => (
                      <div key={j} className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-semibold ${badge.color}`}>
                        <badge.icon size={13} />
                        {badge.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
