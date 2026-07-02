import { motion } from "framer-motion";
import { MapPin, FlaskConical, GitBranch, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Requirement Mapping & Node Engineering",
    body: "We map your exact business logic and architect data-lite parameters built specifically for West Africa's bandwidth constraints.",
    tag: "Discovery Phase",
    color: "#3b82f6",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Sandbox Prototyping on Replit",
    body: "We compile high-fidelity interactive wireframes inside a collaborative sandbox environment for real-time client feedback and iteration.",
    tag: "Design & Prototype",
    color: "#8b5cf6",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Version Control & Code Consolidation",
    body: "Your system architecture is securely versioned and pushed to isolated GitHub repositories, protecting your intellectual property at every stage.",
    tag: "Build Phase",
    color: "#10b981",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Production Deployment on Global Edge",
    body: "We launch your application onto a global CDN network, ensuring ultra-low latency, 100% uptime, and rapid loading speeds on mobile data connections.",
    tag: "Launch & Scale",
    color: "#f59e0b",
  },
];

export function DeliveryWorkflow() {
  return (
    <section className="py-24 relative overflow-hidden" id="workflow"
      style={{ background: "hsl(222 40% 6%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="absolute inset-0 grid-bg-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 border text-[11px] font-bold uppercase tracking-widest"
            style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.2)", color: "#60a5fa" }}
          >
            <GitBranch size={10} />
            MTL Architectural Delivery Pipeline
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight"
          >
            How We Deliver
            <span style={{ background: "linear-gradient(135deg,#3b82f6,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> Production Code</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Our disciplined pipeline ensures your custom platform scales seamlessly from prototype to global edge deployment.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${step.color}18` }}
            >
              {/* Top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }} />

              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}>
                  <step.icon size={18} style={{ color: step.color }} />
                </div>
                <span className="font-black text-[28px]" style={{ color: `${step.color}20` }}>{step.number}</span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest mb-2 block" style={{ color: step.color }}>
                  {step.tag}
                </span>
                <h3 className="text-[14px] font-bold text-white mb-2 leading-snug">{step.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{step.body}</p>
              </div>

              {/* Arrow connector — visible on lg */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight size={16} style={{ color: "rgba(255,255,255,0.15)" }} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
