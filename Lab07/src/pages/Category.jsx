import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Category = () => {
    const products = Array(6).fill({
        id: 1,
        image: '/images/product_1.jpg',
        title: 'XS SCYBA X SERIES 119',
        description: 'The goods of our stores are very reliable and due we care about the customer',
        price: '$500.00'
    }).map((prod, index) => ({
        ...prod,
        id: index + 1,
        image: `/images/product_${(index % 6) + 1}.jpg`
    }));

    return (
        <>
            <div className="breadcrumb-bar"><Link to="/">Home</Link> <span className="sep">&rsaquo;</span> <span>Catagory</span></div>
            <div className="main-content">
                <div className="with-sidebar">
                    <aside className="sidebar">
                        <div className="sidebar-section">
                            <h4>Shopping Options</h4>
                        </div>
                        <div className="sidebar-section">
                            <h4>Seating Capacity</h4>
                            <ul>
                                <li><a href="#" className="active-filter">2 - 4 PEOPLE</a></li>
                                <li><a href="#">5 - 7 PEOPLE</a></li>
                                <li><a href="#">8 PEOPLE AND MORE</a></li>
                            </ul>
                        </div>
                        <div className="sidebar-section">
                            <h4>Choose Sizes</h4>
                            <ul>
                                <li><a href="#">5 - 6  FEET LONG</a></li>
                                <li><a href="#">6 - 7  FEET LONG</a></li>
                                <li><a href="#">7 - 8  FEET LONG</a></li>
                                <li><a href="#">8 FEET TO LARGE SIZE</a></li>
                            </ul>
                        </div>
                        <div className="sidebar-section">
                            <h4>Spas By Tyle</h4>
                            <ul>
                                <li><a href="#">PLUG AND PLAY 110 VOLT</a></li>
                                <li><a href="#">TV - STERIO SPAS</a></li>
                                <li><a href="#">CORNER SPAS</a></li>
                                <li><a href="#">PORTABLE SPAS</a></li>
                                <li><a href="#">DEEPER SPAS</a></li>
                            </ul>
                        </div>
                        <div className="sidebar-section">
                            <h4>Price Ranges From</h4>
                            <ul>
                                <li><a href="#">UNDER $3,000</a></li>
                                <li><a href="#">$3,000 TO 4,000</a></li>
                                <li><a href="#">$4,000 TO 5,000</a></li>
                                <li><a href="#">$5,000 TO 6,000</a></li>
                                <li><a href="#">$6,000 +</a></li>
                            </ul>
                        </div>
                    </aside>
                    <div className="content-area">
                        <div className="content-header">
                            <h2>Top Product Listing</h2>
                            <div className="cat-controls">
                                <span>6 Item(s)</span>
                                <span>Show <select defaultValue="9"><option>9</option><option>18</option></select></span>
                            </div>
                        </div>
                        <div className="product-grid-3">
                            {products.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
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

export default Category;
