import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Code2, Shield, Globe, Zap, Facebook } from "lucide-react";
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
    color: "#a78bfa",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mediatechliberia@gmail.com",
    href: "mailto:mediatechliberia@gmail.com",
    color: "#06b6d4",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Media Tech Liberia",
    href: "https://www.facebook.com/share/1GC5aq1Uph/",
    color: "#1877f2",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Paynesville City, Liberia 🇱🇷",
    href: "#",
    color: "#fbbf24",
  },
];

const navLinks = [
  { label: "Capabilities", href: "capabilities" },
  { label: "Services", href: "services" },
  { label: "Scholar Net", href: "scholarNet" },
  { label: "Security", href: "security" },
  { label: "Process", href: "workflow" },
  { label: "Team", href: "about" },
  { label: "Metrics", href: "metrics" },
];

const pillars = [
  { icon: Code2, label: "Sovereign Code" },
  { icon: Shield, label: "Data Security" },
  { icon: Globe, label: "West Africa First" },
  { icon: Zap, label: "High Performance" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDataPolicy: () => void;
  onOpenSLA: () => void;
}

export function Footer({ onOpenPrivacy, onOpenTerms, onOpenDataPolicy, onOpenSLA }: FooterProps) {
  return (
    <footer
      id="contact"
      style={{ background: "#030303", borderTop: "1px solid rgba(124,58,237,0.15)" }}
    >
      {/* Top glow line */}
      <div
        className="h-[1px] w-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), rgba(6,182,212,0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 mb-6 group">
              <div
                className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0"
                style={{ border: "1px solid rgba(124,58,237,0.4)", boxShadow: "0 0 18px rgba(124,58,237,0.2)" }}
              >
                <img src={mtlLogo} alt="MTL" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[12px] font-black tracking-widest text-white uppercase leading-none">
                  Media Tech Liberia
                </p>
                <p className="text-[9px] font-black tracking-[0.2em] uppercase mt-0.5"
                  style={{ color: "rgba(167,139,250,0.6)" }}>
                  West Africa's Digital Infrastructure Layer
                </p>
              </div>
            </button>

            <p className="text-[13px] leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.38)" }}>
              Engineering Africa's digital future through high-performance, sovereign, data-lite software
              infrastructure. Built in Liberia. Built for Africa.
            </p>

            <div className="grid grid-cols-2 gap-2">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <p.icon size={12} style={{ color: "#a78bfa" }} className="flex-shrink-0" />
                  <span className="text-[11px] font-bold" style={{ color: "rgba(255,255,255,0.5)" }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-6" style={{ color: "rgba(255,255,255,0.25)" }}>
              Contact Us
            </p>
            <div className="flex flex-col gap-4">
              {contactItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 group"
                  data-testid={`link-contact-${item.label.toLowerCase()}`}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}10`, border: `1px solid ${item.color}22` }}
                  >
                    <item.icon size={14} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>
                      {item.label}
                    </div>
                    <div
                      className="text-[13px] font-semibold group-hover:text-white transition-colors"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-6" style={{ color: "rgba(255,255,255,0.25)" }}>
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left py-2 text-[13px] font-semibold transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.42)" }}
                  aria-label={`Go to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Status */}
            <div
              className="mt-8 flex items-center gap-2.5 px-4 py-3 rounded-xl"
              style={{ background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.12)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[12px] font-black" style={{ color: "#34d399" }}>All Systems Operational</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} className="mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.22)" }}>
            © {new Date().getFullYear()} Media Tech Liberia · All rights reserved · Built in Liberia 🇱🇷
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <button
              onClick={onOpenPrivacy}
              className="text-[11px] transition-colors hover:text-white/50 cursor-pointer"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="text-[11px] transition-colors hover:text-white/50 cursor-pointer"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Terms of Service
            </button>
            <button
              onClick={onOpenDataPolicy}
              className="text-[11px] transition-colors hover:text-white/50 cursor-pointer"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Data Policy
            </button>
            <button
              onClick={onOpenSLA}
              className="text-[11px] transition-colors hover:text-white/50 cursor-pointer"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              SLA
            </button>
          </div>
        </div>
      </div>

      {/* Compliance */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.03)", background: "rgba(0,0,0,0.5)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5">
          <p className="text-[11px] text-center leading-relaxed" style={{ color: "rgba(255,255,255,0.15)" }}>
            © {new Date().getFullYear()} Media Tech Liberia. All Rights Reserved. Engineered in Paynesville City, Liberia. All custom applications are deployed on self-hosted, sovereign cloud nodes. Compliance maintained under Liberia Business Registry (LBR) frameworks.
          </p>
        </div>
      </div>
    </footer>
  );
}
