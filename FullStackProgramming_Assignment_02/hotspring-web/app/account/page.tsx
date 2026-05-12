import Link from "next/link";
import type { Metadata } from "next";
import AccountSidebar from "../components/AccountSidebar";
import AlsoViewed from "../components/AlsoViewed";
import BrandStrip from "../components/BrandStrip";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "My Account",
};

export default function AccountPage() {
  return (
    <SiteShell activeNav="home">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span> <span>My Account</span>
      </div>
      <div className="main-content">
        <div className="account-layout">
          <AccountSidebar active="dashboard" />
          <div className="account-main">
            <h2>My Account Dashboard</h2>
            <p>
              Hello, <strong>John Doe!</strong> Welcome to your account dashboard. From here you can view your{" "}
              <Link href="/order-details">recent orders</Link>, manage your{" "}
              <Link href="/edit-shipping">shipping and billing addresses</Link>, and{" "}
              <Link href="/edit-account">edit your password and account details</Link>.
            </p>
          </div>
        </div>
        <AlsoViewed />
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
