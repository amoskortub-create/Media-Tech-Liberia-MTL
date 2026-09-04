import { motion } from "framer-motion";
import { MapPin, FlaskConical, GitBranch, Rocket } from "lucide-react";

const steps = [
  {
    num: "01", icon: MapPin, color: "#a78bfa",
    title: "Requirement Mapping & Node Engineering",
    body: "We map your exact business logic and architect data-lite parameters built specifically for West Africa's bandwidth constraints.",
    tag: "Discovery Phase",
  },
  {
    num: "02", icon: FlaskConical, color: "#06b6d4",
    title: "Prototype and Client Review",
    body: "We compile high-fidelity interactive wireframes inside a collaborative sandbox environment for real-time client feedback and iteration.",
    tag: "Design & Prototype",
  },
  {
    num: "03", icon: GitBranch, color: "#34d399",
    title: "Version Control & Code Consolidation",
    body: "Your system architecture is securely versioned and pushed to isolated GitHub repositories, protecting your intellectual property at every stage.",
    tag: "Build Phase",
  },
  {
    num: "04", icon: Rocket, color: "#fbbf24",
    title: "Production Deployment on Global Edge",
    body: "We launch your application with an appropriate hosting and delivery setup, then monitor performance and improve it as usage grows.",
    tag: "Launch & Scale",
  },
];

export function DeliveryWorkflow() {
  return (
    <section className="py-28 relative overflow-hidden" id="workflow"
      style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="mb-20">
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.25em] uppercase mb-4" style={{ color: "#a78bfa" }}>
            — MTL Architectural Delivery Pipeline
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.06 }} className="font-black text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)" }}>
            How We Deliver<br />
            <span style={{ background: "linear-gradient(135deg,#34d399,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Production Code
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-[15px] max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.42)" }}>
            Our disciplined pipeline ensures your custom platform scales seamlessly from prototype to global edge deployment.
          </motion.p>
        </div>

        {/* Steps — horizontal on lg, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}
              className="rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden transition-all duration-300"
              style={{ background: "#0d0d0d", border: `1px solid ${s.color}1a` }}>
              <div className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: `linear-gradient(90deg, ${s.color}90, transparent)` }} />
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${s.color}12`, border: `1px solid ${s.color}25` }}>
                  <s.icon size={20} style={{ color: s.color }} />
                </div>
                <span className="font-black text-[2.8rem] leading-none" style={{ color: `${s.color}12` }}>{s.num}</span>
              </div>
              <div>
                <p className="text-[10px] font-black tracking-widest uppercase mb-2" style={{ color: s.color }}>{s.tag}</p>
                <h3 className="text-[15px] font-black text-white mb-3 leading-snug">{s.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
