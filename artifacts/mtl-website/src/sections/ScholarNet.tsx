import { motion } from "framer-motion";
import { Handshake, CalendarClock, BookOpen, Users, GraduationCap, Clock } from "lucide-react";
import ssLaunch from "@assets/Screenshot_20260525-200259_1779748874397.jpg";
import ssFeed from "@assets/Screenshot_20260525-200324_1779748874438.jpg";
import ssNotes from "@assets/Screenshot_20260525-200338_1779748874474.jpg";
import ssClasses from "@assets/Screenshot_20260525-200342_1779748874512.jpg";
import ssTools from "@assets/Screenshot_20260525-200352_1779748874551.jpg";
import ssWelcome from "@assets/Screenshot_20260525-200558_1779748874780.jpg";

const LAUNCH_DATE = "August 20, 2026";

const features = [
  { icon: BookOpen, label: "Offline-capable lesson delivery" },
  { icon: Users, label: "Multi-role: Student, Teacher, Admin, Parent" },
  { icon: GraduationCap, label: "GPA tracking & attendance" },
  { icon: Clock, label: "Notes & Past Papers library" },
];

export function ScholarNet() {
  return (
    <section className="py-24 relative overflow-hidden" id="scholarNet"
      style={{ background: "hsl(222 40% 6%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-widest"
              style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.3)", color: "#fbbf24" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400" />
              </span>
              In Active Development
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-widest"
              style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.25)", color: "#60a5fa" }}
            >
              <Handshake size={10} />
              Open to Partnership
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight"
          >
            Scholar Net
            <span style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> — Liberia's Digital Campus</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-[15px] max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            An ambitious academic platform allowing Liberian students, teachers, and school administrators to connect, share resources, and track academic progress — built around the national curriculum with offline capability.
          </motion.p>
        </div>

        {/* Launch countdown banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl p-6 md:p-8 mb-12"
          style={{
            background: "linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(59,130,246,0.08) 100%)",
            border: "1px solid rgba(245,158,11,0.25)",
          }}
        >
          <div className="absolute inset-0 grid-bg-sm" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)" }}>
              <CalendarClock size={24} style={{ color: "#fbbf24" }} />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "#fbbf24" }}>
                Official Launch Date
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                {LAUNCH_DATE}
              </h3>
              <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                Scholar Net is currently in active development. The platform launches publicly on {LAUNCH_DATE}. Stay tuned for updates and partnership opportunities.
              </p>
            </div>
            <div className="flex-shrink-0 text-center px-5 py-3 rounded-xl"
              style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
              <div className="text-2xl font-black" style={{ color: "#fbbf24" }}>2026</div>
              <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>Coming Soon</div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            {/* Partnership banner */}
            <div className="rounded-2xl p-5 mb-6"
              style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}>
                  <Handshake size={18} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-white mb-1">Seeking School Partners</h4>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    We're actively partnering with Liberian schools, universities, and NGOs ahead of the August 2026 launch. Early partners receive priority onboarding and customized modules.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)" }}>
                    <feat.icon size={14} className="text-blue-400" />
                  </div>
                  <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>{feat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Subject dashboard mockup */}
            <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>Course Progress Preview</p>
              <div className="flex flex-col gap-3">
                {[
                  { name: "Mathematics", instructor: "Mrs. Comfort Nyenpan", progress: 72, color: "#3b82f6" },
                  { name: "Science", instructor: "Ms. Williams", progress: 58, color: "#8b5cf6" },
                  { name: "English", instructor: "Mrs. Cooper", progress: 89, color: "#10b981" },
                  { name: "History", instructor: "Core Curricula", progress: 45, color: "#f59e0b" },
                ].map((sub) => (
                  <div key={sub.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div>
                        <span className="text-[12px] font-semibold text-white">{sub.name}</span>
                        <span className="text-[11px] ml-2" style={{ color: "rgba(255,255,255,0.35)" }}>{sub.instructor}</span>
                      </div>
                      <span className="text-[12px] font-bold" style={{ color: sub.color }}>{sub.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${sub.progress}%`, background: sub.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Phone stack */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-full max-w-[300px] mx-auto" style={{ minHeight: 480 }}>
              <motion.div
                initial={{ opacity: 0, rotate: 7, y: 20 }}
                whileInView={{ opacity: 1, rotate: 7, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -right-4 top-6 w-[180px] rounded-[28px] overflow-hidden"
                style={{ zIndex: 1, border: "3px solid rgba(59,130,246,0.25)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
              >
                <img src={ssTools} alt="Scholar Net Tools" className="w-full object-cover object-top" style={{ maxHeight: 350 }} data-testid="img-scholarnet-tools" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: -5, y: 28 }}
                whileInView={{ opacity: 1, rotate: -5, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="absolute -left-4 top-10 w-[180px] rounded-[28px] overflow-hidden"
                style={{ zIndex: 2, border: "3px solid rgba(6,182,212,0.25)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
              >
                <img src={ssFeed} alt="Scholar Net Feed" className="w-full object-cover object-top" style={{ maxHeight: 350 }} data-testid="img-scholarnet-feed" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mx-auto w-[235px] rounded-[34px] overflow-hidden"
                style={{ zIndex: 3, marginTop: 50, marginBottom: 40, border: "4px solid rgba(59,130,246,0.4)", boxShadow: "0 0 40px rgba(59,130,246,0.2), 0 20px 60px rgba(0,0,0,0.7)" }}
              >
                <img src={ssWelcome} alt="Scholar Net Welcome" className="w-full object-cover object-top" data-testid="img-scholarnet-welcome" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 overflow-x-auto pb-3 -mx-4 px-4"
        >
          <div className="flex gap-3 w-max">
            {[ssFeed, ssNotes, ssClasses, ssLaunch].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.03 }}
                className="w-[130px] flex-shrink-0 rounded-[20px] overflow-hidden cursor-pointer transition-all"
                style={{ border: "2px solid rgba(255,255,255,0.07)", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
              >
                <img src={src} alt={`Scholar Net screen ${i + 1}`} className="w-full object-cover object-top" style={{ maxHeight: 240 }} data-testid={`img-scholarnet-gallery-${i}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
