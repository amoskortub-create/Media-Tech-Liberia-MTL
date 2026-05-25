import { motion } from "framer-motion";

export function Metrics() {
  const metrics = [
    { value: "90/10", label: "Revenue Split" },
    { value: "60%", label: "Bandwidth Saved" },
    { value: "1080p", label: "Max Bitrate" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-background relative z-10" id="metrics">
      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {metrics.map((metric, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="bg-card border border-white/5 p-8 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(0,210,255,0.1)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-5xl md:text-6xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:text-primary transition-colors duration-500">{metric.value}</span>
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">{metric.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
