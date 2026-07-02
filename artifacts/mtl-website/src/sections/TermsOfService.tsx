import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, FileText, Mail, Phone, MapPin, Globe } from "lucide-react";

const CONTACT = {
  email: "contact@mediatechliberia.com",
  phone: "+231 778 451 835",
  address: "Paynesville City, Liberia",
  website: "mediatechliberia.com",
};

interface Props {
  onClose: () => void;
}

export function TermsOfService({ onClose }: Props) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape
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
          border: "1px solid rgba(124,58,237,0.25)",
          maxHeight: "calc(100vh - 48px)",
        }}
      >
        {/* Top accent */}
        <div className="h-[2px] w-full flex-shrink-0"
          style={{ background: "linear-gradient(90deg,#7c3aed,#a78bfa,#06b6d4,transparent)" }} />

        {/* Header */}
        <div
          className="flex items-center justify-between px-7 py-5 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)" }}
            >
              <FileText size={16} style={{ color: "#a78bfa" }} />
            </div>
            <div>
              <h2 className="text-[15px] font-black text-white">Terms of Service</h2>
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
        <div className="overflow-y-auto flex-1 px-7 py-8 legal-scroll" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(124,58,237,0.3) transparent" }}>
          <div className="prose-legal space-y-8 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>

            <Section title="1. Acceptance of Terms">
              <p>Welcome to Media Tech Liberia ("we," "our," "us," or "Company"). By accessing or using our website ("the Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site.</p>
              <p>These Terms constitute a legally binding agreement between you and Media Tech Liberia regarding your use of the Site.</p>
            </Section>

            <Section title="2. About Media Tech Liberia">
              <p>Media Tech Liberia is a technology and media company based in Liberia. Our website serves as a platform for visitors to learn about our services and contact us for professional inquiries.</p>
            </Section>

            <Section title="3. Use of the Website">
              <Sub title="3.1 Permitted Use">
                You may use our Site solely for lawful purposes, including:
                <ul>
                  <li>Learning about our services</li>
                  <li>Contacting us through the provided communication channels</li>
                  <li>Accessing information made available on the Site</li>
                </ul>
              </Sub>
              <Sub title="3.2 Prohibited Conduct">
                You agree not to:
                <ul>
                  <li>Use the Site for any unlawful purpose</li>
                  <li>Transmit any harmful, threatening, abusive, or defamatory content</li>
                  <li>Attempt to gain unauthorized access to any part of the Site</li>
                  <li>Interfere with or disrupt the operation of the Site</li>
                  <li>Use automated systems or software to extract data from the Site</li>
                  <li>Impersonate any person or misrepresent your affiliation with any entity</li>
                </ul>
              </Sub>
            </Section>

            <Section title="4. Contact Information">
              <p>When you contact us through our Site, you agree to:</p>
              <ul>
                <li>Provide accurate and truthful information</li>
                <li>Use the contact channels for legitimate business inquiries only</li>
                <li>Not send spam, unsolicited messages, or promotional content</li>
              </ul>
              <p>We reserve the right to ignore or block communications that violate these Terms.</p>
            </Section>

            <Section title="5. Intellectual Property">
              <Sub title="5.1 Ownership">
                All content on the Site, including but not limited to text, graphics, logos, images, and design elements, is the property of Media Tech Liberia or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </Sub>
              <Sub title="5.2 Limited License">
                You are granted a limited, non-exclusive, non-transferable license to access and view the content on the Site for personal, non-commercial use. You may not:
                <ul>
                  <li>Reproduce, distribute, or modify any content without our prior written consent</li>
                  <li>Use our trademarks or branding without authorization</li>
                  <li>Remove any copyright or proprietary notices from the Site</li>
                </ul>
              </Sub>
            </Section>

            <Section title="6. Disclaimer of Warranties">
              <p>The Site and all content are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied. To the fullest extent permitted by law, Media Tech Liberia disclaims all warranties, including but not limited to:</p>
              <ul>
                <li>Warranties of merchantability</li>
                <li>Warranties of fitness for a particular purpose</li>
                <li>Warranties of non-infringement</li>
                <li>Warranties regarding the accuracy or reliability of any content</li>
              </ul>
              <p>We do not guarantee that the Site will be uninterrupted, error-free, or free from viruses or other harmful components.</p>
            </Section>

            <Section title="7. Limitation of Liability">
              <p>To the fullest extent permitted by applicable law, Media Tech Liberia shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of or inability to use the Site, even if we have been advised of the possibility of such damages.</p>
              <p>This limitation applies to all claims, whether based on warranty, contract, tort, or any other legal theory.</p>
            </Section>

            <Section title="8. Indemnification">
              <p>You agree to indemnify, defend, and hold harmless Media Tech Liberia, its officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:</p>
              <ul>
                <li>Your use of the Site</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of a third party</li>
              </ul>
            </Section>

            <Section title="9. Third-Party Links">
              <p>Our Site may contain links to third-party websites. These links are provided for convenience only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites. You access third-party sites at your own risk.</p>
            </Section>

            <Section title="10. Termination">
              <p>We reserve the right to terminate or suspend your access to the Site, in whole or in part, at any time and for any reason, without prior notice or liability.</p>
            </Section>

            <Section title="11. Governing Law and Jurisdiction">
              <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of Liberia, without regard to its conflict of law principles.</p>
              <p>Any disputes arising out of or relating to these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts of Liberia.</p>
            </Section>

            <Section title="12. Changes to These Terms">
              <p>We reserve the right to modify or update these Terms at any time. Any changes will be effective immediately upon posting the revised Terms on the Site. Your continued use of the Site after any changes constitutes your acceptance of the updated Terms.</p>
              <p>We encourage you to review these Terms periodically.</p>
            </Section>

            <Section title="13. Severability">
              <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.</p>
            </Section>

            <Section title="14. Entire Agreement">
              <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and Media Tech Liberia regarding your use of the Site and supersede all prior agreements, understandings, and communications.</p>
            </Section>

            <Section title="15. Contact Us">
              <p>If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us:</p>
              <ContactBlock />
            </Section>

            <p
              className="text-[11px] pt-4 pb-2 text-center"
              style={{ color: "rgba(255,255,255,0.2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              These Terms of Service were prepared by Media Tech Liberia to establish clear guidelines for the use of our website and to demonstrate our commitment to professionalism and transparency.
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
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="ml-2 mb-2.5">
      <p className="text-[12px] font-black text-white/70 mb-1.5">{title}</p>
      <div className="space-y-1.5 text-[13px]">{children}</div>
    </div>
  );
}

function ContactBlock() {
  return (
    <div
      className="rounded-xl p-5 mt-4 space-y-3"
      style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.15)" }}
    >
      <p className="text-[13px] font-black text-white">Media Tech Liberia</p>
      <ContactRow icon={Mail} label={CONTACT.email} href={`mailto:${CONTACT.email}`} />
      <ContactRow icon={Phone} label={CONTACT.phone} href={`tel:${CONTACT.phone.replace(/\s/g,"")}`} />
      <ContactRow icon={MapPin} label={CONTACT.address} />
      <ContactRow icon={Globe} label={CONTACT.website} href={`https://${CONTACT.website}`} />
    </div>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-2.5">
      <Icon size={13} style={{ color: "#a78bfa" }} className="flex-shrink-0" />
      <span className="text-[13px]">{label}</span>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 hover:text-white transition-colors"
      style={{ color: "rgba(255,255,255,0.6)" }}
    >
      <Icon size={13} style={{ color: "#a78bfa" }} className="flex-shrink-0" />
      <span className="text-[13px]">{label}</span>
    </a>
  ) : (
    <div style={{ color: "rgba(255,255,255,0.6)" }}>{content}</div>
  );
}
