import { motion } from "framer-motion";
import { Play, DollarSign, MessageCircle, ExternalLink, Heart, MessageSquare } from "lucide-react";

export function ViMore() {
  return (
    <section className="py-32 bg-background relative z-10 overflow-hidden" id="products">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            ViMore Ecosystem <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">— The Sovereign Economy Engine</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-card border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative"
          >
            <div className="mb-8">
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Marketplace Commission</h4>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-bold">10% Verified Nodes</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-foreground/80 rounded-full text-sm font-medium">20% Standard Nodes</span>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Play size={20} fill="currentColor" />
                </div>
                <span className="font-semibold">Social Feed + Reels + Music Hub</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <DollarSign size={20} />
                </div>
                <span className="font-semibold">Secure Automated Revenue Engine</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <MessageCircle size={20} />
                </div>
                <span className="font-semibold">Community Messaging & Localization</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 mb-10">
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-6">Monetization Engine</h4>
              <div className="grid gap-4">
                <div className="text-sm text-foreground/90 font-medium flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Monthly Verification Badges
                </div>
                <div className="text-sm text-foreground/90 font-medium flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Ad Campaigns Engine for Local MSMEs
                </div>
                <div className="text-sm text-foreground/90 font-medium flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" /> On-Demand Post Boosting via Mobile Money
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-primary text-white font-bold py-5 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-shadow"
              data-testid="button-open-vimore"
            >
              Open ViMore App
              <ExternalLink size={20} />
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center perspective-[1000px]"
          >
            <div className="w-[300px] h-[600px] bg-black border-[6px] border-slate-800 rounded-[40px] overflow-hidden relative shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg]">
              {/* Phone Header */}
              <div className="h-14 bg-slate-900/90 backdrop-blur border-b border-white/10 flex items-center justify-center sticky top-0 z-20">
                <span className="font-black text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">ViMore</span>
              </div>
              
              {/* Feed content */}
              <div className="p-4 space-y-4 pb-20">
                {[1,2].map(i => (
                  <div key={i} className="bg-slate-900 rounded-2xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-full ${i===1 ? 'bg-primary' : 'bg-purple-500'}`} />
                      <div className="flex-1">
                        <div className="h-2 w-20 bg-white/20 rounded mb-1" />
                        <div className="h-2 w-12 bg-white/10 rounded" />
                      </div>
                    </div>
                    <div className="h-32 bg-slate-800 rounded-xl mb-3" />
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 text-white/50">
                        <Heart size={16} /> <span className="text-xs">{(245 * i).toString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/50">
                        <MessageSquare size={16} /> <span className="text-xs">{(42 * i).toString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-900/90 backdrop-blur border-t border-white/10 flex justify-around items-center px-4">
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <div className="w-10 h-10 rounded-full bg-primary/20" />
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <div className="w-8 h-8 rounded-full bg-white/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
