import ProductCard from '../components/ProductCard';

const Home = () => {
    // Demo products based on the original HTML
    const products = Array(8).fill({
        id: 1,
        image: '/images/product_1.jpg',
        title: 'XS SCYBA X SERIES 119',
        description: 'The goods of our stores are very reliable and due we care about the customer',
        price: '$500.00'
    }).map((prod, index) => ({
        ...prod,
        id: index + 1,
        image: `/images/product_${(index % 8) + 1}.jpg`
    }));

    return (
        <div className="main-content">
            <div className="hero-slider">
                <img src="/images/hero_banner.jpg" alt="Barrier Reef 158 Jet TV-Stereo - Home Theater Supter Spa" />
                <div className="hero-dots">
                    <span></span><span></span><span className="active"></span>
                </div>
            </div>
            
            <div className="mini-banner-row">
                <div className="mini-banner"><a href="/product/1"><img src="/images/mini_banner_1.jpg" alt="5-7 Person Spa" /></a></div>
                <div className="mini-banner"><a href="/product/2"><img src="/images/mini_banner_2.jpg" alt="TV Theater Spa" /></a></div>
                <div className="mini-banner"><a href="/category"><img src="/images/mini_banner_3.jpg" alt="Save 50%" /></a></div>
            </div>
            
            <div className="section-title">NEW PRODUCTS</div>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>

            <div className="brand-logos">
                <img src="/images/brand_logos.jpg" alt="Brand logos - Oceanic Spa, Caldera Spas, Island Spas" />
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
        </div>
    );
};

export default Home;
