import { motion } from "framer-motion";
import { Layers, Zap, Server, Shield, CheckCircle2 } from "lucide-react";

export function Capabilities() {
  const cards = [
    {
      icon: Layers,
      title: "Full-Stack Development",
      description: "High-retention architectures built for West Africa's diverse connectivity landscape.",
      chips: ["React", "Node.js", "Appwrite", "PostgreSQL"],
      badges: []
    },
    {
      icon: Zap,
      title: "Data-Lite Optimization",
      description: "Specialized video compression pipelines and chunked multimedia upload protocols built to bypass high mobile data costs and network latency.",
      chips: ["FFmpeg", "WebCodecs", "Chunked Upload", "HEVC"],
      badges: []
    },
    {
      icon: Server,
      title: "Self-Hosted Appwrite Cluster",
      description: "Operated on an independent, secure, fully customized self-hosted cluster to give absolute data sovereignty and avoid third-party pricing tiers.",
      chips: [],
      badges: [
        { icon: CheckCircle2, text: "Online", color: "text-green-500" },
        { icon: Shield, text: "Absolute Data Sovereignty", color: "text-primary" },
        { icon: Zap, text: "High-Speed Execution", color: "text-amber-500" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-background relative z-10" id="capabilities">
      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Built for Africa's Connectivity Reality
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Engineering solutions that perform under constraint — not around it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-white/5 rounded-[24px] p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 group-hover:bg-primary/10 transition-colors duration-500" />
              
              <card.icon size={40} className="text-primary mb-6" />
              
              <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{card.description}</p>
              
              <div className="mt-auto">
                {card.chips.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {card.chips.map(chip => (
                      <span key={chip} className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-foreground/80">
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
                
                {card.badges.length > 0 && (
                  <div className="flex flex-col gap-3">
                    {card.badges.map((badge, j) => (
                      <div key={j} className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                        <badge.icon size={14} className={badge.color} />
                        <span className="text-xs font-medium text-foreground/90">{badge.text}</span>
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
