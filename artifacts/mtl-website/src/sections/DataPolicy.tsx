import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Database } from "lucide-react";

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

export function DataPolicy({ onClose }: Props) {
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
        style={{ background: "#0a0a0a", border: "1px solid rgba(124,58,237,0.2)", maxHeight: "calc(100vh - 48px)" }}
      >
        {/* Top accent */}
        <div className="h-[2px] w-full flex-shrink-0"
          style={{ background: "linear-gradient(90deg,#7c3aed,#a78bfa,#06b6d4,transparent)" }} />

        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.22)" }}>
              <Database size={16} style={{ color: "#a78bfa" }} />
            </div>
            <div>
              <h2 className="text-[15px] font-black text-white">Data Policy</h2>
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
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(124,58,237,0.3) transparent" }}>
          <div className="space-y-8 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>

            <Section title="1. Overview">
              <p>Media Tech Liberia ("MTL") is committed to responsible data stewardship. This Data Policy describes how data is collected, stored, processed, and protected across all MTL platforms including ViMore and Scholar Net.</p>
            </Section>

            <Section title="2. Data We Collect">
              <p>Depending on the platform and features you use, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Account registration information (name, email, phone number)</li>
                <li>User-generated content (posts, uploads, messages)</li>
                <li>Device and usage information (device type, operating system, app version)</li>
                <li>Connection data (IP address, session duration, feature interactions)</li>
                <li>Academic records and progress data on Scholar Net (with user consent)</li>
              </ul>
            </Section>

            <Section title="3. Data Sovereignty & Storage">
              <p>All MTL user data is stored on sovereign, self-hosted cloud infrastructure located within or controlled by Liberian entities. We do not route user data through foreign third-party cloud providers without explicit disclosure.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Primary data nodes: Paynesville City, Liberia</li>
                <li>Backups: encrypted, stored on MTL-controlled servers</li>
                <li>Data is never sold to third parties</li>
              </ul>
            </Section>

            <Section title="4. Data Minimisation">
              <p>MTL is built on a data-lite architecture. We collect only what is necessary to deliver our services. All platforms are engineered to minimise bandwidth and storage use — a direct reflection of our respect for Liberia's connectivity environment.</p>
            </Section>

            <Section title="5. How We Use Your Data">
              <ul className="list-disc pl-5 space-y-1">
                <li>To operate and improve our platforms</li>
                <li>To personalise your experience within the app</li>
                <li>To send service-related communications (not marketing, unless opted in)</li>
                <li>To detect and prevent fraud or abuse</li>
                <li>To fulfil obligations under Liberian law</li>
              </ul>
            </Section>

            <Section title="6. Data Sharing">
              <p>We do not share your personal data with advertisers, data brokers, or unaffiliated companies. We may share data only:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>With your explicit consent</li>
                <li>To comply with a valid legal obligation or court order</li>
                <li>With service partners operating under strict data processing agreements with MTL</li>
              </ul>
            </Section>

            <Section title="7. Data Retention">
              <p>We retain your data for as long as your account is active or as required to provide services. You may request deletion of your account and associated data at any time by contacting us at <span className="text-purple-400">mediatechliberia@gmail.com</span>. Deletion is completed within 30 days of a verified request.</p>
            </Section>

            <Section title="8. Your Rights">
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-white">Access</strong> — request a copy of the data we hold about you</li>
                <li><strong className="text-white">Correction</strong> — request that inaccurate data be corrected</li>
                <li><strong className="text-white">Deletion</strong> — request removal of your personal data</li>
                <li><strong className="text-white">Portability</strong> — request your data in a machine-readable format</li>
                <li><strong className="text-white">Objection</strong> — object to certain types of data processing</li>
              </ul>
              <p>To exercise any of these rights, contact us at <span className="text-purple-400">mediatechliberia@gmail.com</span> or call <span className="text-purple-400">+231 778 451 835</span>.</p>
            </Section>

            <Section title="9. Security">
              <p>MTL employs industry-standard security practices including end-to-end encryption for sensitive transmissions, role-based access controls, and regular security audits. In the event of a data breach affecting your information, we will notify you within 72 hours of discovery.</p>
            </Section>

            <Section title="10. Updates to This Policy">
              <p>We may update this Data Policy from time to time. When we do, we will revise the effective date above and notify registered users via in-app notification or email. Continued use of our services constitutes acceptance of the updated policy.</p>
            </Section>

            <Section title="11. Contact">
              <p>For any data-related questions or requests, reach us at:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Email: <span className="text-purple-400">mediatechliberia@gmail.com</span></li>
                <li>Phone: <span className="text-purple-400">+231 778 451 835</span></li>
                <li>Address: Paynesville City, Liberia</li>
              </ul>
            </Section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
