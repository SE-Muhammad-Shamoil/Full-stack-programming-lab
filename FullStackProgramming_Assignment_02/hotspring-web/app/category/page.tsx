import Link from "next/link";
import type { Metadata } from "next";
import AlsoViewed from "../components/AlsoViewed";
import BrandStrip from "../components/BrandStrip";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Category",
};

export default function CategoryPage() {
  return (
    <SiteShell activeNav="products">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span> <span>Catagory</span>
      </div>
      <div className="main-content">
        <div className="with-sidebar">
          <aside className="sidebar">
            <div className="sidebar-section">
              <h4>Shopping Options</h4>
            </div>
            <div className="sidebar-section">
              <h4>Seating Capacity</h4>
              <ul>
                <li>
                  <a href="#" className="active-filter">
                    2 - 4 PEOPLE
                  </a>
                </li>
                <li>
                  <a href="#">5 - 7 PEOPLE</a>
                </li>
                <li>
                  <a href="#">8 PEOPLE AND MORE</a>
                </li>
              </ul>
            </div>
            <div className="sidebar-section">
              <h4>Choose Sizes</h4>
              <ul>
                <li>
                  <a href="#">5 - 6 FEET LONG</a>
                </li>
                <li>
                  <a href="#">6 - 7 FEET LONG</a>
                </li>
                <li>
                  <a href="#">7 - 8 FEET LONG</a>
                </li>
                <li>
                  <a href="#">8 FEET TO LARGE SIZE</a>
                </li>
              </ul>
            </div>
            <div className="sidebar-section">
              <h4>Spas By Tyle</h4>
              <ul>
                <li>
                  <a href="#">PLUG AND PLAY 110 VOLT</a>
                </li>
                <li>
                  <a href="#">TV - STERIO SPAS</a>
                </li>
                <li>
                  <a href="#">CORNER SPAS</a>
                </li>
                <li>
                  <a href="#">PORTABLE SPAS</a>
                </li>
                <li>
                  <a href="#">DEEPER SPAS</a>
                </li>
              </ul>
            </div>
            <div className="sidebar-section">
              <h4>Price Ranges From</h4>
              <ul>
                <li>
                  <a href="#">UNDER $3,000</a>
                </li>
                <li>
                  <a href="#">$3,000 TO 4,000</a>
                </li>
                <li>
                  <a href="#">$4,000 TO 5,000</a>
                </li>
                <li>
                  <a href="#">$5,000 TO 6,000</a>
                </li>
                <li>
                  <a href="#">$6,000 +</a>
                </li>
              </ul>
            </div>
          </aside>
          <div className="content-area">
            <div className="content-header">
              <h2>Top Product Listing</h2>
              <div className="cat-controls">
                <span>6 Item(s)</span>
                <span>
                  Show{" "}
                  <select defaultValue="9">
                    <option>9</option>
                    <option>18</option>
                  </select>
                </span>
              </div>
            </div>
            <div className="product-grid-3">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div className="product-card" key={n}>
                  <div className="prod-img">
                    <Link href="/product">
                      <img src={`/images/product_${n}.jpg`} alt="XS SCYBA X SERIES 119" width={240} height={160} />
                    </Link>
                  </div>
                  <div className="prod-title">XS SCYBA X SERIES 119</div>
                  <div className="prod-desc">
                    The goods of our stores are very reliable and due we care about the customer
                  </div>
                  <div className="prod-price">$500.00</div>
                  <Link href="/cart" className="btn-add-cart">
                    <span className="cart-ico">&#128722;</span> ADD TO CART
                  </Link>
                  <div className="product-actions">
                    <a href="#">ADD TO WISH LIST</a>
                    <Link href="/product">MORE DETAILS</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <AlsoViewed />
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
