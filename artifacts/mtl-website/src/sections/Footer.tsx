import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, CheckCircle2 } from "lucide-react";
import mtlLogo from "@assets/1775314197014_transcpr_1779748663765.jpg";

const values = [
  {
    title: "Built in Liberia, for Liberia",
    desc: "We understand local infrastructure, local payments, local languages, and local users. We don't guess — we know.",
  },
  {
    title: "Optimized for Low Bandwidth",
    desc: "Every product we build is engineered to run fast on mobile data. No bloat. No lag. No excuses.",
  },
  {
    title: "You Own Your Data",
    desc: "We build on self-hosted Appwrite infrastructure. Your business data stays in your control — never on a foreign cloud.",
  },
  {
    title: "Ongoing Support & Transparent Pricing",
    desc: "No hidden fees, upfront pricing designed for Liberian businesses. Continuous engineering access after launch.",
  },
];

export function Footer() {
  return (
    <footer className="pt-20 pb-8 bg-slate-50 border-t border-slate-200" id="contact">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* CTA Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-widest text-primary mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-3"
          >
            Ready to start your project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] text-slate-500 max-w-xl mx-auto"
          >
            Reach us instantly via WhatsApp, phone call, or email. We respond to every inquiry and provide a free consultation for every project.
          </motion.p>
        </div>

        {/* Contact buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-3 mb-16">
          <motion.a
            href="https://wa.me/231778451835"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-semibold text-[14px] shadow-md shadow-green-200 hover:bg-[#22c55e] transition-colors"
            data-testid="link-whatsapp"
          >
            <MessageSquare size={17} />
            <span>WhatsApp — +231 778 451 835</span>
            <span className="hidden sm:inline text-white/70 text-[12px] font-normal">(Fastest)</span>
          </motion.a>

          <motion.a
            href="tel:+231778451835"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2.5 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-xl font-semibold text-[14px] hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm"
            data-testid="link-phone"
          >
            <Phone size={17} />
            Call — +231 778 451 835
          </motion.a>

          <motion.a
            href="mailto:mediatechliberia@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2.5 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-xl font-semibold text-[14px] hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm"
            data-testid="link-email"
          >
            <Mail size={17} />
            mediatechliberia@gmail.com
          </motion.a>
        </div>

        {/* Value propositions */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 mb-16">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-3 bg-white border border-slate-200 p-5 rounded-xl"
            >
              <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={17} />
              <div>
                <p className="text-[13px] font-bold text-slate-800 mb-0.5">{val.title}</p>
                <p className="text-[12px] text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-200 gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-primary/20">
              <img src={mtlLogo} alt="MTL" className="w-full h-full object-cover" />
            </div>
            <span className="text-[12px] font-bold tracking-wide text-slate-700">MEDIA TECH LIBERIA</span>
          </div>
          <p className="text-[12px] text-slate-400">© 2025 Media Tech Liberia. All rights reserved. · Built in Liberia 🇱🇷</p>
        </div>

      </div>
    </footer>
  );
}
