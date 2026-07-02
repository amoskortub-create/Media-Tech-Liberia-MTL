import { motion } from "framer-motion";
import { Users } from "lucide-react";
import amosPhoto from "@assets/Face_Clean-up_Studio_In_a_studio_portrait_style_a_man_with_dar_1779748900032.jpg";
import fredPhoto from "@assets/1782961077924_1782961146710.jpg";
import ujayPhoto from "@assets/1782961027228_1782961146999.jpg";
import ebenezerPhoto from "@assets/IMG-20260503-WA0006_1782961192424.jpg";
import aaronPhoto from "@assets/1780710477236_1782961209934.jpg";

// YouTube Shorts embed IDs
const VIDEO_1 = "gduDonBfWCo"; // first short
const VIDEO_2 = "RMxv1N0W3Ko"; // second short

const team = [
  {
    name: "Fred J. Johnson",
    role: "Editors & Media Director",
    photo: fredPhoto,
    color: "#34d399",
    bio: "Leads all editorial operations and media strategy, shaping the narrative of West Africa's digital future through compelling content and creative direction.",
  },
  {
    name: "Ujay George",
    role: "Programmer",
    photo: ujayPhoto,
    color: "#a78bfa",
    bio: "Core engineer behind Media Tech Liberia's data-lite architectures — bringing technical precision and innovative solutions to every system built.",
  },
  {
    name: "Ebenezer Johnson",
    role: "Director of Media Tech Liberia",
    photo: ebenezerPhoto,
    color: "#fbbf24",
    bio: "Oversees operations and strategic partnerships, driving the organization's mission to empower Liberian talent across the digital ecosystem.",
  },
  {
    name: "Aaron M. Tulay",
    role: "President",
    photo: aaronPhoto,
    color: "#06b6d4",
    bio: "Leads organizational governance and institutional relationships, ensuring Media Tech Liberia's vision translates into lasting impact for Liberia.",
  },
];

const values = [
  { label: "Africa-First", desc: "Built for African voices and communities." },
  { label: "Integrity", desc: "Honest, transparent, and trustworthy in all we do." },
  { label: "Innovation", desc: "Always pushing the boundaries of what's possible." },
  { label: "Empathy", desc: "Led by genuine care for our community." },
];

export function Leadership() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      id="about"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="absolute inset-0 line-grid" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.25em] uppercase mb-4"
            style={{ color: "#a78bfa" }}
          >
            — Executive Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-black text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}
          >
            The Team Building
            <br />
            <span
              style={{
                background: "linear-gradient(135deg,#a78bfa,#7c3aed,#06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Africa's Digital Future
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            A passionate team of Liberian builders, creatives, and strategists committed to engineering
            world-class technology from the heart of West Africa.
          </motion.p>
        </div>

        {/* ── Founder featured card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden mb-5"
          style={{ background: "#0d0d0d", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          {/* Top accent */}
          <div
            className="h-[2px] w-full"
            style={{ background: "linear-gradient(90deg, #7c3aed, #a78bfa, #06b6d4, transparent)" }}
          />

          <div className="flex flex-col lg:flex-row">
            {/* Founder photo */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="h-80 lg:h-full overflow-hidden">
                <img
                  src={amosPhoto}
                  alt="Amos B. Kortu — Founder & CEO"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 15%" }}
                  data-testid="img-founder-amos"
                />
              </div>
            </div>

            {/* Founder info */}
            <div className="flex-1 p-7 md:p-9 flex flex-col gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl md:text-3xl font-black text-white">Amos B. Kortu</h3>
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-black tracking-widest uppercase"
                    style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#a78bfa" }}
                  >
                    Founder & CEO
                  </span>
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Every great movement begins with a single, burning idea. For Amos B. Kortu, that idea was
                  rooted in a profound belief: that Africa — and Liberia in particular — deserved its own
                  world-class technology platform. A platform built not by outsiders, but by Liberians who
                  understood the heartbeat of their nation.
                </p>
              </div>

              <blockquote
                className="pl-5 py-1"
                style={{ borderLeft: "2px solid rgba(124,58,237,0.55)" }}
              >
                <p className="text-[14px] italic font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
                  "Africa's digital future is not something to wait for — it is something to build."
                </p>
              </blockquote>

              {/* ── Two YouTube Shorts side by side ── */}
              <div>
                <p
                  className="text-[10px] font-black tracking-[0.22em] uppercase mb-4"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  ViMore Demo Videos — by Amos B. Kortu
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Video 1 */}
                  <div className="flex flex-col gap-2">
                    <div
                      className="relative rounded-xl overflow-hidden"
                      style={{
                        border: "1px solid rgba(124,58,237,0.22)",
                        boxShadow: "0 0 24px rgba(124,58,237,0.1)",
                        aspectRatio: "9/16",
                        maxHeight: 380,
                      }}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${VIDEO_1}?rel=0&modestbranding=1`}
                        title="ViMore Demo — How to Create an Account"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                        sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="absolute inset-0 w-full h-full"
                        style={{ border: "none" }}
                        loading="lazy"
                        data-testid="iframe-video-1"
                      />
                    </div>
                    <p className="text-[11px] font-semibold text-center" style={{ color: "rgba(255,255,255,0.38)" }}>
                      How to Create a ViMore Account
                    </p>
                  </div>

                  {/* Video 2 */}
                  <div className="flex flex-col gap-2">
                    <div
                      className="relative rounded-xl overflow-hidden"
                      style={{
                        border: "1px solid rgba(6,182,212,0.22)",
                        boxShadow: "0 0 24px rgba(6,182,212,0.08)",
                        aspectRatio: "9/16",
                        maxHeight: 380,
                      }}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${VIDEO_2}?rel=0&modestbranding=1`}
                        title="ViMore Demo — App Walkthrough"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                        sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="absolute inset-0 w-full h-full"
                        style={{ border: "none" }}
                        loading="lazy"
                        data-testid="iframe-video-2"
                      />
                    </div>
                    <p className="text-[11px] font-semibold text-center" style={{ color: "rgba(255,255,255,0.38)" }}>
                      ViMore App Walkthrough
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Rest of team ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
              style={{ background: "#0d0d0d", border: `1px solid ${m.color}18` }}
            >
              {/* Top accent */}
              <div className="h-[1px]" style={{ background: `linear-gradient(90deg, ${m.color}90, transparent)` }} />

              {/* Photo */}
              <div className="w-full h-52 overflow-hidden flex-shrink-0">
                <img
                  src={m.photo}
                  alt={`${m.name} — ${m.role}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  data-testid={`img-team-${m.name.split(" ")[0].toLowerCase()}`}
                />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-2.5 flex-1">
                <div className="w-5 h-[2px] rounded-full" style={{ background: m.color }} />
                <h3 className="text-[15px] font-black text-white leading-snug">{m.name}</h3>
                <p className="text-[11px] font-black uppercase tracking-wider" style={{ color: m.color }}>
                  {m.role}
                </p>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
                  {m.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Core values ── */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black tracking-[0.25em] uppercase mb-6"
            style={{ color: "rgba(255,255,255,0.22)" }}
          >
            Our Core Values
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="rounded-xl p-5 transition-all"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <p className="text-[14px] font-black text-white mb-1.5">{v.label}</p>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
