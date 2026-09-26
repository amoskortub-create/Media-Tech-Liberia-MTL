import { motion } from "framer-motion";
import { Cloud, Code2, Server } from "lucide-react";

const products = [
  {
    icon: Cloud,
    name: "HomeBase",
    label: "In Development",
    description: "Liberia's cloud backend for developers to build, deploy, and host their products.",
    features: [
      { icon: Server, text: "Backend infrastructure for product teams" },
      { icon: Code2, text: "Tools to build and host applications" },
    ],
    color: "#06b6d4",
  },
];

export function DevelopmentProducts() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      id="development"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="absolute inset-0 line-grid" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="mb-12 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.25em] uppercase mb-4"
            style={{ color: "#a78bfa" }}
          >
            — Building Next
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-black text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)" }}
          >
            Products in Development
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            New infrastructure and AI tools being built by Media Tech Liberia for developers and digital businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{ background: "#0d0d0d", border: `1px solid ${product.color}26` }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }} />
              <div className="flex items-start justify-between gap-5 mb-7">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${product.color}14`, border: `1px solid ${product.color}28` }}
                >
                  <product.icon size={22} style={{ color: product.color }} />
                </div>
                <span
                  className="px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase"
                  style={{ color: product.color, background: `${product.color}12`, border: `1px solid ${product.color}25` }}
                >
                  {product.label}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mb-3">{product.name}</h3>
              <p className="text-[14px] leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.48)" }}>
                {product.description}
              </p>
              <div className="flex flex-col gap-3">
                {product.features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    <feature.icon size={15} style={{ color: product.color }} />
                    <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.65)" }}>{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}