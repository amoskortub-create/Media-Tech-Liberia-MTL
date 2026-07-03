import { motion } from "framer-motion";
import { Handshake, CalendarClock, BookOpen, Users, GraduationCap, Clock } from "lucide-react";
import ssLaunch from "@assets/Screenshot_20260525-200259_1779748874397.jpg";
import ssFeed from "@assets/Screenshot_20260525-200324_1779748874438.jpg";
import ssNotes from "@assets/Screenshot_20260525-200338_1779748874474.jpg";
import ssClasses from "@assets/Screenshot_20260525-200342_1779748874512.jpg";
import ssTools from "@assets/Screenshot_20260525-200352_1779748874551.jpg";
import ssWelcome from "@assets/Screenshot_20260525-200558_1779748874780.jpg";

export function ScholarNet() {
  return (
    <section className="py-28 relative overflow-hidden" id="scholarNet"
      style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex flex-wrap gap-2 mb-5">
            <motion.span initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase"
              style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.25)", color: "#fbbf24" }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400" />
              </span>
              In Active Development
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase"
              style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.22)", color: "#06b6d4" }}>
              <Handshake size={10} /> Open to Partnership
            </motion.span>
          </div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.08 }} className="font-black text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)" }}>
            Scholar Net
            <span style={{ background: "linear-gradient(135deg,#06b6d4,#0891b2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {" "}— Liberia's Digital Campus
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.12 }} className="text-[15px] max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.42)" }}>
            An ambitious academic platform connecting Liberian students, teachers, and administrators — built around the national curriculum with offline capability.
          </motion.p>
        </div>

        {/* Launch date banner — hero element */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl p-8 md:p-10 mb-14"
          style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(6,182,212,0.07) 100%)", border: "1px solid rgba(251,191,36,0.22)" }}>
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.28)" }}>
              <CalendarClock size={28} style={{ color: "#fbbf24" }} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-1" style={{ color: "#fbbf24" }}>Official Launch Date</p>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">August 20, 2026</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Scholar Net is currently in active development. The platform launches publicly on August 20, 2026. Early school partners receive priority onboarding and customized modules.
              </p>
            </div>
            <div className="flex-shrink-0 text-center px-6 py-4 rounded-xl"
              style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.18)" }}>
              <div className="text-3xl font-black" style={{ color: "#fbbf24" }}>Aug 20</div>
              <div className="text-[10px] font-black tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>Launching 2026</div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: BookOpen, label: "Offline-capable lesson delivery" },
                { icon: Users, label: "Multi-role: Student, Teacher, Admin, Parent" },
                { icon: GraduationCap, label: "GPA tracking & attendance" },
                { icon: Clock, label: "Notes & Past Papers library" },
              ].map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ background: "#0d0d0d", border: "1px solid rgba(6,182,212,0.1)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)" }}>
                    <f.icon size={14} style={{ color: "#06b6d4" }} />
                  </div>
                  <span className="text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>{f.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress mockup */}
            <div className="rounded-2xl p-6" style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.05)" }}>
              <p className="text-[10px] font-black tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>Course Progress Preview</p>
              {[
                { name: "Mathematics", instructor: "Mrs. Comfort Nyenpan", progress: 72, color: "#a78bfa" },
                { name: "Science", instructor: "Ms. Williams", progress: 58, color: "#06b6d4" },
                { name: "English", instructor: "Mrs. Cooper", progress: 89, color: "#34d399" },
                { name: "History", instructor: "Core Curricula", progress: 45, color: "#fbbf24" },
              ].map((s) => (
                <div key={s.name} className="mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <div>
                      <span className="text-[13px] font-bold text-white">{s.name}</span>
                      <span className="text-[11px] ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>{s.instructor}</span>
                    </div>
                    <span className="text-[12px] font-black" style={{ color: s.color }}>{s.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="h-full rounded-full" style={{ width: `${s.progress}%`, background: s.color }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: phone stack */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex-1 flex justify-center w-full">
            <div className="relative w-full max-w-[210px] mx-auto" style={{ minHeight: 340 }}>
              <motion.div initial={{ opacity: 0, rotate: 7, y: 20 }} whileInView={{ opacity: 1, rotate: 7, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="absolute -right-4 top-4 w-[125px] rounded-[20px] overflow-hidden"
                style={{ zIndex: 1, border: "2px solid rgba(6,182,212,0.22)", boxShadow: "0 8px 40px rgba(0,0,0,0.7)" }}>
                <img src={ssTools} alt="Scholar Net Tools" className="w-full object-cover object-top" style={{ maxHeight: 250 }} />
              </motion.div>
              <motion.div initial={{ opacity: 0, rotate: -5, y: 28 }} whileInView={{ opacity: 1, rotate: -5, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.15 }}
                className="absolute -left-4 top-7 w-[125px] rounded-[20px] overflow-hidden"
                style={{ zIndex: 2, border: "2px solid rgba(251,191,36,0.2)", boxShadow: "0 8px 40px rgba(0,0,0,0.7)" }}>
                <img src={ssFeed} alt="Scholar Net Feed" className="w-full object-cover object-top" style={{ maxHeight: 250 }} />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="relative mx-auto w-[163px] rounded-[24px] overflow-hidden"
                style={{ zIndex: 3, marginTop: 35, marginBottom: 28, border: "3px solid rgba(6,182,212,0.45)", boxShadow: "0 0 40px rgba(6,182,212,0.18), 0 24px 60px rgba(0,0,0,0.8)" }}>
                <img src={ssWelcome} alt="Scholar Net Welcome" className="w-full object-cover object-top" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }} className="mt-12 overflow-x-auto pb-3 -mx-5 px-5">
          <div className="flex gap-3 w-max">
            {[ssFeed, ssNotes, ssClasses, ssLaunch].map((src, i) => (
              <motion.div key={i} whileHover={{ y: -5, scale: 1.03 }}
                className="w-[90px] flex-shrink-0 rounded-[16px] overflow-hidden cursor-pointer transition-all"
                style={{ border: "1px solid rgba(6,182,212,0.15)", boxShadow: "0 4px 24px rgba(0,0,0,0.6)" }}>
                <img src={src} alt={`Scholar Net screen ${i + 1}`} className="w-full object-cover object-top" style={{ maxHeight: 170 }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
