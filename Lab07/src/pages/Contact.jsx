import { Link } from 'react-router-dom';

const Contact = () => {
    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (Demo)');
    };

    return (
        <>
            <div className="breadcrumb-bar"><Link to="/">Home</Link> <span className="sep">&rsaquo;</span> <span>Contact Us</span></div>
            <div className="main-content">
                <div className="page-title">Contact Us</div>
                <div className="contact-layout" style={{ display: 'flex', gap: '30px', margin: '30px 0' }}>
                    <div style={{ flex: 1 }}>
                        <form onSubmit={handleContactSubmit}>
                            <div className="form-row">
                                <label>Name <span className="req">*</span></label>
                                <input type="text" name="name" required style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
                            </div>
                            <div className="form-row">
                                <label>Email <span className="req">*</span></label>
                                <input type="email" name="email" required style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
                            </div>
                            <div className="form-row">
                                <label>Message <span className="req">*</span></label>
                                <textarea name="message" required style={{ width: '100%', padding: '8px', minHeight: '120px', marginBottom: '10px' }}></textarea>
                            </div>
                            <button type="submit" className="btn-signin">SEND MESSAGE</button>
                        </form>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h4>Our Location</h4>
                        <address style={{ fontStyle: 'normal', lineHeight: '1.6', marginTop: '10px' }}>
                            yoursitename.com<br />
                            <strong>CALL 24/7:</strong> 888 - 201 - 8899<br /><br />
                            <strong>Address:</strong><br />
                            Street<br />
                            State &amp; Zip Code<br />
                            City &amp; Country<br /><br />
                            <strong>Email:</strong> servicemail@yoursitename.com
                        </address>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
