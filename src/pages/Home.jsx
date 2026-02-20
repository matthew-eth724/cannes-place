import './Home.css';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, GlassWater, Camera } from 'lucide-react';

// Import local gallery assets
import galaImg from '../assets/gallery/gala.jpg';
import corporateImg from '../assets/gallery/corporate.jpg';
import socialImg from '../assets/gallery/ibrahim-boran-m8YjB0noWiY-unsplash.jpg';
import fineDiningImg from '../assets/gallery/premium_photo-1679503585289-c02467981894.avif';

// Import local wedding asset
import weddingHeroImg from '../assets/wedding/images.jpg';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        <span className="white-text">Where</span><br />
                        <span className="white-text">Unforgettable</span><br />
                        <span className="gold-text">Moments Begin</span>
                    </h1>
                    <p>Experience the epitome of elegance at Cannes Place. We transform your dreams into unforgettable celebrations.</p>
                    <div className="hero-btns">
                        <Link to="/booking">
                            <button className="primary-btn">Explore Our Space</button>
                        </Link>
                        <Link to="/booking">
                            <button className="primary-btn glass-btn">Contact Us</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="wedding-preview-section">
                <div className="container">
                    <div className="wedding-preview-grid">
                        <div className="wedding-preview-image">
                            <img src={weddingHeroImg} alt="Wedding at Cannes Place" />
                        </div>
                        <div className="wedding-preview-text">
                            <h2>Bespoke <span>Weddings</span></h2>
                            <p>Crafting eternal memories in an atmosphere of pure luxury. From intimate ceremonies to grand celebrations, our venue provides the perfect backdrop for your love story.</p>
                            <Link to="/booking" className="primary-btn">
                                Plan Your Wedding
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gallery-preview">
                <div className="section-header">
                    <h2>Gallery </h2>
                    <p>A glimpse into the extraordinary moments held at Cannes Place.</p>
                </div>
                <div className="preview-grid">
                    <div className="preview-item">
                        <img src={galaImg} alt="Gala Event" />
                        <div className="overlay">
                            <span>Weddings</span>
                        </div>
                    </div>
                    <div className="preview-item">
                        <img src={corporateImg} alt="Corporate" />
                        <div className="overlay">
                            <span>Corporate</span>
                        </div>
                    </div>
                    <div className="preview-item">
                        <img src={socialImg} alt="Social" />
                        <div className="overlay">
                            <span>Social</span>
                        </div>
                    </div>
                </div>
                <Link to="/gallery" className="gallery-link">
                    View Our Gallery
                </Link>
            </section>

            <section className="services">
                <div className="section-header">
                    <h2>Our Exquisite <span>Services</span></h2>
                    <p>Everything you need for a flawless event execution.</p>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <Calendar className="service-icon" />
                        <h3>Event Planning</h3>
                        <p>Bespoke planning services tailored to your unique vision and requirements.</p>
                    </div>
                    <div className="service-card">
                        <Sparkles className="service-icon" />
                        <h3>Luxury Decor</h3>
                        <p>Transformative floral and decor arrangements that set the perfect mood.</p>
                    </div>
                    <div className="service-card">
                        <GlassWater className="service-icon" />
                        <h3>Fine Catering</h3>
                        <p>Gourmet culinary experiences crafted by world-class chefs.</p>
                    </div>
                    <div className="service-card">
                        <Camera className="service-icon" />
                        <h3>Photography</h3>
                        <p>Capturing every precious moment with precision and artistry.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
