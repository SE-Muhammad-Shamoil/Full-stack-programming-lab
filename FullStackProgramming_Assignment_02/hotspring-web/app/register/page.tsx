import Link from "next/link";
import type { Metadata } from "next";
import AlsoViewed from "../components/AlsoViewed";
import BrandStrip from "../components/BrandStrip";
import LegacyScriptForm from "../components/LegacyScriptForm";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <SiteShell activeNav="home">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span> <span>Register</span>
      </div>
      <div className="main-content register-section">
        <h3>Create an Account</h3>
        <LegacyScriptForm id="registerForm" handler="handleRegister">
          <h4 style={{ fontSize: 12, fontWeight: "bold", color: "#555", marginBottom: 8 }}>Personal Information</h4>
          <div className="form-row">
            <label>
              First Name <span className="req">*</span>
            </label>
            <input type="text" name="fname" id="reg_fname" required />
          </div>
          <div className="form-row">
            <label>
              Last Name <span className="req">*</span>
            </label>
            <input type="text" name="lname" id="reg_lname" required />
          </div>
          <div className="form-row">
            <label>
              Email <span className="req">*</span>
            </label>
            <input type="email" name="email" id="reg_email" required />
          </div>
          <div className="form-row">
            <label>
              Telephone <span className="req">*</span>
            </label>
            <input type="tel" name="phone" id="reg_phone" required />
          </div>
          <div className="form-row">
            <label>
              Password <span className="req">*</span>
            </label>
            <input type="password" name="password" id="reg_password" required />
          </div>
          <div className="form-row">
            <label>
              Confirm Password <span className="req">*</span>
            </label>
            <input type="password" name="confirm" id="reg_confirm" required />
          </div>
          <div className="form-check-row" style={{ marginLeft: 138 }}>
            <input type="checkbox" id="termsCheck" required />I agree to the{" "}
            <Link href="/terms" style={{ color: "#e3000f", marginLeft: 4 }}>
              Terms &amp; Conditions
            </Link>
          </div>
          <div style={{ marginLeft: 138, marginTop: 10 }}>
            <button type="submit" className="btn-signin">
              REGISTER
            </button>
            <Link href="/login" style={{ marginLeft: 14, fontSize: 11, color: "#e3000f" }}>
              Already have an account?
            </Link>
          </div>
        </LegacyScriptForm>
        <AlsoViewed />
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
