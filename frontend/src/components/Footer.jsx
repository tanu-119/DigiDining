// src/components/Footer.jsx
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <Link to="/cart">Cart</Link>
                <Link to="/order">Place Order</Link>
                <Link to="/history">Order History</Link>
            </div>
            <p>© 2025 The Digital Diner | All rights reserved</p>
        </footer>
    );
}

export default Footer;
