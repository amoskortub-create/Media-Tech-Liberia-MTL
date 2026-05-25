import { motion } from "framer-motion";
import ssLaunch from "@assets/Screenshot_20260525-200259_1779748874397.jpg";
import ssFeed from "@assets/Screenshot_20260525-200324_1779748874438.jpg";
import ssNotes from "@assets/Screenshot_20260525-200338_1779748874474.jpg";
import ssClasses from "@assets/Screenshot_20260525-200342_1779748874512.jpg";
import ssTools from "@assets/Screenshot_20260525-200352_1779748874551.jpg";
import ssAdmin from "@assets/Screenshot_20260525-200504_1779748874656.jpg";
import ssWelcome from "@assets/Screenshot_20260525-200558_1779748874780.jpg";

export function ScholarNet() {
  const subjects = [
    { name: "Mathematics", instructor: "Mrs. Comfort Nyenpan", progress: 72, color: "bg-blue-500" },
    { name: "Science", instructor: "Ms. Williams", progress: 58, color: "bg-purple-500" },
    { name: "English", instructor: "Mrs. Cooper", progress: 89, color: "bg-green-500" },
    { name: "History", instructor: "Core Curricula", progress: 45, color: "bg-amber-500" },
  ];

  const screens = [ssLaunch, ssFeed, ssNotes, ssClasses, ssTools, ssAdmin, ssWelcome];

  return (
    <section className="py-32 bg-card/30 relative z-10 overflow-hidden" id="scholarNet">
      <div className="absolute right-0 top-0 w-[50vw] h-[50vw] bg-blue-600/6 rounded-full blur-[180px] -z-10" />
      <div className="absolute left-0 bottom-0 w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold tracking-wider uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Pipeline Project
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight"
          >
            Scholar Net —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
              Liberia's First Digital Campus
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            An ambitious digital academic campus allowing Liberian students to access offline-capable lesson delivery — structured perfectly around the existing national curriculum.
          </motion.p>
        </div>

        {/* Main two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left: Dashboard card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-background border border-white/10 rounded-[32px] p-6 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
              <div>
                <h3 className="text-xl font-bold text-foreground">Student Academic Portal</h3>
                <p className="text-xs text-muted-foreground mt-1">Grade 11 · Monrovia Central High School</p>
              </div>
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-semibold text-blue-400">
                Term 2 Active
              </span>
            </div>

            <div className="space-y-6">
              {subjects.map((subject, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-semibold text-foreground/90 text-sm">{subject.name}</h4>
                      <span className="text-xs text-muted-foreground">{subject.instructor}</span>
                    </div>
                    <span className="font-mono text-sm font-bold">{subject.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${subject.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full ${subject.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-10 pt-6 border-t border-white/5 grid grid-cols-3 gap-4">
              {[
                { label: "Students", value: "1,200" },
                { label: "Teachers", value: "58" },
                { label: "Departments", value: "5" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-black text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Offline Ready
              </div>
            </div>
          </motion.div>

          {/* Right: Real screenshot stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex justify-center items-start"
          >
            <div className="relative w-full max-w-[320px] mx-auto" style={{ minHeight: 520 }}>
              {/* Back phone - Admin view */}
              <motion.div
                initial={{ opacity: 0, rotate: 7, y: 20 }}
                whileInView={{ opacity: 1, rotate: 7, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -right-2 top-8 w-[200px] rounded-[28px] overflow-hidden border-[4px] border-slate-700/60 shadow-xl"
                style={{ zIndex: 1 }}
              >
                <img src={ssAdmin} alt="Scholar Net Teacher Profile" className="w-full object-cover object-top" style={{ maxHeight: 380 }} data-testid="img-scholarnet-admin" />
              </motion.div>

              {/* Mid phone - Tools */}
              <motion.div
                initial={{ opacity: 0, rotate: -5, y: 30 }}
                whileInView={{ opacity: 1, rotate: -5, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="absolute -left-2 top-10 w-[200px] rounded-[28px] overflow-hidden border-[4px] border-slate-700/60 shadow-xl"
                style={{ zIndex: 2 }}
              >
                <img src={ssTools} alt="Scholar Net Tools" className="w-full object-cover object-top" style={{ maxHeight: 380 }} data-testid="img-scholarnet-tools" />
              </motion.div>

              {/* Front phone - Welcome / Role select */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="relative mx-auto w-[250px] rounded-[34px] overflow-hidden border-[5px] border-slate-600 shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_40px_rgba(59,130,246,0.2)]"
                style={{ zIndex: 3, marginTop: 40, marginBottom: 40 }}
              >
                <img src={ssWelcome} alt="Scholar Net Welcome Screen" className="w-full object-cover object-top" data-testid="img-scholarnet-welcome" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-36 h-6 bg-blue-500/25 blur-2xl rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scrolling screenshot gallery below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 overflow-x-auto pb-4"
        >
          <div className="flex gap-4 w-max mx-auto">
            {[ssFeed, ssNotes, ssClasses, ssLaunch].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -4 }}
                className="w-[160px] flex-shrink-0 rounded-[24px] overflow-hidden border-[3px] border-slate-700/50 shadow-lg cursor-pointer"
              >
                <img src={src} alt={`Scholar Net screen ${i + 1}`} className="w-full object-cover object-top" style={{ maxHeight: 300 }} data-testid={`img-scholarnet-gallery-${i}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
