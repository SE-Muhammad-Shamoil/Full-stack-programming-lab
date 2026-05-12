import Link from "next/link";
import AlsoViewed from "./components/AlsoViewed";
import BrandStrip from "./components/BrandStrip";
import SiteShell from "./components/SiteShell";

export default function HomePage() {
  return (
    <SiteShell activeNav="home">
      <div className="main-content">
        <div className="hero-slider">
          <img src="/images/hero_banner.jpg" alt="Barrier Reef 158 Jet TV-Stereo - Home Theater Supter Spa" width={1120} height={380} />
          <div className="hero-dots">
            <span />
            <span />
            <span className="active" />
          </div>
        </div>
        <div className="mini-banner-row">
          <div className="mini-banner">
            <Link href="/product">
              <img src="/images/mini_banner_1.jpg" alt="5-7 Person Spa" width={373} height={160} />
            </Link>
          </div>
          <div className="mini-banner">
            <Link href="/product">
              <img src="/images/mini_banner_2.jpg" alt="TV Theater Spa" width={373} height={160} />
            </Link>
          </div>
          <div className="mini-banner">
            <Link href="/category">
              <img src="/images/mini_banner_3.jpg" alt="Save 50%" width={373} height={160} />
            </Link>
          </div>
        </div>
        <div className="section-title">NEW PRODUCTS</div>
        <div className="product-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
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
              <a href={`/cart?add=${n}`} className="btn-add-cart">
                <span className="cart-ico">&#128722;</span> ADD TO CART
              </a>
              <div className="product-actions">
                <a href="#">ADD TO WISH LIST</a>
                <Link href="/product">MORE DETAILS</Link>
              </div>
            </div>
          ))}
        </div>
        <BrandStrip />
        <AlsoViewed />
      </div>
    </SiteShell>
  );
}
