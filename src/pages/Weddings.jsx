import './Weddings.css';
import { Link } from 'react-router-dom';
import { Heart, Users, MapPin, CheckCircle } from 'lucide-react';

// Import local wedding assets
import weddingHeroImg from '../assets/wedding/images.jpg';
import weddingIntroImg from '../assets/wedding/king-lamar-fotografia-g2axXjYTm3o-unsplash.jpg';

const Weddings = () => {
    const packages = [
        {
            name: 'Essential Elegance',
            price: '500,000 NGN',
            features: ['Venue for 6 hours', 'Basic Decor', 'Photography (4 hrs)', 'Dedicated Coordinator']
        },
        {
            name: 'Luxury Celebration',
            price: '1,200,000 NGN',
            features: ['Full Day Access', 'Premium Decor', 'Complimentary Catering Service', 'Full Photography & Video', 'Live Music']
        },
        {
            name: 'Imperial Grandeur',
            price: '2,500,000 NGN',
            features: ['Multi-day Access', 'Custom Set Design', 'Complimentary Catering Service', 'Full Media Team', 'Bridal Suite']
        }
    ];

    return (
        <div className="weddings-page">
            <header
                className="page-hero weddings-hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${weddingHeroImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 20%'
                }}
            >
                <div className="hero-content">
                    <h1>Eternal <span>Love</span></h1>
                    <p>The perfect beginning to your forever.</p>
                </div>
            </header>

            <section className="wedding-intro">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text">
                            <h2>Your Dream Wedding <span>Awaits</span></h2>
                            <p>At Cannes Place, we believe every wedding should be as unique as the love story it celebrates. Our team of experts is dedicated to ensuring every detail is perfect, from the first consultation to the final dance.</p>
                            <div className="stats">
                                <div className="stat-item"><Heart /> <span>500+ Weddings</span></div>
                                <div className="stat-item"><Users /> <span>Expert Planners</span></div>
                                <div className="stat-item"><MapPin /> <span>Prime Location</span></div>
                            </div>
                        </div>
                        <div className="intro-image">
                            <img src={weddingIntroImg} alt="Wedding" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="packages">
                <div className="section-header">
                    <h2>Bespoke <span>Packages</span></h2>
                    <p>Select the perfect tier for your dream celebration.</p>
                </div>
                <div className="packages-grid">
                    {packages.map((pkg) => (
                        <div key={pkg.name} className="package-card">
                            <h3>{pkg.name}</h3>
                            <div className="price">{pkg.price}<span>Starting at</span></div>
                            <ul>
                                {pkg.features.map((f) => (
                                    <li key={f}><CheckCircle size={18} /> {f}</li>
                                ))}
                            </ul>
                            <Link to="/booking">
                                <button className="pkg-btn">Inquire Now</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Weddings;
