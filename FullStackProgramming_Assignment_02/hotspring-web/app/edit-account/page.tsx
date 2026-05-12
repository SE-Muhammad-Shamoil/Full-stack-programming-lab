import Link from "next/link";
import type { Metadata } from "next";
import AccountSidebar from "../components/AccountSidebar";
import AlsoViewed from "../components/AlsoViewed";
import BrandStrip from "../components/BrandStrip";
import LegacyScriptForm from "../components/LegacyScriptForm";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Edit Account",
};

export default function EditAccountPage() {
  return (
    <SiteShell activeNav="home">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span>{" "}
        <Link href="/account">My Account</Link> <span className="sep">&rsaquo;</span> <span>Edit Account</span>
      </div>
      <div className="main-content">
        <div className="account-layout">
          <AccountSidebar active="account" />
          <div className="account-main">
            <h2>Edit Account Details</h2>
            <LegacyScriptForm id="editAccountForm" handler="handleSave">
              <div className="form-row">
                <label>First Name</label>
                <input type="text" defaultValue="John" required />
              </div>
              <div className="form-row">
                <label>Last Name</label>
                <input type="text" defaultValue="Doe" required />
              </div>
              <div className="form-row">
                <label>Email</label>
                <input type="email" defaultValue="john@example.com" required />
              </div>
              <div className="form-row">
                <label>Phone</label>
                <input type="tel" defaultValue="888-201-8899" />
              </div>
              <hr style={{ margin: "12px 0", borderColor: "#eee" }} />
              <h4 style={{ fontSize: 13, fontWeight: "bold", marginBottom: 8 }}>Change Password</h4>
              <div className="form-row">
                <label>Current</label>
                <input type="password" />
              </div>
              <div className="form-row">
                <label>New Password</label>
                <input type="password" />
              </div>
              <div className="form-row">
                <label>Confirm</label>
                <input type="password" />
              </div>
              <div style={{ marginTop: 12 }}>
                <button type="submit" className="btn-signin">
                  SAVE CHANGES
                </button>
              </div>
            </LegacyScriptForm>
          </div>
        </div>
        <AlsoViewed />
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
