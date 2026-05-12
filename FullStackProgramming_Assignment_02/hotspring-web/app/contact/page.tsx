import Link from "next/link";
import type { Metadata } from "next";
import BrandStrip from "../components/BrandStrip";
import LegacyScriptForm from "../components/LegacyScriptForm";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <SiteShell activeNav="contact">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span> <span>Contact Us</span>
      </div>
      <div className="main-content">
        <div className="contact-section">
          <h3>Contact Us</h3>
          <LegacyScriptForm id="contactForm" className="full-width-form" handler="handleContact">
            <div className="form-row">
              <label>
                Full Name <span className="req">*</span>
              </label>
              <input type="text" name="name" required minLength={3} />
            </div>
            <div className="form-row">
              <label>
                Email <span className="req">*</span>
              </label>
              <input type="email" name="email" required />
            </div>
            <div className="form-row">
              <label>Phone</label>
              <input type="tel" name="phone" />
            </div>
            <div className="form-row">
              <label>
                Subject <span className="req">*</span>
              </label>
              <input type="text" name="subject" required />
            </div>
            <div className="form-row">
              <label>
                Message <span className="req">*</span>
              </label>
              <textarea name="message" required minLength={10} />
            </div>
            <div style={{ marginLeft: 118, marginTop: 8 }}>
              <button type="submit" className="btn-signin">
                SEND MESSAGE
              </button>
            </div>
          </LegacyScriptForm>
        </div>
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
