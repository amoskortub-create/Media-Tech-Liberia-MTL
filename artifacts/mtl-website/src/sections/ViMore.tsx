import { motion } from "framer-motion";
import { Play, DollarSign, MessageCircle, ExternalLink } from "lucide-react";
import screenshot1 from "@assets/Screenshot_20260524-173421_1779748627809.jpg";
import screenshot2 from "@assets/Screenshot_20260523-045223_1779748627968.jpg";
import screenshot3 from "@assets/Screenshot_20260523-045245_1779748628179.jpg";

const VIMORE_URL = "https://www.vimore.cfd";

export function ViMore() {
  return (
    <section className="py-32 bg-background relative z-10 overflow-hidden" id="products">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-purple-600/8 rounded-full blur-[180px] -z-10" />
      <div className="absolute right-0 top-1/4 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold tracking-wider uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Deployed Product
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight"
          >
            ViMore Ecosystem <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-purple-600">
              — The Sovereign Economy Engine
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            West Africa's first fully self-hosted social monetization platform — built in Liberia, owned by Liberians.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-card border border-white/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-primary/5 pointer-events-none" />

            <div className="mb-8 relative">
              <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-semibold">
                Marketplace Commission
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-bold">
                  10% Verified Nodes
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-foreground/70 rounded-full text-sm font-medium">
                  20% Standard Nodes
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-10 relative">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Play size={18} fill="currentColor" />
                </div>
                <span className="font-semibold text-sm">Social Feed + Reels + Music Hub</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-green-500/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                  <DollarSign size={18} />
                </div>
                <span className="font-semibold text-sm">Secure Automated Revenue Engine</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <MessageCircle size={18} />
                </div>
                <span className="font-semibold text-sm">Community Messaging & Localization</span>
              </div>
            </div>

            <div className="border-t border-white/8 pt-8 mb-10 relative">
              <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-5 font-semibold">
                Monetization Engine
              </h4>
              <div className="grid gap-3">
                {[
                  "Monthly Verification Badges",
                  "Ad Campaigns Engine for Local MSMEs",
                  "On-Demand Post Boosting via Mobile Money",
                ].map((item) => (
                  <div key={item} className="text-sm text-foreground/80 font-medium flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <motion.a
              href={VIMORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-bold py-5 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:shadow-[0_0_50px_rgba(168,85,247,0.55)] transition-all cursor-pointer no-underline"
              data-testid="link-open-vimore"
            >
              Open ViMore App
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>

          {/* Right: Real Screenshot Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex justify-center items-start"
          >
            <div className="relative w-full max-w-[320px] mx-auto">
              {/* Background phone (screenshot 3 - Music) */}
              <motion.div
                initial={{ opacity: 0, rotate: 6, y: 20 }}
                whileInView={{ opacity: 1, rotate: 6, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -right-4 top-6 w-[220px] rounded-[32px] overflow-hidden border-[4px] border-slate-700/60 shadow-2xl"
                style={{ zIndex: 1 }}
              >
                <img
                  src={screenshot3}
                  alt="ViMore Music Hub"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: 420 }}
                  data-testid="img-vimore-music"
                />
              </motion.div>

              {/* Middle phone (screenshot 2 - Menu) */}
              <motion.div
                initial={{ opacity: 0, rotate: -4, y: 30 }}
                whileInView={{ opacity: 1, rotate: -4, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="absolute -left-4 top-10 w-[220px] rounded-[32px] overflow-hidden border-[4px] border-slate-700/60 shadow-2xl"
                style={{ zIndex: 2 }}
              >
                <img
                  src={screenshot2}
                  alt="ViMore Menu"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: 420 }}
                  data-testid="img-vimore-menu"
                />
              </motion.div>

              {/* Front phone (screenshot 1 - Home feed) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="relative mx-auto w-[260px] rounded-[36px] overflow-hidden border-[5px] border-slate-600 shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(168,85,247,0.2)]"
                style={{ zIndex: 3, marginTop: 40, marginBottom: 40 }}
              >
                <img
                  src={screenshot1}
                  alt="ViMore Home Feed"
                  className="w-full object-cover object-top"
                  data-testid="img-vimore-feed"
                />
                {/* Glow ring under front phone */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 bg-purple-500/30 blur-2xl rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
