import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/account');
    };

    return (
        <>
            <div className="breadcrumb-bar"><Link to="/">Home</Link> <span className="sep">&rsaquo;</span> <span>My Account</span></div>
            <div className="main-content">
                <div className="login-page-title">Login Or Create Account</div>
                <div className="login-columns">
                    <div className="login-col-left">
                        <h4>User Login Details</h4>
                        <p>Please sign in below with your login information.</p>
                        <p>*Required Fields</p>
                        <form id="loginForm" onSubmit={handleLogin}>
                            <div className="form-row">
                                <label>Email <span className="req">*</span></label>
                                <input type="email" id="loginEmail" name="email" required />
                            </div>
                            <div className="form-row">
                                <label>Password <span className="req">*</span></label>
                                <input type="password" id="loginPassword" name="password" required />
                            </div>
                            <div className="form-check-row">
                                <input type="checkbox" id="rememberMe" /> Remember me the next time I visit
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '88px' }}>
                                <button type="submit" className="btn-signin">SIGN IN</button>
                                <Link to="/forgot-password" className="forgot-link">Forgot your password?</Link>
                            </div>
                        </form>
                    </div>
                    <div className="login-col-right">
                        <h4>New Customer</h4>
                        <p>As a registered Abt.com customer you can:</p>
                        <ul>
                            <li>Store billing &amp; shipping information</li>
                            <li>Check your order status</li>
                            <li>Track your delivery Status</li>
                            <li>View your order history</li>
                        </ul>
                        <button className="btn-create-acc" onClick={() => navigate('/register')}>CREATE NEW ACCOUNT</button>
                    </div>
                </div>

                <div className="brand-logos" style={{ marginTop: '40px' }}>
                    <img src="/images/brand_logos.jpg" alt="Brand logos - Oceanic Spa, Caldera Spas, Island Spas" />
                </div>
            </div>
        </>
    );
};

export default Login;
