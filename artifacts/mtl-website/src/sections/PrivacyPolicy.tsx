import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Shield, Mail, Phone, MapPin } from "lucide-react";

const CONTACT = {
  email: "mediatechliberia@gmail.com",
  phone: "+231 778 451 835",
  address: "Paynesville City, Liberia",
  website: "mediatechliberia.com",
};

interface Props {
  onClose: () => void;
}

export function PrivacyPolicy({ onClose }: Props) {
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
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(6,182,212,0.2)",
          maxHeight: "calc(100vh - 48px)",
        }}
      >
        {/* Top accent */}
        <div className="h-[2px] w-full flex-shrink-0"
          style={{ background: "linear-gradient(90deg,#06b6d4,#a78bfa,#7c3aed,transparent)" }} />

        {/* Header */}
        <div
          className="flex items-center justify-between px-7 py-5 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.22)" }}
            >
              <Shield size={16} style={{ color: "#06b6d4" }} />
            </div>
            <div>
              <h2 className="text-[15px] font-black text-white">Privacy Policy</h2>
              <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
                Media Tech Liberia · Effective July 2, 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors hover:bg-white/5"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            aria-label="Close"
          >
            <X size={16} style={{ color: "rgba(255,255,255,0.5)" }} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-7 py-8" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(6,182,212,0.3) transparent" }}>
          <div className="space-y-8 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>

            <Section title="1. Introduction">
              <p>Media Tech Liberia ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we handle any information you provide when you contact us through our website.</p>
              <ContactBlock minimal />
            </Section>

            <Section title="2. Information We Collect">
              <p>We only collect information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Fill out our contact form</li>
                <li>Send us an email</li>
                <li>Reach out through any communication channel on our website</li>
              </ul>
              <p>The information you may provide includes:</p>
              <ul>
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Message or inquiry content</li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information you provide solely for the following purposes:</p>
              <ul>
                <li>To respond to your inquiries</li>
                <li>To communicate with you about our services</li>
                <li>To provide customer support</li>
              </ul>
              <p>We do not:</p>
              <ul>
                <li>Sell, rent, or trade your personal information</li>
                <li>Use your information for marketing purposes without your consent</li>
                <li>Share your information with third parties</li>
                <li>Collect information automatically through cookies, trackers, or analytics tools</li>
              </ul>
            </Section>

            <Section title="4. Data Storage and Security">
              <p>We take reasonable measures to protect the information you provide. Since our website does not store data in databases or use tracking technologies, your contact information exists only in the communication channel you use to reach us (e.g., our email inbox).</p>
            </Section>

            <Section title="5. Third-Party Services">
              <p>Our website does not use:</p>
              <ul>
                <li>Analytics tools (e.g., Google Analytics)</li>
                <li>Advertising services</li>
                <li>Social media trackers</li>
                <li>Cookies or similar tracking technologies</li>
              </ul>
              <p>If you contact us via email, your email service provider's privacy policy will apply to the transmission of that email.</p>
            </Section>

            <Section title="6. Your Rights">
              <p>You have the right to:</p>
              <ul>
                <li>Request access to any personal information we hold about you</li>
                <li>Request correction or deletion of your information</li>
                <li>Withdraw consent for us to use your information</li>
                <li>Request that we stop communicating with you</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors"
                  style={{ color: "#06b6d4" }}
                >
                  {CONTACT.email}
                </a>
              </p>
            </Section>

            <Section title="7. Children's Privacy">
              <p>Our website is not directed to children under the age of 13. We do not knowingly collect information from children.</p>
            </Section>

            <Section title="8. Changes to This Privacy Policy">
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
            </Section>

            <Section title="9. Contact Us">
              <p>If you have any questions about this Privacy Policy or how we handle your information, please contact us:</p>
              <ContactBlock />
            </Section>

            <p
              className="text-[11px] pt-4 pb-2 text-center"
              style={{ color: "rgba(255,255,255,0.2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              This Privacy Policy was prepared by Media Tech Liberia to demonstrate our commitment to transparency and professionalism.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3
        className="text-[14px] font-black text-white mb-3"
        style={{ letterSpacing: "-0.01em" }}
      >
        {title}
      </h3>
      <div className="space-y-2.5">
        {children}
      </div>
    </div>
  );
}

function ContactBlock({ minimal }: { minimal?: boolean }) {
  return (
    <div
      className="rounded-xl p-5 mt-3 space-y-3"
      style={{ background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.13)" }}
    >
      <p className="text-[13px] font-black text-white">Media Tech Liberia</p>
      {!minimal && (
        <>
          <ContactRow icon={Mail} label={CONTACT.email} href={`mailto:${CONTACT.email}`} />
          <ContactRow icon={Phone} label={CONTACT.phone} href={`tel:${CONTACT.phone.replace(/\s/g,"")}`} />
          <ContactRow icon={MapPin} label={CONTACT.address} />
        </>
      )}
      {minimal && (
        <>
          <ContactRow icon={Mail} label={`Email: ${CONTACT.email}`} href={`mailto:${CONTACT.email}`} />
          <ContactRow icon={Phone} label={`Phone: ${CONTACT.phone}`} href={`tel:${CONTACT.phone.replace(/\s/g,"")}`} />
        </>
      )}
    </div>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href?: string }) {
  const inner = (
    <>
      <Icon size={13} style={{ color: "#06b6d4" }} className="flex-shrink-0" />
      <span className="text-[13px]">{label}</span>
    </>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 hover:text-white transition-colors"
      style={{ color: "rgba(255,255,255,0.6)" }}
    >
      {inner}
    </a>
  ) : (
    <div className="flex items-center gap-2.5" style={{ color: "rgba(255,255,255,0.6)" }}>
      {inner}
    </div>
  );
}
