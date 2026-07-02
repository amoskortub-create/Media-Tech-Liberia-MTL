import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
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

const features = [
  "Offline-capable lesson delivery",
  "Multi-role: Student, Teacher, Admin, Parent",
  "Notes & Past Papers library",
  "GPA tracking & attendance",
  "School-wide announcements",
  "Classroom management tools",
];

export function ScholarNet() {
  return (
    <section className="py-20 bg-white" id="scholarNet">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-full text-[11px] font-bold text-amber-700 uppercase tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              In Development
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-[11px] font-bold text-blue-700 uppercase tracking-wide"
            >
              <Handshake size={11} />
              Open to Partnership
            </motion.span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-3 leading-tight"
          >
            Scholar Net — <span className="text-blue-600">Liberia's First Digital Campus</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-[14px] text-slate-500 max-w-2xl leading-relaxed"
          >
            An ambitious academic platform allowing Liberian students, teachers, and school administrators to connect, share resources, and track academic progress — built around the national curriculum and designed to work offline.
          </motion.p>
        </div>

        {/* Partnership banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row gap-4 items-start"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
            <Handshake size={20} className="text-white" />
          </div>
          <div>
            <p className="text-[14px] font-bold text-blue-900 mb-1">Partnership & Investment Opportunity</p>
            <p className="text-[13px] text-blue-700 leading-relaxed">
              Scholar Net is actively seeking partnerships with schools, educational institutions, NGOs, and impact investors across Liberia and West Africa. If you're interested in co-building Africa's educational future, we'd love to connect.
            </p>
            <a
              href="mailto:mediatechliberia@gmail.com?subject=Scholar Net Partnership Inquiry"
              className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-bold text-blue-600 hover:text-blue-800 transition-colors"
              data-testid="link-scholarnet-partnership"
            >
              Reach out about partnership →
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* Left: mock dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6 pb-5 border-b border-slate-100">
              <div>
                <h3 className="text-[14px] font-bold text-slate-900">Academic Progress Preview</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Sample curriculum tracks</p>
              </div>
              <span className="px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-lg text-[11px] font-bold text-amber-700">Demo</span>
            </div>

            <div className="space-y-5 mb-8">
              {subjects.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-1.5">
                    <div>
                      <p className="text-[13px] font-semibold text-slate-800">{s.name}</p>
                      <p className="text-[11px] text-slate-400">{s.instructor}</p>
                    </div>
                    <span className="text-[12px] font-bold text-slate-600">{s.progress}%</span>
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

            {/* Features list */}
            <div className="pt-5 border-t border-slate-100">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Platform Features</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-[12px] text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg text-[12px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Offline Ready · In Active Development
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
            <div className="relative w-full max-w-[300px] mx-auto" style={{ minHeight: 460 }}>
              <motion.div
                initial={{ opacity: 0, rotate: 7, y: 20 }}
                whileInView={{ opacity: 1, rotate: 7, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -right-4 top-8 w-[185px] rounded-[28px] overflow-hidden border-4 border-white shadow-xl"
                style={{ zIndex: 1 }}
              >
                <img src={ssAdmin} alt="Teacher Profile" className="w-full object-cover object-top" style={{ maxHeight: 350 }} data-testid="img-scholarnet-admin" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: -5, y: 28 }}
                whileInView={{ opacity: 1, rotate: -5, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="absolute -left-4 top-10 w-[185px] rounded-[28px] overflow-hidden border-4 border-white shadow-xl"
                style={{ zIndex: 2 }}
              >
                <img src={ssTools} alt="Student Tools" className="w-full object-cover object-top" style={{ maxHeight: 350 }} data-testid="img-scholarnet-tools" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mx-auto w-[235px] rounded-[34px] overflow-hidden border-[5px] border-white shadow-2xl"
                style={{ zIndex: 3, marginTop: 40, marginBottom: 40 }}
              >
                <img src={ssWelcome} alt="Scholar Net Welcome" className="w-full object-cover object-top" data-testid="img-scholarnet-welcome" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-blue-300/30 blur-xl rounded-full" />
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
                whileHover={{ y: -4, scale: 1.02 }}
                className="w-[140px] flex-shrink-0 rounded-[20px] overflow-hidden border-2 border-slate-100 shadow-md cursor-pointer transition-all"
              >
                <img src={src} alt={`Scholar Net screen ${i + 1}`} className="w-full object-cover object-top" style={{ maxHeight: 260 }} data-testid={`img-scholarnet-gallery-${i}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
