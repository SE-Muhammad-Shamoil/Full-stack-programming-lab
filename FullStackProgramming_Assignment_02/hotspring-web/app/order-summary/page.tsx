import Link from "next/link";
import type { Metadata } from "next";
import AccountSidebar from "../components/AccountSidebar";
import AlsoViewed from "../components/AlsoViewed";
import BrandStrip from "../components/BrandStrip";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Order Summary",
};

export default function OrderSummaryPage() {
  return (
    <SiteShell activeNav="home">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span>{" "}
        <Link href="/account">My Account</Link> <span className="sep">&rsaquo;</span>{" "}
        <Link href="/order-details">Orders</Link> <span className="sep">&rsaquo;</span> <span>Order Summary</span>
      </div>
      <div className="main-content">
        <div className="account-layout">
          <AccountSidebar active="orders" />
          <div className="account-main">
            <h2>Order Summary &mdash; #10023</h2>
            <p>
              <strong>Date:</strong> October 24, 2026 &nbsp;|&nbsp; <strong>Status:</strong>{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>Delivered</span>
            </p>
            <table className="order-table" style={{ marginTop: 10 }}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</td>
                  <td>1</td>
                  <td>$1,979.00</td>
                  <td>$1,979.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} style={{ textAlign: "right", fontWeight: "bold" }}>
                    Shipping:
                  </td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ textAlign: "right", fontWeight: "bold" }}>
                    Grand Total:
                  </td>
                  <td style={{ color: "#e3000f", fontWeight: "bold", fontSize: 15 }}>$1,979.00</td>
                </tr>
              </tfoot>
            </table>
            <div style={{ display: "flex", gap: 40, marginTop: 14, fontSize: 12 }}>
              <div>
                <strong>Billing Address:</strong>
                <br />
                John Doe
                <br />
                123 Main St, New York NY 10001
              </div>
              <div>
                <strong>Shipping Address:</strong>
                <br />
                John Doe
                <br />
                456 Oak Ave, Los Angeles CA 90001
              </div>
            </div>
            <div style={{ marginTop: 14 }}>
              <Link href="/order-details" className="btn-signin" style={{ display: "inline-block", padding: "7px 16px" }}>
                &#8592; BACK TO ORDERS
              </Link>
            </div>
          </div>
        </div>
        <AlsoViewed />
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
