import './Footer.css';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-logo">CANNES<span>PLACE</span></h3>
                    <p>Exquisite events, unforgettable memories. The pinnacle of luxury venues in the heart of the city.</p>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul className="footer-contact">
                        <li><MapPin size={18} /> Victoria Island, Lagos</li>
                        <li><Phone size={18} /> +234 800 CANNES</li>
                        <li><Mail size={18} /> events@cannesplace.com</li>
                    </ul>
                </div>


            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Cannes Place. All rights reserved. | <a href="#">Privacy Policy</a></p>
            </div>
        </footer>
    );
};

export default Footer;
