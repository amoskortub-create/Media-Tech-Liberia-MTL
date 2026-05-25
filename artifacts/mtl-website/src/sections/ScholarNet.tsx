import { motion } from "framer-motion";
import ssLaunch from "@assets/Screenshot_20260525-200259_1779748874397.jpg";
import ssFeed from "@assets/Screenshot_20260525-200324_1779748874438.jpg";
import ssNotes from "@assets/Screenshot_20260525-200338_1779748874474.jpg";
import ssClasses from "@assets/Screenshot_20260525-200342_1779748874512.jpg";
import ssTools from "@assets/Screenshot_20260525-200352_1779748874551.jpg";
import ssAdmin from "@assets/Screenshot_20260525-200428_1779748874588.jpg";
import ssWelcome from "@assets/Screenshot_20260525-200558_1779748874780.jpg";

const subjects = [
  { name: "Mathematics", instructor: "Mrs. Comfort Nyenpan", progress: 72, bar: "bg-blue-500" },
  { name: "Science", instructor: "Ms. Williams", progress: 58, bar: "bg-violet-500" },
  { name: "English", instructor: "Mrs. Cooper", progress: 89, bar: "bg-emerald-500" },
  { name: "History", instructor: "Core Curricula", progress: 45, bar: "bg-amber-500" },
];

export function ScholarNet() {
  return (
    <section className="py-24 bg-white" id="scholarNet">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-3"
          >
            Pipeline Project
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-3 leading-tight"
          >
            Scholar Net — <span className="text-blue-600">Liberia's First Digital Campus</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] text-slate-500 max-w-xl"
          >
            Offline-capable lesson delivery structured perfectly around Liberia's existing national curriculum.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left: Dashboard card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-white border border-slate-200 rounded-xl p-7 shadow-sm"
          >
            <div className="flex items-center justify-between mb-7 pb-5 border-b border-slate-100">
              <div>
                <h3 className="text-[15px] font-bold text-slate-900">Student Academic Portal</h3>
                <p className="text-[12px] text-slate-400 mt-0.5">Grade 11 · Monrovia Central High School</p>
              </div>
              <span className="px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-lg text-[11px] font-bold text-blue-600">Term 2 Active</span>
            </div>

            <div className="space-y-5">
              {subjects.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-1.5">
                    <div>
                      <p className="text-[13px] font-semibold text-slate-800">{s.name}</p>
                      <p className="text-[11px] text-slate-400">{s.instructor}</p>
                    </div>
                    <span className="text-[13px] font-bold text-slate-700">{s.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full ${s.bar}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 pt-5 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
              {[{ v: "1,200", l: "Students" }, { v: "58", l: "Teachers" }, { v: "5", l: "Departments" }].map((s) => (
                <div key={s.l}>
                  <p className="text-xl font-black text-slate-900">{s.v}</p>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg text-[12px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Offline Ready
              </span>
            </div>
          </motion.div>

          {/* Right: Phone stack */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex justify-center"
          >
            <div className="relative w-full max-w-[300px] mx-auto" style={{ minHeight: 480 }}>
              <motion.div
                initial={{ opacity: 0, rotate: 7, y: 20 }}
                whileInView={{ opacity: 1, rotate: 7, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -right-4 top-8 w-[185px] rounded-[28px] overflow-hidden border-4 border-white shadow-xl"
                style={{ zIndex: 1 }}
              >
                <img src={ssAdmin} alt="Scholar Net Teacher" className="w-full object-cover object-top" style={{ maxHeight: 360 }} data-testid="img-scholarnet-admin" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: -5, y: 28 }}
                whileInView={{ opacity: 1, rotate: -5, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="absolute -left-4 top-10 w-[185px] rounded-[28px] overflow-hidden border-4 border-white shadow-xl"
                style={{ zIndex: 2 }}
              >
                <img src={ssTools} alt="Scholar Net Tools" className="w-full object-cover object-top" style={{ maxHeight: 360 }} data-testid="img-scholarnet-tools" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="relative mx-auto w-[240px] rounded-[34px] overflow-hidden border-[5px] border-white shadow-2xl"
                style={{ zIndex: 3, marginTop: 40, marginBottom: 40 }}
              >
                <img src={ssWelcome} alt="Scholar Net Welcome" className="w-full object-cover object-top" data-testid="img-scholarnet-welcome" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-blue-400/20 blur-xl rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Screenshot gallery */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 overflow-x-auto pb-3"
        >
          <div className="flex gap-3 w-max mx-auto">
            {[ssFeed, ssNotes, ssClasses, ssLaunch].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.02 }}
                className="w-[150px] flex-shrink-0 rounded-[22px] overflow-hidden border-3 border-white shadow-md cursor-pointer"
              >
                <img src={src} alt={`Scholar Net screen ${i + 1}`} className="w-full object-cover object-top" style={{ maxHeight: 280 }} data-testid={`img-scholarnet-gallery-${i}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
