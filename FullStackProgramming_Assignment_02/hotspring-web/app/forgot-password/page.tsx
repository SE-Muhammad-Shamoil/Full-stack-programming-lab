import Link from "next/link";
import type { Metadata } from "next";
import AlsoViewed from "../components/AlsoViewed";
import BrandStrip from "../components/BrandStrip";
import LegacyScriptForm from "../components/LegacyScriptForm";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Forgot Password",
};

export default function ForgotPasswordPage() {
  return (
    <SiteShell activeNav="home">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span> <span>Forgot Password</span>
      </div>
      <div className="main-content">
        <div className="forgot-section">
          <h3>Forgot Your Password?</h3>
          <p>Please enter your email address below. You will receive a link to reset your password.</p>
          <LegacyScriptForm id="forgotForm" handler="handleForgot">
            <div className="form-row">
              <label>
                Email <span className="req">*</span>
              </label>
              <input type="email" name="email" required />
            </div>
            <div style={{ marginLeft: 88, marginTop: 8 }}>
              <button type="submit" className="btn-signin">
                RESET PASSWORD
              </button>
              <Link href="/login" className="forgot-link">
                Back to Login
              </Link>
            </div>
          </LegacyScriptForm>
        </div>
        <AlsoViewed />
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
