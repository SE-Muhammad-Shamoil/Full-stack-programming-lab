import Link from "next/link";
import type { Metadata } from "next";
import AlsoViewed from "../components/AlsoViewed";
import BrandStrip from "../components/BrandStrip";
import LegacyScriptForm from "../components/LegacyScriptForm";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Payment Form",
};

export default function CheckoutPage() {
  return (
    <SiteShell activeNav="home">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span> <span>Payment Form</span>
      </div>
      <div className="main-content">
        <div className="checkout-title">Payment Form</div>
        <div className="checkout-layout">
          <div className="checkout-form-area">
            <LegacyScriptForm id="checkoutForm" handler="handleCheckout">
              <h4>Billing Details</h4>
              <div className="form-row">
                <label>
                  First Name <span className="req">*</span>
                </label>
                <input type="text" name="fname" required />
              </div>
              <div className="form-row">
                <label>
                  Last Name <span className="req">*</span>
                </label>
                <input type="text" name="lname" required />
              </div>
              <div className="form-row">
                <label>
                  Company <span className="req">*</span>
                </label>
                <input type="text" name="company" required />
              </div>
              <div className="form-row">
                <label>
                  Street <span className="req">*</span>
                </label>
                <input type="text" name="street" required />
              </div>
              <div className="form-row">
                <label>
                  City <span className="req">*</span>
                </label>
                <input type="text" name="city" required />
              </div>
              <div className="form-row">
                <label>
                  Zip <span className="req">*</span>
                </label>
                <input type="text" name="zip" required />
              </div>
              <div className="form-row">
                <label>
                  Country <span className="req">*</span>
                </label>
                <input type="text" name="country" required />
              </div>
              <div className="form-row">
                <label>
                  Phone <span className="req">*</span>
                </label>
                <input type="text" name="phone" required />
              </div>
              <div className="form-row">
                <label>
                  Email <span className="req">*</span>
                </label>
                <input type="text" name="email" required />
              </div>
              <h4 style={{ marginTop: 16 }}>Payment Method</h4>
              <div className="payment-methods">
                <div className="pm-option">
                  <input type="radio" name="pay" value="credit" defaultChecked /> Credit Card
                </div>
                <div className="pm-option">
                  <input type="radio" name="pay" value="paypal" /> PayPal
                </div>
              </div>
              <div className="form-row mt-8">
                <label>Card Number</label>
                <input type="text" name="cardno" placeholder="**** **** **** ****" required />
              </div>
              <div className="form-row">
                <label>Name on Card</label>
                <input type="text" name="cardname" required />
              </div>
              <div style={{ display: "flex", gap: 10, marginLeft: 0 }}>
                <div className="form-row">
                  <label>Expiry</label>
                  <input type="text" name="expiry" placeholder="MM/YY" style={{ width: 80 }} required />
                </div>
                <div className="form-row">
                  <label>CVV</label>
                  <input type="text" name="cvv" placeholder="***" style={{ width: 60 }} required />
                </div>
              </div>
              <div style={{ marginTop: 14 }}>
                <button type="submit" className="btn-checkout" style={{ padding: "10px 30px", fontSize: 13 }}>
                  PLACE ORDER
                </button>
              </div>
            </LegacyScriptForm>
          </div>
          <div className="checkout-summary">
            <div className="summary-box">
              <h4>Order Summary</h4>
              <div className="summary-row">
                <span>Luxury Hot Tub x1</span>
                <span>$1,979.00</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>$1,979.00</span>
              </div>
            </div>
          </div>
        </div>
        <AlsoViewed />
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
