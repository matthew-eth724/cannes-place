import './Gallery.css';

// Import local gallery assets
import galaImg from '../assets/gallery/gala.jpg';
import corporateImg from '../assets/gallery/corporate.jpg';
import socialImg from '../assets/gallery/ibrahim-boran-m8YjB0noWiY-unsplash.jpg';
import fineDiningImg from '../assets/gallery/premium_photo-1679503585289-c02467981894.avif';

const Gallery = () => {
    const images = [
        { url: galaImg, title: 'Grand Ballroom' },
        { url: corporateImg, title: 'Corporate Excellence' },
        { url: socialImg, title: 'Social Celebrations' },
        { url: fineDiningImg, title: 'Fine Dining' },
        { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80', title: 'Floral Arches' },
        { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80', title: 'Party Atmosphere' },
    ];

    return (
        <div className="gallery-page">
            <header className="page-hero gallery-hero">
                <div className="hero-content">
                    <h1>Visual <span>Excellence</span></h1>
                    <p>Explore the beauty of Cannes Place through our lens.</p>
                </div>
            </header>

            <section className="gallery-grid-container">
                <div className="container">
                    <div className="gallery-grid">
                        {images.map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img.url} alt={img.title} />
                                <div className="gallery-overlay">
                                    <h3>{img.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
