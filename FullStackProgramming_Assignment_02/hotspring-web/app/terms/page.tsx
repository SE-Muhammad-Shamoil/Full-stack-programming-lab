import Link from "next/link";
import type { Metadata } from "next";
import BrandStrip from "../components/BrandStrip";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <SiteShell activeNav="home">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span> <span>Terms & Conditions</span>
      </div>
      <div className="main-content">
        <div className="terms-content">
          <h3>Terms &amp; Conditions</h3>
          <p>
            <em>Effective Date: 2025</em>
          </p>
          <h5>1. General</h5>
          <p>
            By accessing this website and purchasing our products, you agree to be bound by these Terms and
            Conditions, all applicable laws and regulations.
          </p>
          <h5>2. Products</h5>
          <p>All products offered on this site are subject to availability. We reserve the right to discontinue any product at any time.</p>
          <h5>3. Pricing</h5>
          <p>Prices are subject to change without notice. We shall not be liable for any errors in pricing.</p>
          <h5>4. Returns</h5>
          <p>Returns are accepted within 30 days of purchase in original condition. Please contact customerservice@hotspring.com.</p>
          <h5>5. Privacy</h5>
          <p>Your personal information is handled in accordance with our Privacy Policy. We do not sell your data to third parties.</p>
          <h5>6. Limitation of Liability</h5>
          <p>HotSpring shall not be held liable for any indirect, incidental or consequential damages resulting from use of this site or products.</p>
          <div className="mt-8">
            <Link href="/" className="btn-signin" style={{ display: "inline-block", padding: "7px 18px" }}>
              RETURN HOME
            </Link>
          </div>
        </div>
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
