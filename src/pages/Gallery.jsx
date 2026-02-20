import './Gallery.css';

const Gallery = () => {
    const images = [
        { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', title: 'Grand Ballroom' },
        { url: 'https://images.unsplash.com/photo-1505232458567-422bc7297e68?auto=format&fit=crop&w=800&q=80', title: 'Outdoor Garden' },
        { url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80', title: 'Luxury Reception' },
        { url: 'https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&w=800&q=80', title: 'Fine Dining' },
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
