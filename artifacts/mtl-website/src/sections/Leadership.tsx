import { motion } from "framer-motion";

export function Leadership() {
  return (
    <section className="py-32 bg-background relative z-10" id="about">
      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Executive Leadership
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-card border border-white/5 rounded-[32px] p-8 md:p-12 relative shadow-2xl"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <div className="w-24 h-24 shrink-0 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              <span className="text-3xl font-black text-white">AK</span>
            </div>
            
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-foreground mb-1">Amos B. Kortu</h3>
              <p className="text-primary font-medium tracking-wide text-sm uppercase mb-6">Founder & CEO, Media Tech Liberia</p>
              
              <blockquote className="relative p-6 bg-white/5 rounded-2xl border border-white/5 mb-6 text-foreground/90 italic font-serif leading-relaxed">
                <span className="absolute top-2 left-2 text-4xl text-white/10">"</span>
                Many Ideas, One Mindset. Building the infrastructure that lets Liberia's next generation speak the language of technology in their own voice.
                <span className="absolute bottom-[-10px] right-4 text-4xl text-white/10">"</span>
              </blockquote>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Under Amos's leadership, Media Tech Liberia is built to empower, train, and create an ecosystem for young Liberian developers, designers, and creatives — proving that the talent to build world-class technology has always existed right here in Africa.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {["Software Engineering", "West Africa Tech", "Creator Economy", "Digital Sovereignty"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-background border border-white/10 rounded-full text-xs font-medium text-foreground/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
