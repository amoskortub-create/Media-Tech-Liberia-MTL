import { motion } from "framer-motion";
import amosPhoto from "@assets/Face_Clean-up_Studio_In_a_studio_portrait_style_a_man_with_dar_1779748900032.jpg";

const values = [
  { icon: "🌍", label: "Africa-First", desc: "Built for African voices and communities." },
  { icon: "🔒", label: "Integrity", desc: "Honest, transparent, and trustworthy." },
  { icon: "⚡", label: "Innovation", desc: "Always pushing the boundaries of what's possible." },
  { icon: "🤝", label: "Empathy", desc: "Led by genuine care for our community." },
];

const tags = ["Software Engineering", "West Africa Tech", "Creator Economy", "Digital Sovereignty"];

export function Leadership() {
  return (
    <section className="py-32 bg-background relative z-10 overflow-hidden" id="about">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/4 rounded-full blur-[200px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
        {/* Section label */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-wider uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            The Visionary Who Sparked the Dream
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight"
          >
            Executive Leadership
          </motion.h2>
        </div>

        {/* Profile hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card border border-white/8 rounded-[32px] overflow-hidden shadow-2xl mb-12"
        >
          {/* Top banner */}
          <div className="h-36 bg-gradient-to-r from-[#0B192C] via-blue-900/60 to-primary/20 relative">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="px-8 md:px-12 pb-10 relative">
            {/* Avatar overlapping banner */}
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="-mt-16 flex-shrink-0">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-card shadow-[0_0_30px_rgba(0,210,255,0.3)]">
                  <img
                    src={amosPhoto}
                    alt="Amos B. Kortu — Founder & CEO"
                    className="w-full h-full object-cover object-top"
                    data-testid="img-founder-amos"
                  />
                </div>
              </div>

              <div className="pt-4 flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-2xl md:text-3xl font-black text-foreground">Amos B. Kortu</h3>
                  <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-bold tracking-wider">
                    Founder & CEO
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-medium tracking-wide mb-4">
                  Media Tech Liberia
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-background border border-white/10 rounded-full text-xs font-medium text-foreground/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <blockquote className="relative bg-gradient-to-br from-card to-card/50 border border-primary/15 rounded-[24px] p-8 md:p-10 shadow-lg">
            <div className="text-6xl text-primary/20 font-serif leading-none absolute top-4 left-6 select-none">"</div>
            <p className="text-xl md:text-2xl font-semibold text-foreground/90 leading-relaxed italic text-center px-4 pt-4">
              Africa's digital future is not something to wait for — it is something to build.
            </p>
            <div className="mt-4 text-center">
              <span className="text-sm text-primary font-medium">— Amos B. Kortu, Founder & CEO</span>
            </div>
          </blockquote>
        </motion.div>

        {/* Story body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-4xl mx-auto mb-16 space-y-5 text-muted-foreground text-base leading-relaxed"
        >
          <p>
            Every great movement begins with a single, burning idea. For Amos B. Kortu, that idea was rooted in a profound belief: that Africa — and Liberia in particular — deserved its own world-class technology platform. A platform built not by outsiders, but by Liberians who understood the heartbeat of their nation, its culture, its stories, and its people.
          </p>
          <p>
            Amos's conviction was simple but radical: technology is a language, and every people deserves to speak it in their own voice. He believed that Liberia's young generation was brimming with talent — developers, designers, creators, storytellers — who simply needed the right stage.
          </p>
          <p>
            Media Tech Liberia didn't just want to build a product. It wanted to build a movement. A place where creators could monetize their talent, where communities could form and flourish, where stories from the streets of Monrovia could reach every corner of the globe.
          </p>
          <p>
            Building a technology company in West Africa comes with its own unique set of challenges — from infrastructure limitations to funding hurdles. But Amos turned every challenge into fuel. Every setback became a setup for a greater comeback.
          </p>
          <p className="text-foreground/80 font-medium">
            Under Amos's leadership, Media Tech Liberia is built to empower, train, and create an ecosystem for young Liberian developers, designers, and creatives — proving that the talent to build world-class technology has always existed right here in Africa.
          </p>
          <p>
            Today, Media Tech Liberia stands as a testament to what happens when passion meets purpose. It is a company that carries the flag of African excellence into every server, every line of code, and every feature that rolls out to its growing community of users.
          </p>
          <p className="text-primary font-semibold">
            The mission is far from finished. In fact, it has only just begun. New features are coming. New markets are opening. And through it all, the same fire that started in the heart of a Liberian dreamer continues to burn — lighting the way for millions who believe that Africa's digital future is something to build. Right now. Together.
          </p>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-bold text-center mb-8">Our Values</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((val, i) => (
              <motion.div
                key={val.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.07 }}
                whileHover={{ y: -4, borderColor: "rgba(0,210,255,0.3)" }}
                className="bg-card border border-white/8 rounded-2xl p-6 text-center transition-colors cursor-default"
              >
                <div className="text-3xl mb-3">{val.icon}</div>
                <div className="font-bold text-sm text-foreground mb-1">{val.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{val.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
