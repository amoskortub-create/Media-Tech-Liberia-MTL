import { motion } from "framer-motion";
import { Bot, ExternalLink, KeyRound, MessageCircle, BarChart3 } from "lucide-react";

const products = [
  {
    title: "Mesurado AI Assistant",
    description: "Our native, high-performance conversational AI and platform guide. Always online and ready to assist.",
    href: "https://mesurado.mediatechliberia.online",
    cta: "Chat Now",
    image: "/images/mesurado-chat-screenshot.jpg",
    imageAlt: "Mesurado AI Chat Interface",
    logo: "/images/mesurado-ai-logo.jpg",
    color: "#06b6d4",
    features: [
      { icon: MessageCircle, text: "Conversational assistance, always available" },
      { icon: Bot, text: "Native Mesurado AI experience" },
    ],
  },
  {
    title: "Mesurado API & Developer Dashboard",
    description: "The complete API gateway for developers. Manage API keys, track token usage, and integrate Mesurado models directly into your own applications.",
    href: "https://aidash.mediatechliberia.online",
    cta: "Developer Portal",
    image: "/images/mesurado-dev-screenshot.jpg",
    imageAlt: "Mesurado Developer Dashboard",
    logo: "/images/mesurado-ai-logo.jpg",
    color: "#a78bfa",
    features: [
      { icon: KeyRound, text: "API key and access management" },
      { icon: BarChart3, text: "Token usage tracking and analytics" },
    ],
  },
];

export function AIInfrastructure() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      id="aiInfrastructure"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="absolute inset-0 line-grid" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="mb-12 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.25em] uppercase mb-4"
            style={{ color: "#06b6d4" }}
          >
            — AI Infrastructure
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-black text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)" }}
          >
            Mesurado AI is live
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            Production-ready AI tools for people who want an intelligent assistant and developers who want to build with Mesurado models.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden group"
              style={{ background: "#0d0d0d", border: `1px solid ${product.color}26` }}
            >
              <div
                className="h-52 sm:h-64 overflow-hidden"
                style={{ borderBottom: `1px solid ${product.color}20`, background: `${product.color}08` }}
              >
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-7 relative">
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }}
                />
                <div className="flex items-start justify-between gap-5 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${product.color}14`, border: `1px solid ${product.color}28` }}
                  >
                    <img
                      src={product.logo}
                      alt="Mesurado AI logo"
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <span
                    className="px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase"
                    style={{ color: product.color, background: `${product.color}12`, border: `1px solid ${product.color}25` }}
                  >
                    Live
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{product.title}</h3>
                <p className="text-[14px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.48)" }}>
                  {product.description}
                </p>
                <div className="flex flex-col gap-3 mb-7">
                  {product.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      <feature.icon size={15} style={{ color: product.color }} />
                      <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.65)" }}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                <motion.a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 py-4 rounded-xl font-black text-[13px] text-white"
                  style={{ background: `linear-gradient(135deg, ${product.color}, ${product.color}b8)`, boxShadow: `0 0 28px ${product.color}24` }}
                >
                  <ExternalLink size={15} /> {product.cta}
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}