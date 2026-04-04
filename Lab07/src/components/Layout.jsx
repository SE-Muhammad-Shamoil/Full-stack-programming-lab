import { Outlet, Link } from 'react-router-dom';

const Topbar = () => (
  <div className="topbar">
    <div className="support">Call for Customer support: <a href="tel:02038989565">020 38989565</a></div>
    <div className="topbar-links">
      <Link to="/account">My Account</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/checkout">To Checkout</Link>
    </div>
  </div>
);

const Header = () => (
  <header className="site-header">
    <div className="logo"><Link to="/"><img src="/images/logo.png" alt="HotSpring Portable Spas" /></Link></div>
    <div className="header-right">
      <div className="cart-widget">
        <span className="cart-icon">&#128722;</span>
        <div className="cart-label">
          <span>My Cart: </span><strong id="cart-count">0 Items</strong>
          <select defaultValue="View Cart">
            <option>View Cart</option>
            <option>Checkout</option>
          </select>
        </div>
      </div>
      <nav className="main-nav">
        <Link to="/" className="active">HOME</Link>
        <Link to="/category">PRODUCTS</Link>
        <Link to="/category">SPECIAL OFFERS</Link>
        <Link to="/contact">CUSTOMER SERVICE</Link>
      </nav>
    </div>
  </header>
);

const SearchBar = () => (
  <div className="search-bar">
    <nav className="sub-nav">
      <Link to="/category">CATAGORY</Link>
      <Link to="/category">BRAND</Link>
      <Link to="/about">INFO</Link>
    </nav>
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input type="text" id="search-input" placeholder="Search" autoComplete="off" />
      <button type="submit">SEARCH</button>
    </form>
  </div>
);

const Footer = () => (
    <>
    <div className="footer-top"></div>
    <footer className="site-footer">
        <div className="page-wrapper">
        <div className="footer-cols">
            <div className="footer-col">
            <h5>Contact Us</h5>
            <address>
                yoursitename.com<br />
                <span className="phone">CALL 24/7:  888 - 201 - 8899</span>
                Your Address:<br />
                Street<br />
                State &amp; Zip Code<br />
                City &amp; Country<br />
                Email: servicemail@yoursitename.com
            </address>
            <div className="social-links">
                <a href="#" className="tw">t</a>
                <a href="#" className="fb">f</a>
                <a href="#" className="li">in</a>
                <a href="#" className="gp">g+</a>
                <a href="#" className="yt">&#9654;</a>
                <a href="#" className="pi">P</a>
            </div>
            </div>
            <div className="footer-col footer-links">
            <h5>Information</h5>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Customer Service</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Site Map</Link>
            <Link to="#">Search Terms</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About Us</Link>
            </div>
            <div className="footer-col footer-links">
            <h5>My Account</h5>
            <Link to="/login">Sign In</Link>
            <Link to="/cart">View Cart</Link>
            <Link to="#">My Wishlist</Link>
            </div>
            <div className="footer-col">
            <h5>Signup for a News Letter</h5>
            <p>Sign up for our news letter:</p>
            <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
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
  </>
);

const Layout = () => {
  return (
    <div className="page-wrapper">
      <Topbar />
      <Header />
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
