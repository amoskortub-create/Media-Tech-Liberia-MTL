import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Zap, Globe, Shield, Code2 } from "lucide-react";
import mtlLogo from "@assets/1775314197014_transcpr_1779748663765.jpg";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+231 778 451 835",
    href: "https://wa.me/231778451835?text=Hi%20Media%20Tech%20Liberia%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.",
    color: "#25d366",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+231 778 451 835",
    href: "tel:+231778451835",
    color: "#3b82f6",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@mediatechliberia.com",
    href: "mailto:contact@mediatechliberia.com",
    color: "#06b6d4",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Paynesville City, Liberia 🇱🇷",
    href: "#",
    color: "#f59e0b",
  },
];

const navLinks = [
  { label: "Capabilities", href: "capabilities" },
  { label: "Services", href: "services" },
  { label: "ViMore", href: "viMore" },
  { label: "Scholar Net", href: "scholarNet" },
  { label: "Security", href: "security" },
  { label: "Process", href: "workflow" },
  { label: "Team", href: "about" },
];

const pillars = [
  { icon: Code2, label: "Sovereign Code" },
  { icon: Shield, label: "Data Security" },
  { icon: Globe, label: "West Africa First" },
  { icon: Zap, label: "High Performance" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Data Policy", href: "#" },
  { label: "SLA", href: "#" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Footer() {
  return (
    <footer id="contact" style={{ background: "hsl(222 47% 3%)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0"
                style={{ border: "1px solid rgba(59,130,246,0.3)", boxShadow: "0 0 12px rgba(59,130,246,0.2)" }}>
                <img src={mtlLogo} alt="Media Tech Liberia" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-white tracking-widest uppercase">Media Tech Liberia</p>
                <p className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: "#60a5fa" }}>
                  West Africa's Digital Layer
                </p>
              </div>
            </div>

            <p className="text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              Engineering Africa's digital future through high-performance, sovereign, data-lite software infrastructure. Built in Liberia. Built for Africa.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-2">
              {pillars.map((p) => (
                <div key={p.label} className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <p.icon size={12} className="text-blue-400 flex-shrink-0" />
                  <span className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.55)" }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Contact
            </p>
            <div className="flex flex-col gap-3">
              {contactItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 group"
                  data-testid={`link-contact-${item.label.toLowerCase()}`}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}>
                    <item.icon size={14} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>{item.label}</div>
                    <div className="text-[13px] font-medium group-hover:text-white transition-colors"
                      style={{ color: "rgba(255,255,255,0.65)" }}>{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-[13px] font-medium transition-colors hover:text-white py-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Status */}
            <div className="mt-8 flex items-center gap-2 px-4 py-3 rounded-xl"
              style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.1)" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[12px] font-semibold" style={{ color: "#34d399" }}>All Systems Operational</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} className="mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 Media Tech Liberia. All rights reserved. · Built in Liberia 🇱🇷
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href}
                className="text-[11px] transition-colors hover:text-white/60"
                style={{ color: "rgba(255,255,255,0.25)" }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(0,0,0,0.3)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-[11px] text-center leading-relaxed" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 Media Tech Liberia. All Rights Reserved. Engineered in Paynesville City, Liberia. All custom applications are deployed on self-hosted, sovereign cloud nodes. Business registration, data policies, and institutional SLAs are maintained in strict compliance with the Liberia Business Registry (LBR) frameworks.
          </p>
        </div>
      </div>
    </footer>
  );
}
