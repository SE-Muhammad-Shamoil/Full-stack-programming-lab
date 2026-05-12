import Link from "next/link";
import type { Metadata } from "next";
import AccountSidebar from "../components/AccountSidebar";
import AlsoViewed from "../components/AlsoViewed";
import BrandStrip from "../components/BrandStrip";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Order History",
};

export default function OrderDetailsPage() {
  return (
    <SiteShell activeNav="home">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span>{" "}
        <Link href="/account">My Account</Link> <span className="sep">&rsaquo;</span> <span>Order History</span>
      </div>
      <div className="main-content">
        <div className="account-layout">
          <AccountSidebar active="orders" />
          <div className="account-main">
            <h2>Order History</h2>
            <table className="order-table">
              <thead>
                <tr>
                  <th>Order #</th>
                  <th>Date</th>
                  <th>Ship To</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#10023</td>
                  <td>Oct 24, 2026</td>
                  <td>John Doe</td>
                  <td>
                    <span className="badge-status">Delivered</span>
                  </td>
                  <td>$1,979.00</td>
                  <td>
                    <Link href="/order-summary" className="btn-add-cart" style={{ fontSize: 10, padding: "3px 8px" }}>
                      VIEW
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>#10015</td>
                  <td>Aug 12, 2026</td>
                  <td>John Doe</td>
                  <td>
                    <span className="badge-status">Delivered</span>
                  </td>
                  <td>$150.00</td>
                  <td>
                    <Link href="/order-summary" className="btn-add-cart" style={{ fontSize: 10, padding: "3px 8px" }}>
                      VIEW
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <AlsoViewed />
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
