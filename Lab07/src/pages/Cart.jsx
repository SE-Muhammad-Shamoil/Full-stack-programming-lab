import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="breadcrumb-bar"><Link to="/">Home</Link> <span className="sep">&rsaquo;</span> <span>Shopping Cart</span></div>
            <div className="main-content">
                <div className="cart-page-title">Shopping Cart</div>
                <div className="cart-section">
                    <h4>Your Shopping Cart</h4>
                    <div className="cart-alert">
                        &#10003; <Link to="/product/1">The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in</Link> was just added cart.
                    </div>
                    <div className="cart-items-header">
                        <span>Items added: <a href="#">user_name</a></span>
                        <span>Items total</span>
                    </div>

                    {[1, 2].map(item => (
                        <div className="cart-item" key={item}>
                            <img src={`/images/cart_item_${item}.jpg`} alt="Product" />
                            <div className="cart-item-info">
                                <div className="item-title"><Link to="/product/1">The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version</Link></div>
                                <div className="item-desc">220 V/50 AMP – 4.5KW Heater 110 V/15 AMP – 1KW Heater/ convertible To 220 V / 4KW Heater</div>
                                <div className="cart-item-actions mt-8"><a href="#">Remove</a> | <a href="#">Edit Your Order</a></div>
                            </div>
                            <div className="cart-item-meta">
                                <div className="qty-row">Quantity: <select defaultValue="1"><option>10</option><option value="1">1</option><option>2</option></select></div>
                                <div className="item-price">$9.00</div>
                                <div className="item-ship">Standard (7-10 business days)</div>
                            </div>
                        </div>
                    ))}

                    <div className="cart-summary">
                        <div className="total">Cart summary (2 items)<br />Total: $21.00</div>
                        <div className="cart-action-row">
                            <button className="btn-continue" onClick={() => navigate('/category')}>CONTINUE SHOPPING</button>
                            <button className="btn-checkout" onClick={() => navigate('/checkout')}>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>

                <div className="also-viewed">
                    <h4>Customers Who &nbsp;Viewed This Item Also</h4>
                    <div className="also-viewed-carousel">
                        <span className="av-arrow">&lsaquo;</span>
                        <div className="av-items">
                            {[1, 2, 3, 4].map((i) => (
                                <div className="av-item" key={i}>
                                    <img src={`/images/related_${i}.jpg`} alt="Related product" />
                                    <div className="av-item-info">
                                        <div className="av-price">$2,549.15</div>
                                        <div className="av-title">HotSpring Portable Spa</div>
                                        <div className="av-model">HS-SPA-2024</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <span className="av-arrow">&rsaquo;</span>
                    </div>
                </div>

                <div className="brand-logos">
                    <img src="/images/brand_logos.jpg" alt="Brand logos - Oceanic Spa, Caldera Spas, Island Spas" />
                </div>
            </div>
        </>
    );
};

export default Cart;
