import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="breadcrumb-bar"><Link to="/">Home</Link> <span className="sep">&rsaquo;</span> <span>About Us</span></div>
            <div className="main-content">
                <div className="page-title">About Us</div>
                <div style={{ padding: '20px 0', lineHeight: '1.6' }}>
                    <p>Welcome to HotSpring Portable Spas, your premier source for high-quality hot tubs and accessories.</p>
                    <p>We are dedicated to providing the best relaxation and wellness solutions for your home. With years of experience in the industry, our team is passionate about helping you find the perfect spa to fit your lifestyle and budget.</p>
                </div>
            </div>
        </>
    );
};

export default About;
