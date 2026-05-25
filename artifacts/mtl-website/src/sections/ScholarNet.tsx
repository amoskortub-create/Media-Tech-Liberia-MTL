import { motion } from "framer-motion";

export function ScholarNet() {
  const subjects = [
    { name: "Mathematics", instructor: "Mr. Johnson", progress: 72, color: "bg-blue-500" },
    { name: "Science", instructor: "Ms. Williams", progress: 58, color: "bg-purple-500" },
    { name: "English", instructor: "Mrs. Cooper", progress: 89, color: "bg-green-500" },
    { name: "History", instructor: "Core Curricula", progress: 45, color: "bg-amber-500" },
  ];

  return (
    <section className="py-24 bg-card/50 relative z-10" id="scholarNet">
      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Scholar Net — Liberia's First Digital Campus
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            An ambitious digital academic campus project allowing Liberian students to access offline-capable lesson delivery structured perfectly around the existing national curriculum.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-background border border-white/10 rounded-[32px] p-6 md:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">Student Academic Portal</h3>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-muted-foreground">Term 2 Active</span>
          </div>

          <div className="space-y-6">
            {subjects.map((subject, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-semibold text-foreground/90">{subject.name}</h4>
                    <span className="text-xs text-muted-foreground">{subject.instructor}</span>
                  </div>
                  <span className="font-mono text-sm font-bold">{subject.progress}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${subject.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                    className={`h-full rounded-full ${subject.color}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-sm font-semibold">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Offline Ready
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
