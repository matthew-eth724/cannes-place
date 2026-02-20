import './Home.css';
import { Sparkles, Calendar, GlassWater, Camera } from 'lucide-react';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Eternal Luxury <br /><span>For Your Special Day</span></h1>
                    <p>Experience the epitome of elegance at Cannes Place. We transform your dreams into unforgettable celebrations.</p>
                    <div className="hero-btns">
                        <button className="primary-btn">Explore Venue</button>
                        <button className="secondary-btn">Contact Us</button>
                    </div>
                </div>
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
