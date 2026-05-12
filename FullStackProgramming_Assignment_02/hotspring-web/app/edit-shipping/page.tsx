import Link from "next/link";
import type { Metadata } from "next";
import AccountSidebar from "../components/AccountSidebar";
import AlsoViewed from "../components/AlsoViewed";
import BrandStrip from "../components/BrandStrip";
import LegacyScriptForm from "../components/LegacyScriptForm";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Edit Shipping Address",
};

export default function EditShippingPage() {
  return (
    <SiteShell activeNav="home">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span>{" "}
        <Link href="/account">My Account</Link> <span className="sep">&rsaquo;</span>{" "}
        <span>Edit Shipping Address</span>
      </div>
      <div className="main-content">
        <div className="account-layout">
          <AccountSidebar active="shipping" />
          <div className="account-main">
            <h2>Edit Shipping Address</h2>
            <LegacyScriptForm id="shippingForm" handler="handleSave">
              <div className="form-row">
                <label>First Name</label>
                <input type="text" defaultValue="John" required />
              </div>
              <div className="form-row">
                <label>Last Name</label>
                <input type="text" defaultValue="Doe" required />
              </div>
              <div className="form-row">
                <label>Company</label>
                <input type="text" />
              </div>
              <div className="form-row">
                <label>Street</label>
                <input type="text" defaultValue="456 Oak Ave" required />
              </div>
              <div className="form-row">
                <label>City</label>
                <input type="text" defaultValue="Los Angeles" required />
              </div>
              <div className="form-row">
                <label>State</label>
                <input type="text" defaultValue="CA" required />
              </div>
              <div className="form-row">
                <label>Zip Code</label>
                <input type="text" defaultValue="90001" required />
              </div>
              <div className="form-row">
                <label>Country</label>
                <select defaultValue="United States">
                  <option>United States</option>
                  <option>Canada</option>
                </select>
              </div>
              <div className="form-row">
                <label>Phone</label>
                <input type="tel" defaultValue="888-201-8899" />
              </div>
              <div style={{ marginTop: 12 }}>
                <button type="submit" className="btn-signin">
                  SAVE ADDRESS
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
