import { motion } from "framer-motion";
import { Play, DollarSign, MessageCircle, ExternalLink } from "lucide-react";
import screenshot1 from "@assets/Screenshot_20260524-173421_1779748627809.jpg";
import screenshot2 from "@assets/Screenshot_20260523-045223_1779748627968.jpg";
import screenshot3 from "@assets/Screenshot_20260523-045245_1779748628179.jpg";

const VIMORE_URL = "https://www.vimore.cfd";

export function ViMore() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100" id="products">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-widest text-purple-600 mb-3"
          >
            Deployed Product
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-3 leading-tight"
          >
            ViMore Ecosystem
            <span className="text-purple-600"> — The Sovereign Economy Engine</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] text-slate-500 max-w-xl"
          >
            West Africa's first fully self-hosted social monetization platform — built in Liberia, owned by Liberians.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">

          {/* Left: Info card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-white border border-slate-200 rounded-xl p-7 shadow-sm"
          >
            {/* Commission */}
            <div className="mb-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Marketplace Commission</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-purple-50 border border-purple-200 text-purple-700 rounded-lg text-[12px] font-bold">10% Verified Nodes</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg text-[12px] font-semibold">20% Standard Nodes</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2.5 mb-7">
              {[
                { icon: Play, label: "Social Feed + Reels + Music Hub", bg: "bg-purple-50 text-purple-600" },
                { icon: DollarSign, label: "Secure Automated Revenue Engine", bg: "bg-green-50 text-green-600" },
                { icon: MessageCircle, label: "Community Messaging & Localization", bg: "bg-blue-50 text-blue-600" },
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-lg">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${feat.bg}`}>
                    <feat.icon size={15} />
                  </div>
                  <span className="text-[13px] font-semibold text-slate-700">{feat.label}</span>
                </div>
              ))}
            </div>

            {/* Monetization */}
            <div className="border-t border-slate-100 pt-6 mb-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Monetization Engine</p>
              <div className="grid gap-2">
                {[
                  "Monthly Verification Badges",
                  "Ad Campaigns Engine for Local MSMEs",
                  "On-Demand Post Boosting via Mobile Money",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[13px] text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href={VIMORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold py-4 rounded-xl shadow-md shadow-purple-200 hover:shadow-purple-300 hover:opacity-95 transition-all text-[14px]"
              data-testid="link-open-vimore"
            >
              Open ViMore App
              <ExternalLink size={15} />
            </motion.a>
          </motion.div>

          {/* Right: Phone stack */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex justify-center"
          >
            <div className="relative w-full max-w-[300px] mx-auto" style={{ minHeight: 480 }}>
              {/* Back phone */}
              <motion.div
                initial={{ opacity: 0, rotate: 7, y: 20 }}
                whileInView={{ opacity: 1, rotate: 7, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -right-4 top-6 w-[190px] rounded-[28px] overflow-hidden border-4 border-white shadow-xl"
                style={{ zIndex: 1 }}
              >
                <img src={screenshot3} alt="ViMore Music Hub" className="w-full object-cover object-top" style={{ maxHeight: 360 }} data-testid="img-vimore-music" />
              </motion.div>

              {/* Mid phone */}
              <motion.div
                initial={{ opacity: 0, rotate: -5, y: 28 }}
                whileInView={{ opacity: 1, rotate: -5, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="absolute -left-4 top-10 w-[190px] rounded-[28px] overflow-hidden border-4 border-white shadow-xl"
                style={{ zIndex: 2 }}
              >
                <img src={screenshot2} alt="ViMore Menu" className="w-full object-cover object-top" style={{ maxHeight: 360 }} data-testid="img-vimore-menu" />
              </motion.div>

              {/* Front phone */}
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="relative mx-auto w-[240px] rounded-[34px] overflow-hidden border-[5px] border-white shadow-2xl"
                style={{ zIndex: 3, marginTop: 40, marginBottom: 40 }}
              >
                <img src={screenshot1} alt="ViMore Home Feed" className="w-full object-cover object-top" data-testid="img-vimore-feed" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-purple-400/30 blur-xl rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
