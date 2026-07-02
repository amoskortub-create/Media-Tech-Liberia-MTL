import { motion } from "framer-motion";
import amosPhoto from "@assets/Face_Clean-up_Studio_In_a_studio_portrait_style_a_man_with_dar_1779748900032.jpg";

const values = [
  { emoji: "🌍", label: "Africa-First", desc: "Built for African voices and communities." },
  { emoji: "🔒", label: "Integrity", desc: "Honest, transparent, and trustworthy." },
  { emoji: "⚡", label: "Innovation", desc: "Always pushing the boundaries of what's possible." },
  { emoji: "🤝", label: "Empathy", desc: "Led by genuine care for our community." },
];

const tags = ["Software Engineering", "West Africa Tech", "Creator Economy", "Digital Sovereignty"];

const story = [
  "Every great movement begins with a single, burning idea. For Amos B. Kortu, that idea was rooted in a profound belief: that Africa — and Liberia in particular — deserved its own world-class technology platform. A platform built not by outsiders, but by Liberians who understood the heartbeat of their nation, its culture, its stories, and its people.",
  "Amos's conviction was simple but radical: technology is a language, and every people deserves to speak it in their own voice. He believed that Liberia's young generation was brimming with talent — developers, designers, creators, storytellers — who simply needed the right stage.",
  "Media Tech Liberia didn't just want to build a product. It wanted to build a movement. A place where creators could monetize their talent, where communities could form and flourish, where stories from the streets of Monrovia could reach every corner of the globe.",
  "Under Amos's leadership, Media Tech Liberia is built to empower, train, and create an ecosystem for young Liberian developers, designers, and creatives — proving that the talent to build world-class technology has always existed right here in Africa.",
];

export function Leadership() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="about">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Section label */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2"
          >
            Executive Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-black text-slate-900 leading-tight"
          >
            The Visionary Who Sparked the Dream
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* Left: full portrait card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-4"
          >
            {/* Portrait photo — tall rectangle, face fully visible */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="w-full h-72 sm:h-80 overflow-hidden">
                <img
                  src={amosPhoto}
                  alt="Amos B. Kortu — Founder & CEO"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 15%" }}
                  data-testid="img-founder-amos"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[16px] font-black text-slate-900 leading-snug">Amos B. Kortu</h3>
                <p className="text-[12px] text-primary font-semibold mt-0.5 mb-4">Founder & CEO · Media Tech Liberia</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-md text-[11px] font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-primary rounded-2xl p-5 text-white"
            >
              <p className="text-[13px] font-semibold leading-relaxed italic mb-3">
                "Africa's digital future is not something to wait for — it is something to build."
              </p>
              <p className="text-[11px] text-white/70 font-medium">— Amos B. Kortu, Founder & CEO</p>
            </motion.div>
          </motion.div>

          {/* Right: story */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 min-w-0"
          >
            <div className="space-y-4 mb-10">
              {story.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="text-[14px] text-slate-600 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="text-[14px] font-semibold text-primary leading-relaxed"
              >
                The mission is far from finished. In fact, it has only just begun. New features are coming. New markets are opening. And through it all, the same fire that started in the heart of a Liberian dreamer continues to burn — lighting the way for millions who believe that Africa's digital future is something to build. Right now. Together.
              </motion.p>
            </div>

            {/* Values */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Our Values</p>
              <div className="grid grid-cols-2 gap-3">
                {values.map((val, i) => (
                  <motion.div
                    key={val.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.07 }}
                    whileHover={{ y: -2 }}
                    className="bg-white border border-slate-200 rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-2xl mb-2">{val.emoji}</div>
                    <p className="text-[12px] font-bold text-slate-800 mb-1">{val.label}</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{val.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
