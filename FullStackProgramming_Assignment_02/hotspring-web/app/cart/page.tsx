import Link from "next/link";
import type { Metadata } from "next";
import AlsoViewed from "../components/AlsoViewed";
import BrandStrip from "../components/BrandStrip";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Shopping Cart",
};

export default function CartPage() {
  return (
    <SiteShell activeNav="home">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span> <span>Shopping Cart</span>
      </div>
      <div className="main-content">
        <div className="cart-page-title">Shopping Cart</div>
        <div className="cart-section">
          <h4>Your Shopping Cart</h4>
          <div className="cart-alert">
            &#10003;{" "}
            <Link href="/product">The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in</Link> was just added cart.
          </div>
          <div className="cart-items-header">
            <span>
              Items added: <a href="#">user_name</a>
            </span>
            <span>Items total</span>
          </div>
          <div className="cart-item">
            <img src="/images/cart_item_1.jpg" alt="Product" width={80} height={75} />
            <div className="cart-item-info">
              <div className="item-title">
                <Link href="/product">The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version</Link>
              </div>
              <div className="item-desc">
                220 V/50 AMP – 4.5KW Heater 110 V/15 AMP – 1KW Heater/ convertible To 220 V / 4KW Heater
              </div>
              <div className="cart-item-actions mt-8">
                <a href="#">Remove</a> | <a href="#">Edit Your Order</a>
              </div>
            </div>
            <div className="cart-item-meta">
              <div className="qty-row">
                Quantity:{" "}
                <select defaultValue="10">
                  <option>10</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <div className="item-price">$9.00</div>
              <div className="item-ship">Standard (7-10 business days)</div>
            </div>
          </div>
          <div className="cart-item">
            <img src="/images/cart_item_2.jpg" alt="Product" width={80} height={75} />
            <div className="cart-item-info">
              <div className="item-title">
                <Link href="/product">The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version</Link>
              </div>
              <div className="item-desc">
                220 V/50 AMP – 4.5KW Heater 110 V/15 AMP – 1KW Heater/ convertible To 220 V / 4KW Heater
              </div>
              <div className="cart-item-actions mt-8">
                <a href="#">Remove</a> | <a href="#">Edit Your Order</a>
              </div>
            </div>
            <div className="cart-item-meta">
              <div className="qty-row">
                Quantity:{" "}
                <select defaultValue="10">
                  <option>10</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <div className="item-price">$9.00</div>
              <div className="item-ship">Standard (7-10 business days)</div>
            </div>
          </div>
          <div className="cart-summary">
            <div className="total">
              Cart summary (2 items)
              <br />
              Total: $21.00
            </div>
            <div className="cart-action-row">
              <Link href="/category" className="btn-continue" style={{ display: "inline-block", textAlign: "center" }}>
                CONTINUE SHOPPING
              </Link>
              <Link href="/checkout" className="btn-checkout" style={{ display: "inline-block", textAlign: "center" }}>
                PROCEED TO CHECKOUT
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
