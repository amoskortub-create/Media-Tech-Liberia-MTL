import { motion } from "framer-motion";
import { Play, Users, Youtube } from "lucide-react";
import amosPhoto from "@assets/Face_Clean-up_Studio_In_a_studio_portrait_style_a_man_with_dar_1779748900032.jpg";
import fredPhoto from "@assets/1782961077924_1782961146710.jpg";
import ujayPhoto from "@assets/1782961027228_1782961146999.jpg";
import ebenezerPhoto from "@assets/IMG-20260503-WA0006_1782961192424.jpg";
import aaronPhoto from "@assets/1780710477236_1782961209934.jpg";

const values = [
  { label: "Africa-First", desc: "Built for African voices and communities." },
  { label: "Integrity", desc: "Honest, transparent, and trustworthy." },
  { label: "Innovation", desc: "Always pushing the boundaries of what's possible." },
  { label: "Empathy", desc: "Led by genuine care for our community." },
];

const team = [
  {
    name: "Amos B. Kortu",
    role: "Founder & CEO",
    photo: amosPhoto,
    hasVideo: true,
    bio: "The visionary who sparked the dream — Amos built Media Tech Liberia on the belief that Africa deserves world-class technology built by Africans themselves.",
    color: "#3b82f6",
  },
  {
    name: "Fred J. Johnson",
    role: "Editors & Media Director",
    photo: fredPhoto,
    bio: "Leads all editorial operations and media strategy, shaping the narrative of West Africa's digital future through compelling content and creative direction.",
    color: "#10b981",
  },
  {
    name: "Ujay George",
    role: "Programmer",
    photo: ujayPhoto,
    bio: "Core engineer behind Media Tech Liberia's data-lite architectures — bringing technical precision and innovative solutions to every system built.",
    color: "#8b5cf6",
  },
  {
    name: "Ebenezer Johnson",
    role: "Director of Media Tech Liberia",
    photo: ebenezerPhoto,
    bio: "Oversees operations and strategic partnerships, driving the organization's mission to empower Liberian talent across the digital ecosystem.",
    color: "#f59e0b",
  },
  {
    name: "Aaron M. Tulay",
    role: "President",
    photo: aaronPhoto,
    bio: "Leads organizational governance and institutional relationships, ensuring Media Tech Liberia's vision translates into lasting impact for Liberia.",
    color: "#06b6d4",
  },
];

export function Leadership() {
  return (
    <section className="py-24 relative overflow-hidden" id="about"
      style={{ background: "hsl(222 47% 4%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 border text-[11px] font-bold uppercase tracking-widest"
            style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.2)", color: "#60a5fa" }}
          >
            <Users size={10} />
            Executive Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight"
          >
            The Team Building
            <span style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> Africa's Digital Future</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            A passionate team of Liberian builders, creatives, and strategists committed to engineering world-class technology from the heart of West Africa.
          </motion.p>
        </div>

        {/* Founder featured card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden mb-6"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(59,130,246,0.15)" }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Photo */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="h-72 lg:h-full overflow-hidden">
                <img
                  src={amosPhoto}
                  alt="Amos B. Kortu — Founder & CEO"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 15%" }}
                  data-testid="img-founder-amos"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 p-6 md:p-8 flex flex-col gap-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-black text-white">Amos B. Kortu</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold"
                    style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", color: "#60a5fa" }}>
                    Founder & CEO
                  </span>
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Every great movement begins with a single, burning idea. For Amos B. Kortu, that idea was rooted in a profound belief: that Africa — and Liberia in particular — deserved its own world-class technology platform. A platform built not by outsiders, but by Liberians who understood the heartbeat of their nation.
                </p>
              </div>

              <blockquote className="relative pl-5 py-2"
                style={{ borderLeft: "2px solid rgba(59,130,246,0.5)" }}>
                <p className="text-[14px] italic font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>
                  "Africa's digital future is not something to wait for — it is something to build."
                </p>
              </blockquote>

              {/* Demo video section */}
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(59,130,246,0.15)" }}>
                <div className="flex items-center gap-3 px-4 py-3"
                  style={{ background: "rgba(59,130,246,0.08)", borderBottom: "1px solid rgba(59,130,246,0.1)" }}>
                  <Play size={14} className="text-blue-400" />
                  <span className="text-[12px] font-bold text-white/80">How to Create a ViMore Account</span>
                  <span className="ml-auto text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Demo by Amos B. Kortu
                  </span>
                </div>
                <div
                  className="relative flex flex-col items-center justify-center gap-3 py-10 px-6 text-center"
                  style={{ background: "rgba(0,0,0,0.3)" }}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}>
                    <Youtube size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white/70 mb-1">
                      Video Tutorial — Coming Soon
                    </p>
                    <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Amos walks you through creating your ViMore account step by step.
                      <br />
                      A YouTube link will be added here shortly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest of team — grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {team.slice(1).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${member.color}15`,
              }}
            >
              {/* Photo */}
              <div className="w-full h-52 overflow-hidden flex-shrink-0">
                <img
                  src={member.photo}
                  alt={`${member.name} — ${member.role}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  data-testid={`img-team-${member.name.split(" ")[0].toLowerCase()}`}
                />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                {/* Top accent dot */}
                <div className="w-5 h-1 rounded-full" style={{ background: member.color }} />

                <div>
                  <h3 className="text-[15px] font-bold text-white leading-snug">{member.name}</h3>
                  <p className="text-[12px] font-semibold mt-0.5" style={{ color: member.color }}>
                    {member.role}
                  </p>
                </div>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-widest mb-6"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Our Core Values
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((val, i) => (
              <motion.div
                key={val.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -2 }}
                className="rounded-xl p-5 transition-all"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-[13px] font-bold text-white mb-1.5">{val.label}</p>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
