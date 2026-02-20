import { useState } from 'react';
import './Booking.css';
import { Mail, Phone, MapPin, Calendar, Users, Star } from 'lucide-react';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: 'wedding',
        date: '',
        guests: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! Our team will contact you shortly.');
    };

    return (
        <div className="booking-page">
            <header className="page-hero booking-hero">
                <div className="hero-content">
                    <h1>Book Your <span>Experience</span></h1>
                    <p>Let's start planning your extraordinary event today.</p>
                </div>
            </header>

            <section className="booking-form-section">
                <div className="container">
                    <div className="booking-grid">
                        <div className="contact-info">
                            <div className="info-card">
                                <h2>Get in <span>Touch</span></h2>
                                <p>Prefer a conversation? Reach out to our events team directly.</p>

                                <div className="info-items">
                                    <div className="info-item">
                                        <Mail className="icon" />
                                        <div>
                                            <h4>Email Us</h4>
                                            <p>events@cannesplace.com</p>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <Phone className="icon" />
                                        <div>
                                            <h4>Call Us</h4>
                                            <p>+234 800 CANNES</p>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <MapPin className="icon" />
                                        <div>
                                            <h4>Visit Us</h4>
                                            <p>Victoria Island, Lagos</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="review-snippet">
                                    <div className="stars">
                                        <Star fill="#ecb613" color="#ecb613" size={16} />
                                        <Star fill="#ecb613" color="#ecb613" size={16} />
                                        <Star fill="#ecb613" color="#ecb613" size={16} />
                                        <Star fill="#ecb613" color="#ecb613" size={16} />
                                        <Star fill="#ecb613" color="#ecb613" size={16} />
                                    </div>
                                    <p>"The most seamless planning experience we've ever had."</p>
                                    <span>- Sarah & James</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-container">
                            <form className="booking-form glass-panel" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" name="name" required placeholder="Your Name" onChange={handleChange} />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="email" name="email" required placeholder="email@example.com" onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="tel" name="phone" required placeholder="+234..." onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Event Type</label>
                                        <select name="eventType" onChange={handleChange}>
                                            <option value="wedding">Wedding</option>
                                            <option value="corporate">Corporate</option>
                                            <option value="social">Social/Party</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Expected Guests</label>
                                        <input type="number" name="guests" placeholder="e.g. 200" onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Event Date</label>
                                    <div className="input-with-icon">
                                        <Calendar className="input-icon" size={18} />
                                        <input type="date" name="date" required onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Message / Special Requirements</label>
                                    <textarea name="message" rows="4" placeholder="Tell us more about your vision..." onChange={handleChange}></textarea>
                                </div>

                                <button type="submit" className="submit-btn gold-button">Send Inquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Booking;
