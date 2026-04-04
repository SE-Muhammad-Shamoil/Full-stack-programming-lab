import { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    const [mainImg, setMainImg] = useState('/images/product_main.jpg');
    const [activeTab, setActiveTab] = useState('details');

    const handleThumbClick = (num) => {
        setMainImg(`/images/product_thumb_${num}.jpg`); // Simulating different images, actually in original code setMainImg changed main product image
    };

    return (
        <>
            <div className="breadcrumb-bar"><Link to="/">Home</Link> <span className="sep">&rsaquo;</span> <Link to="/category">Catagory</Link> <span className="sep">&rsaquo;</span> <span>Product</span></div>
            <div className="main-content">
                <div className="product-detail-title">
                    Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets
                    <div className="prod-sku">Abt Model:HS-SPA-2024 | UPC Code : B22CS30BN723</div>
                </div>
                <div className="product-detail-body">
                    <div className="prod-gallery">
                        <div className="main-img"><img id="mainProductImg" src={mainImg} alt="Product Main" /></div>
                        <div className="zoom-label">Roll over image to zoom in</div>
                        <div className="thumbs">
                            {[1, 2, 3, 4].map(num => (
                                <img key={num} src={`/images/product_thumb_${num}.jpg`} alt={`View ${num}`} onClick={() => handleThumbClick(num)} />
                            ))}
                        </div>
                        <div className="larger-view"><a href="#">+ Larger View</a></div>
                    </div>
                    <div className="prod-info">
                        <div className="prod-rating">
                            <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            <span>44</span>
                            <a href="#">(14 reviews)</a>
                        </div>
                        <div className="price-retail">Retail Price:$2199.00</div>
                        <div className="price-retail"><strong>Sale price</strong></div>
                        <div className="price-sale">$1,979.00</div>
                        <div className="price-guarantee">Low Price Guarantee</div>
                        <div className="prod-specs">
                            <strong>Size/Seating Capacity</strong><br />
                            77", 77", 32" / 6 Persons<br />
                            <strong>Seating Design</strong><br />
                            Bucket, Lounge, Chair, Bench<br />
                            <strong>Water Capacity / Dry Weight</strong><br />
                            305 Gallons / 573 lbs<br />
                            <strong>Number of Pumps</strong><br />
                            2 X 5HP<br />
                            <strong>Electrical</strong><br />
                            5.5 KW Heavy Heater, 220V, 50 amp /ETL Certificate
                        </div>
                        <div className="stock">In Stock (available)</div>
                        <button className="btn-add-cart-lg" id="addToCartBtn">&#10010; ADD TO CART</button>
                    </div>
                    <div className="price-calc">
                        <h4>Price Calculator</h4>
                        {/* Example of calculator rows */}
                        {['Interior Color', 'Outside Shell Color', 'Circulation Pump', 'Polar Foam', 'Cover / Steps', 'Extra Filter Sets', 'Deluxe Cover Lifter', 'Salt Water Sanitation System', 'TV/DVD/Entertainment', 'Backyard Delivery', 'Jets', 'Perimeter Lighting', 'Premium Popup Speakers', 'Waterfall', 'Spa Surround', 'Quantity'].map(label => (
                            <div className="calc-row" key={label}><label>{label}</label><select><option>—</option></select></div>
                        ))}
                        <div className="total-price">Total Price: <span id="calcTotal">$650.00</span></div>
                        <button className="btn-add-cart-lg" style={{ fontSize: '11px', padding: '6px 10px' }}>&#10010; ADD TO CART</button>
                        <div className="download-resources">
                            <h5>Download Resources</h5>
                            <a href="#">Full Line Brochure</a>
                            <a href="#">Owner's Manual</a>
                            <a href="#">Specifications Sheet</a>
                        </div>
                    </div>
                </div>
                <div className="prod-tabs">
                    <div className="tabs-nav">
                        <a href="#" className={activeTab === 'details' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('details'); }}>Details</a>
                        <a href="#" className={activeTab === 'specs' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('specs'); }}>Quick Specs</a>
                        <a href="#" className={activeTab === 'accessories' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('accessories'); }}>Accessories</a>
                        <a href="#" className={activeTab === 'reviews' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('reviews'); }}>Reviews</a>
                        <a href="#" className={activeTab === 'qa' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('qa'); }}>Q &amp; A</a>
                    </div>
                    {activeTab === 'details' && (
                        <div className="tab-content" id="tab-details">
                            <h5>Product Details</h5>
                            <p>Energy Star Rated - No</p>
                            <h5>Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h5>
                            <p>The Hottub B22CS30SNS stain</p>
                            <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit, Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                        </div>
                    )}
                    {activeTab === 'specs' && (
                        <div className="tab-content" id="tab-specs">
                            <table style={{ fontSize: '11px', width: '100%', borderCollapse: 'collapse' }}>
                                <tbody>
                                    <tr><td style={{ padding: '4px', border: '1px solid #ddd' }}><strong>Size</strong></td><td style={{ padding: '4px', border: '1px solid #ddd' }}>77" x 77" x 32"</td></tr>
                                    <tr><td style={{ padding: '4px', border: '1px solid #ddd' }}><strong>Seats</strong></td><td style={{ padding: '4px', border: '1px solid #ddd' }}>6 Persons</td></tr>
                                    <tr><td style={{ padding: '4px', border: '1px solid #ddd' }}><strong>Jets</strong></td><td style={{ padding: '4px', border: '1px solid #ddd' }}>90</td></tr>
                                    <tr><td style={{ padding: '4px', border: '1px solid #ddd' }}><strong>Heater</strong></td><td style={{ padding: '4px', border: '1px solid #ddd' }}>5.5 KW</td></tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {activeTab === 'accessories' && <div className="tab-content" id="tab-accessories"><p>No accessories listed.</p></div>}
                    {activeTab === 'reviews' && <div className="tab-content" id="tab-reviews"><p>14 verified customer reviews — ★★★★★ average.</p></div>}
                    {activeTab === 'qa' && <div className="tab-content" id="tab-qa"><p>Have a question? <Link to="/contact">Ask us</Link></p></div>}
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

export default Product;
