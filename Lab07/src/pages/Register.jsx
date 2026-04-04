import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        alert('Account Created! (Demo)');
        navigate('/login');
    };

    return (
        <>
            <div className="breadcrumb-bar"><Link to="/">Home</Link> <span className="sep">&rsaquo;</span> <span>Create Account</span></div>
            <div className="main-content">
                <div className="login-page-title">Create New Account</div>
                <div className="login-columns" style={{ display: 'block', maxWidth: '600px', margin: '0 auto' }}>
                    <div className="login-col-left" style={{ borderRight: 'none', paddingRight: '0' }}>
                        <h4>Personal Information</h4>
                        <p>*Required Fields</p>
                        <form id="registerForm" onSubmit={handleRegister}>
                            <div className="form-row">
                                <label>First Name <span className="req">*</span></label>
                                <input type="text" name="fname" required />
                            </div>
                            <div className="form-row">
                                <label>Last Name <span className="req">*</span></label>
                                <input type="text" name="lname" required />
                            </div>
                            <div className="form-row">
                                <label>Email Address <span className="req">*</span></label>
                                <input type="email" name="email" required />
                            </div>
                            
                            <h4 style={{ marginTop: '20px' }}>Login Information</h4>
                            <div className="form-row">
                                <label>Password <span className="req">*</span></label>
                                <input type="password" name="password" required />
                            </div>
                            <div className="form-row">
                                <label>Confirm Password <span className="req">*</span></label>
                                <input type="password" name="cpassword" required />
                            </div>
                            
                            <div style={{ marginTop: '20px', marginLeft: '88px' }}>
                                <button type="submit" className="btn-signin" style={{ padding: '8px 20px' }}>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
