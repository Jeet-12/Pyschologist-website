import { Link } from 'react-router-dom';
import first from "../assests/1.jpg"
import second from "../assests/2.jpg"
import third from "../assests/3.jpg"
import fourth from "../assests/4.jpg"
import fivth from "../assests/5.jpg"
import sixth from "../assests/6.jpg"
import seventh from "../assests/7.jpg"


const Gallery = () => {
  // Therapy session images from Pexels
  const galleryImages = [
    { id: 1, src: first, alt: "Play therapy session" },
    { id: 2, src: second, alt: "Art therapy activity" },
    { id: 3, src: third, alt: "Happy child in therapy" },
    { id: 4, src: fourth, alt: "Child playing outdoors" },
    { id: 5, src: fivth, alt: "Group therapy session" },
    { id: 6, src: sixth, alt: "Mindfulness exercise" },
    { id: 7, src: seventh, alt: "Therapist working with child" },
  
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img
          src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
          alt="Therapy session"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,1)' }}>Our Therapy Moments</h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,1)' }}>
            Glimpses of our warm, welcoming therapy environment
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            to="/contact" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;