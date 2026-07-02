import { motion } from "framer-motion";

const videos = [
  {
    id: "gduDonBfWCo",
    title: "How to Create a ViMore Account",
    color: "#a78bfa",
  },
  {
    id: "RMxv1N0W3Ko",
    title: "ViMore App Walkthrough",
    color: "#06b6d4",
  },
  {
    id: "3bBs-LLwbtY",
    title: "ViMore Demo",
    color: "#34d399",
  },
  {
    id: "958WNg9CUvM",
    title: "ViMore Highlights",
    color: "#f59e0b",
  },
];

export function Videos() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      id="videos"
      style={{ background: "#070707", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="absolute inset-0 line-grid" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.25em] uppercase mb-3"
            style={{ color: "#a78bfa" }}
          >
            — ViMore Demo Videos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-black text-white leading-tight"
            style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)" }}
          >
            See It in Action
          </motion.h2>
        </div>

        {/* Horizontal scroll row */}
        <div
          className="flex gap-4 pb-3 -mx-5 px-5 sm:-mx-8 sm:px-8"
          style={{ overflowX: "auto", scrollbarWidth: "none" }}
        >
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col gap-2 flex-shrink-0"
              style={{ width: 160 }}
            >
              {/* Video card */}
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  aspectRatio: "9/16",
                  border: `1px solid ${v.color}30`,
                  boxShadow: `0 0 18px ${v.color}12`,
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                  loading="lazy"
                />
              </div>
              {/* Label */}
              <p
                className="text-[11px] font-semibold text-center leading-snug"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {v.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
