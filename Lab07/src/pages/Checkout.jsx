import { Link } from 'react-router-dom';

const Checkout = () => {
    const handleCheckout = (e) => {
        e.preventDefault();
        alert('Order Placed! (Demo)');
    };

    return (
        <>
            <div className="breadcrumb-bar"><Link to="/">Home</Link> <span className="sep">&rsaquo;</span> <span>Payment Form</span></div>
            <div className="main-content">
                <div className="checkout-title">Payment Form</div>
                <div className="checkout-layout">
                    <div className="checkout-form-area">
                        <form id="checkoutForm" onSubmit={handleCheckout}>
                            <h4>Billing Details</h4>
                            <div className="form-row">
                                <label>First Name <span className="req">*</span></label>
                                <input type="text" name="fname" required />
                            </div>
                            <div className="form-row">
                                <label>Last Name <span className="req">*</span></label>
                                <input type="text" name="lname" required />
                            </div>
                            <div className="form-row">
                                <label>Company <span className="req">*</span></label>
                                <input type="text" name="company" required />
                            </div>
                            <div className="form-row">
                                <label>Street <span className="req">*</span></label>
                                <input type="text" name="street" required />
                            </div>
                            <div className="form-row">
                                <label>City <span className="req">*</span></label>
                                <input type="text" name="city" required />
                            </div>
                            <div className="form-row">
                                <label>Zip <span className="req">*</span></label>
                                <input type="text" name="zip" required />
                            </div>
                            <div className="form-row">
                                <label>Country <span className="req">*</span></label>
                                <input type="text" name="country" required />
                            </div>
                            <div className="form-row">
                                <label>Phone <span className="req">*</span></label>
                                <input type="text" name="phone" required />
                            </div>
                            <div className="form-row">
                                <label>Email <span className="req">*</span></label>
                                <input type="text" name="email" required />
                            </div>
                            <h4 style={{ marginTop: '16px' }}>Payment Method</h4>
                            <div className="payment-methods">
                                <div className="pm-option"><input type="radio" name="pay" value="credit" defaultChecked /> Credit Card</div>
                                <div className="pm-option"><input type="radio" name="pay" value="paypal" /> PayPal</div>
                            </div>
                            <div className="form-row mt-8">
                                <label>Card Number</label>
                                <input type="text" name="cardno" placeholder="**** **** **** ****" required />
                            </div>
                            <div className="form-row">
                                <label>Name on Card</label>
                                <input type="text" name="cardname" required />
                            </div>
                            <div style={{ display: 'flex', gap: '10px', marginLeft: 0 }}>
                                <div className="form-row">
                                    <label>Expiry</label>
                                    <input type="text" name="expiry" placeholder="MM/YY" style={{ width: '80px' }} required />
                                </div>
                                <div className="form-row">
                                    <label>CVV</label>
                                    <input type="text" name="cvv" placeholder="***" style={{ width: '60px' }} required />
                                </div>
                            </div>
                            <div style={{ marginTop: '14px' }}>
                                <button type="submit" className="btn-checkout" style={{ padding: '10px 30px', fontSize: '13px' }}>PLACE ORDER</button>
                            </div>
                        </form>
                    </div>
                    <div className="checkout-summary">
                        <div className="summary-box">
                            <h4>Order Summary</h4>
                            <div className="summary-row"><span>Luxury Hot Tub x1</span><span>$1,979.00</span></div>
                            <div className="summary-row"><span>Shipping</span><span>Free</span></div>
                            <div className="summary-row total"><span>Total</span><span>$1,979.00</span></div>
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

export default Checkout;
