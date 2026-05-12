"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export type NavKey = "home" | "products" | "contact";

export default function SiteShell({
  activeNav,
  children,
}: {
  activeNav: NavKey;
  children: ReactNode;
}) {
  const router = useRouter();

  const navClass = (key: NavKey) =>
    activeNav === key ? "active" : "";

  return (
    <div className="page-wrapper">
      <div className="topbar">
        <div className="support">
          Call for Customer support:{" "}
          <a href="tel:02038989565">020 38989565</a>
        </div>
        <div className="topbar-links">
          <Link href="/account">My Account</Link>
          <a href="#">Wishlist</a>
          <Link href="/checkout">To Checkout</Link>
        </div>
      </div>

      <header className="site-header">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.png" alt="HotSpring Portable Spas" width={220} height={80} />
          </Link>
        </div>
        <div className="header-right">
          <div className="cart-widget">
            <span className="cart-icon">&#128722;</span>
            <div className="cart-label">
              <span>My Cart: </span>
              <strong id="cart-count">0 Items</strong>
              <select
                defaultValue=""
                onChange={(e) => {
                  const v = e.target.value;
                  e.target.selectedIndex = 0;
                  if (v === "cart") router.push("/cart");
                  if (v === "checkout") router.push("/checkout");
                }}
              >
                <option value="">View cart…</option>
                <option value="cart">View Cart</option>
                <option value="checkout">Checkout</option>
              </select>
            </div>
          </div>
          <nav className="main-nav">
            <Link href="/" className={navClass("home")}>
              HOME
            </Link>
            <Link href="/category" className={navClass("products")}>
              PRODUCTS
            </Link>
            <Link href="/category" className="">
              SPECIAL OFFERS
            </Link>
            <Link href="/contact" className={navClass("contact")}>
              CUSTOMER SERVICE
            </Link>
          </nav>
        </div>
      </header>

      <div className="search-bar">
        <nav className="sub-nav">
          <Link href="/category">CATAGORY</Link>
          <Link href="/category">BRAND</Link>
          <Link href="/about">INFO</Link>
        </nav>
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" id="search-input" placeholder="Search" autoComplete="off" />
          <button type="submit">SEARCH</button>
        </form>
      </div>

      {children}

      <div className="footer-top" />
      <footer className="site-footer">
        <div className="page-wrapper">
          <div className="footer-cols">
            <div className="footer-col">
              <h5>Contact Us</h5>
              <address>
                yoursitename.com<br />
                <span className="phone">CALL 24/7: 888 - 201 - 8899</span>
                Your Address:<br />
                Street<br />
                State &amp; Zip Code<br />
                City &amp; Country<br />
                Email: servicemail@yoursitename.com
              </address>
              <div className="social-links">
                <a href="#" className="tw">
                  t
                </a>
                <a href="#" className="fb">
                  f
                </a>
                <a href="#" className="li">
                  in
                </a>
                <a href="#" className="gp">
                  g+
                </a>
                <a href="#" className="yt">
                  &#9654;
                </a>
                <a href="#" className="pi">
                  P
                </a>
              </div>
            </div>
            <div className="footer-col footer-links">
              <h5>Information</h5>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Customer Service</Link>
              <a href="#">Privacy Policy</a>
              <a href="#">Site Map</a>
              <a href="#">Search Terms</a>
              <Link href="/contact">Contact Us</Link>
              <Link href="/about">About Us</Link>
            </div>
            <div className="footer-col footer-links">
              <h5>My Account</h5>
              <Link href="/login">Sign In</Link>
              <Link href="/cart">View Cart</Link>
              <a href="#">My Wishlist</a>
            </div>
            <div className="footer-col">
              <h5>Signup for a News Letter</h5>
              <p>Sign up for our news letter:</p>
              <form
                className="footer-newsletter"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const w = window as unknown as {
                    subscribeNewsletter?: (f: HTMLFormElement) => boolean;
                  };
                  if (typeof w.subscribeNewsletter === "function") {
                    w.subscribeNewsletter(form);
                  }
                }}
              >
                <input type="email" placeholder="Your email address" />
                <button type="submit">GO</button>
              </form>
              <p className="pay-label">Payment Solutions</p>
              <div className="payment-logos">
                <span className="pay-logo maestro">Maestro</span>
                <span className="pay-logo mastercard">MC</span>
                <span className="pay-logo amex">AMEX</span>
                <span className="pay-logo visa">VISA</span>
                <span className="pay-logo paypal">PayPal</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">&copy; 2025 Hottubspaservice.com. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}
