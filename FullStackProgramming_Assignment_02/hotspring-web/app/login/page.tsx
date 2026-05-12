import Link from "next/link";
import type { Metadata } from "next";
import AlsoViewed from "../components/AlsoViewed";
import BrandStrip from "../components/BrandStrip";
import LegacyScriptForm from "../components/LegacyScriptForm";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <SiteShell activeNav="home">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span> <span>My Account</span>
      </div>
      <div className="main-content">
        <div className="login-page-title">Login Or Creat Account</div>
        <div className="login-columns">
          <div className="login-col-left">
            <h4>User Login Details</h4>
            <p>Please sign in below with your login information.</p>
            <p>*Required Fields</p>
            <LegacyScriptForm id="loginForm" handler="handleLogin">
              <div className="form-row">
                <label>
                  Email <span className="req">*</span>
                </label>
                <input type="email" id="loginEmail" name="email" required />
              </div>
              <div className="form-row">
                <label>
                  Password <span className="req">*</span>
                </label>
                <input type="password" id="loginPassword" name="password" required />
              </div>
              <div className="form-check-row">
                <input type="checkbox" id="rememberMe" /> Remember me th next time I visit
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 88 }}>
                <button type="submit" className="btn-signin">
                  SIGN IN
                </button>
                <Link href="/forgot-password" className="forgot-link">
                  Forgot your password?
                </Link>
              </div>
            </LegacyScriptForm>
          </div>
          <div className="login-col-right">
            <h4>New Customer</h4>
            <p>As a registered Abt.com customer you can:</p>
            <ul>
              <li>Store billing &amp; shipping information</li>
              <li>Check your order status</li>
              <li>Track your delivery Status</li>
              <li>View your order history</li>
            </ul>
            <Link href="/register" className="btn-create-acc" style={{ display: "inline-block", textAlign: "center" }}>
              CREATE NEW ACCOUNT
            </Link>
          </div>
        </div>
        <AlsoViewed />
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
