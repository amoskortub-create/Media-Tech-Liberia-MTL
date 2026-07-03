import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Gauge } from "lucide-react";

interface Props {
  onClose: () => void;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[13px] font-black text-white mb-3 pb-2"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{title}</h3>
      <div className="space-y-2.5" style={{ color: "rgba(255,255,255,0.58)" }}>
        {children}
      </div>
    </div>
  );
}

function MetricRow({ label, value, color = "#34d399" }: { label: string; value: string; color?: string }) {
  return (
    <div className="flex items-center justify-between py-2.5 px-4 rounded-lg"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
      <span style={{ color: "rgba(255,255,255,0.55)" }}>{label}</span>
      <span className="font-black text-[13px]" style={{ color }}>{value}</span>
    </div>
  );
}

export function SLA({ onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-start justify-center"
      style={{ background: "rgba(0,0,0,0.88)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="relative w-full max-w-3xl mx-4 my-6 rounded-2xl overflow-hidden flex flex-col"
        style={{ background: "#0a0a0a", border: "1px solid rgba(52,211,153,0.2)", maxHeight: "calc(100vh - 48px)" }}
      >
        {/* Top accent */}
        <div className="h-[2px] w-full flex-shrink-0"
          style={{ background: "linear-gradient(90deg,#34d399,#06b6d4,#a78bfa,transparent)" }} />

        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.22)" }}>
              <Gauge size={16} style={{ color: "#34d399" }} />
            </div>
            <div>
              <h2 className="text-[15px] font-black text-white">Service Level Agreement</h2>
              <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
                Media Tech Liberia · Effective July 2, 2026
              </p>
            </div>
          </div>
          <button onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors hover:bg-white/5"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }} aria-label="Close">
            <X size={16} style={{ color: "rgba(255,255,255,0.5)" }} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-7 py-8"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(52,211,153,0.3) transparent" }}>
          <div className="space-y-8 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>

            <Section title="1. Purpose">
              <p>This Service Level Agreement ("SLA") sets out the performance standards, availability commitments, and support obligations that Media Tech Liberia ("MTL") provides to users of its platforms — including ViMore and Scholar Net — and to enterprise or institutional partners.</p>
            </Section>

            <Section title="2. Service Availability">
              <p>MTL targets the following uptime commitments for production services:</p>
              <div className="space-y-2 mt-3">
                <MetricRow label="ViMore Platform" value="99.5% uptime / month" color="#a78bfa" />
                <MetricRow label="Scholar Net" value="99.0% uptime / month" color="#06b6d4" />
                <MetricRow label="API Services" value="99.5% uptime / month" color="#34d399" />
                <MetricRow label="Scheduled Maintenance Window" value="Sundays 2:00–4:00 AM WAT" color="#f59e0b" />
              </div>
              <p className="mt-3">Downtime caused by scheduled maintenance, force majeure, third-party infrastructure failures, or actions of the user are excluded from uptime calculations.</p>
            </Section>

            <Section title="3. Incident Response Times">
              <p>MTL classifies incidents by severity and commits to the following initial response and resolution targets:</p>
              <div className="space-y-2 mt-3">
                <MetricRow label="P1 — Critical (service down)" value="Response: 1hr · Resolution: 4hr" color="#f87171" />
                <MetricRow label="P2 — Major (degraded service)" value="Response: 4hr · Resolution: 24hr" color="#f59e0b" />
                <MetricRow label="P3 — Minor (partial impact)" value="Response: 1 business day" color="#34d399" />
                <MetricRow label="P4 — Low (cosmetic/informational)" value="Response: 3 business days" color="#a78bfa" />
              </div>
            </Section>

            <Section title="4. Support Channels">
              <ul className="list-disc pl-5 space-y-1">
                <li>Email: <span className="text-emerald-400">mediatechliberia@gmail.com</span></li>
                <li>WhatsApp: <span className="text-emerald-400">+231 778 451 835</span></li>
                <li>Support hours: Monday–Friday, 8:00 AM–6:00 PM WAT</li>
                <li>Emergency P1 incidents: 24/7 via WhatsApp</li>
              </ul>
            </Section>

            <Section title="5. Data Backup & Recovery">
              <div className="space-y-2 mt-1">
                <MetricRow label="Backup Frequency" value="Every 24 hours" color="#34d399" />
                <MetricRow label="Backup Retention" value="30 days" color="#34d399" />
                <MetricRow label="Recovery Time Objective (RTO)" value="≤ 8 hours" color="#06b6d4" />
                <MetricRow label="Recovery Point Objective (RPO)" value="≤ 24 hours" color="#06b6d4" />
              </div>
            </Section>

            <Section title="6. Service Credits">
              <p>If MTL fails to meet its uptime commitments in a given calendar month, eligible customers may request service credits as follows:</p>
              <div className="space-y-2 mt-3">
                <MetricRow label="99.0%–99.5% uptime" value="5% credit" color="#f59e0b" />
                <MetricRow label="95.0%–98.9% uptime" value="10% credit" color="#f59e0b" />
                <MetricRow label="Below 95.0% uptime" value="25% credit" color="#f87171" />
              </div>
              <p className="mt-3">Credits are applied to the next billing cycle. Credits are the sole and exclusive remedy for SLA failures. To claim a credit, submit a request within 30 days of the incident to <span className="text-emerald-400">mediatechliberia@gmail.com</span>.</p>
            </Section>

            <Section title="7. Customer Responsibilities">
              <p>To be eligible for SLA protections, customers agree to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use services in compliance with MTL's Terms of Service</li>
                <li>Promptly report incidents through official support channels</li>
                <li>Maintain valid contact information for incident communications</li>
                <li>Not engage in activities that degrade shared platform performance</li>
              </ul>
            </Section>

            <Section title="8. Exclusions">
              <p>This SLA does not apply to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Free or beta-tier services</li>
                <li>Force majeure events (flooding, power outages, civil unrest)</li>
                <li>Scheduled maintenance communicated ≥ 48 hours in advance</li>
                <li>Failures caused by third-party internet connectivity in Liberia</li>
                <li>Incidents resulting from customer misuse or configuration errors</li>
              </ul>
            </Section>

            <Section title="9. Changes to This SLA">
              <p>MTL reserves the right to update this SLA with 30 days' notice to affected customers. Material changes will be communicated via email and in-app notification.</p>
            </Section>

            <Section title="10. Contact">
              <ul className="list-disc pl-5 space-y-1">
                <li>Email: <span className="text-emerald-400">mediatechliberia@gmail.com</span></li>
                <li>Phone: <span className="text-emerald-400">+231 778 451 835</span></li>
                <li>Address: Paynesville City, Liberia</li>
              </ul>
            </Section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
