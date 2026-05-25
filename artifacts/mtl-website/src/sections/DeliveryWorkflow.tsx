import { motion } from "framer-motion";
import { MapPin, FlaskConical, GitBranch, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Requirement Mapping & Node Engineering",
    body: "We map your exact business logic and architect data-lite parameters built specifically for West Africa's bandwidth constraints.",
    tag: "Discovery Phase",
    color: "text-blue-400",
    border: "border-blue-500/40",
    iconBg: "bg-blue-500/15 text-blue-400",
    dot: "bg-blue-500",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Sandbox Prototyping on Replit",
    body: "We compile high-fidelity interactive wireframes inside a collaborative sandbox environment for real-time client feedback.",
    tag: "Design & Prototype",
    color: "text-violet-400",
    border: "border-violet-500/40",
    iconBg: "bg-violet-500/15 text-violet-400",
    dot: "bg-violet-500",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Version Control & Code Consolidation",
    body: "Your system architecture is securely versioned and pushed to isolated GitHub repositories, protecting your intellectual property.",
    tag: "Build Phase",
    color: "text-emerald-400",
    border: "border-emerald-500/40",
    iconBg: "bg-emerald-500/15 text-emerald-400",
    dot: "bg-emerald-500",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Production Deployment on Vercel Global Edge",
    body: "We launch your application onto a global CDN network, ensuring ultra-low latency, 100% uptime, and rapid loading speeds on mobile data connections.",
    tag: "Launch & Scale",
    color: "text-amber-400",
    border: "border-amber-500/40",
    iconBg: "bg-amber-500/15 text-amber-400",
    dot: "bg-amber-500",
  },
];

export function DeliveryWorkflow() {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800" id="workflow">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-2"
          >
            MTL Architectural Delivery Pipeline
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight max-w-2xl"
          >
            How We Deliver{" "}
            <span className="text-blue-400">Production Code</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[14px] text-slate-400 max-w-xl leading-relaxed"
          >
            Our disciplined pipeline ensures your custom platform scales seamlessly from prototype to global edge deployment.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-[26px] top-6 bottom-6 w-px bg-gradient-to-b from-blue-500/40 via-emerald-500/30 to-amber-500/20" />

          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ x: 4 }}
                className={`relative flex flex-col sm:flex-row gap-4 bg-slate-800/50 border ${step.border} rounded-2xl p-5 sm:p-6 hover:bg-slate-800/80 transition-all duration-300`}
              >
                {/* Step dot on timeline (md+) */}
                <div className="hidden md:flex flex-shrink-0 w-[52px] items-start justify-center pt-1">
                  <div className={`w-3.5 h-3.5 rounded-full ${step.dot} ring-4 ring-slate-900 flex-shrink-0 mt-1`} />
                </div>

                {/* Icon */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${step.iconBg}`}>
                  <step.icon size={18} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-[11px] font-black tracking-widest ${step.color}`}>STEP {step.number}</span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${step.border} ${step.color} bg-transparent`}>
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-[13px] text-slate-400 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 text-center"
        >
          <p className="text-[13px] text-blue-300 leading-relaxed max-w-xl mx-auto">
            <span className="font-bold text-blue-200">Every project includes a free discovery session.</span> We scope your requirements, estimate timelines, and provide a transparent fixed-cost proposal — before a single line of code is written.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
