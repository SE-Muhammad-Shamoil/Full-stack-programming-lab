import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <>
            <div className="breadcrumb-bar"><Link to="/">Home</Link> <span className="sep">&rsaquo;</span> <span>My Account</span></div>
            <div className="main-content">
                <div className="account-layout">
                    <aside className="account-sidebar">
                        <h4>My Account</h4>
                        <ul>
                            <li><Link to="/account" className="active">Dashboard</Link></li>
                            <li><Link to="/account/orders">Orders</Link></li>
                            <li><Link to="/account/details">Account Details</Link></li>
                            <li><Link to="/account/billing">Billing Address</Link></li>
                            <li><Link to="/account/shipping">Shipping Address</Link></li>
                            <li><Link to="/login">Sign Out</Link></li>
                        </ul>
                    </aside>
                    <div className="account-main">
                        <h2>My Account Dashboard</h2>
                        <p>Hello, <strong>John Doe!</strong> Welcome to your account dashboard. From here you can view your <Link to="/account/orders">recent orders</Link>, manage your <Link to="/account/shipping">shipping and billing addresses</Link>, and <Link to="/account/details">edit your password and account details</Link>.</p>
                    </div>
                </div>

                <div className="brand-logos" style={{ marginTop: '40px' }}>
                    <img src="/images/brand_logos.jpg" alt="Brand logos - Oceanic Spa, Caldera Spas, Island Spas" />
                </div>
            </div>
        </>
    );
};

export default Account;
