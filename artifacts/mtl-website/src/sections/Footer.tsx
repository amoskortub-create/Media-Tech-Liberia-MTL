import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, CheckCircle, Flame } from "lucide-react";

export function Footer() {
  const values = [
    "Built in Liberia, for Liberia: We understand local infrastructure, local payments, local languages, and local users. We don't guess — we know.",
    "Optimized for Low Bandwidth: Every product we build is engineered to run fast on mobile data. No bloat. No lag. No excuses.",
    "You Own Your Data: We build on self-hosted infrastructure. Your business data stays in your control — not a foreign cloud.",
    "Ongoing Support & Transparent Pricing: No hidden fees, upfront pricing designed for Liberian businesses. Continuous engineering access after launch."
  ];

  return (
    <footer className="pt-24 pb-8 bg-card relative z-10 border-t border-white/5" id="contact">
      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Ready to start your project?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reach us instantly via WhatsApp, phone call, or email. We respond to every inquiry and provide a free consultation for every project.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-20">
          <motion.a
            href="https://wa.me/231778451835"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center gap-1 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
            data-testid="link-whatsapp"
          >
            <div className="flex items-center gap-2 text-lg">
              <MessageSquare size={20} />
              WhatsApp Us — +231778451835
            </div>
            <span className="text-xs font-medium text-white/80">(Fastest response)</span>
          </motion.a>

          <motion.a
            href="tel:+231778451835"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-white/5"
            data-testid="link-phone"
          >
            <Phone size={20} />
            Call Us Directly — +231778451835
          </motion.a>

          <motion.a
            href="mailto:mediatechliberia@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-bold transition-all hover:bg-white/90"
            data-testid="link-email"
          >
            <Mail size={20} />
            Send an Email — mediatechliberia@gmail.com
          </motion.a>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 mb-24">
          {values.map((val, i) => {
            const [title, desc] = val.split(': ');
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 bg-background/50 p-6 rounded-2xl border border-white/5"
              >
                <CheckCircle className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <strong className="text-foreground block mb-1 text-lg">{title}:</strong>
                  <span className="text-muted-foreground leading-relaxed">{desc}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
              <span className="font-bold text-[10px] tracking-wider text-primary">MTL</span>
            </div>
            <span className="text-sm font-semibold tracking-widest text-foreground">
              MEDIA TECH LIBERIA
            </span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Media Tech Liberia. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
}
