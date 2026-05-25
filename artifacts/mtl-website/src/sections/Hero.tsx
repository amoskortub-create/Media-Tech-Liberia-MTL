import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-blue-500/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tight mb-6">
            Engineering Africa's Digital Future Through <span className="text-primary drop-shadow-[0_0_15px_rgba(0,210,255,0.5)]">High-Performance</span> Software Infrastructure.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 font-light">
            We build data-lite, cloud-engineered applications and secure peer-to-peer monetization engines tailored specifically for the constraints and opportunities of the West African digital market.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase transition-all shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.6)]"
              data-testid="link-explore"
            >
              Explore Our Products
              <ArrowRight size={18} />
            </motion.a>
            
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-foreground px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase hover:bg-white/5 transition-colors"
              data-testid="link-manifesto"
            >
              Read Our Manifesto
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
