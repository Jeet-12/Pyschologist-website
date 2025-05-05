import { Link } from 'react-router-dom';

function Home() {
  // Updated with verified working images of children in therapy settings
  const images = {
    heroBg: "https://images.pexels.com/photos/939331/pexels-photo-939331.jpeg", // Happy children playing
    playTherapy: "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg", // Child with toys
    mindfulness: "https://images.pexels.com/photos/1483768/pexels-photo-1483768.jpeg", // Child doing yoga
    familyTherapy: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg", // Happy family
    artTherapy: "https://images.pexels.com/photos/159823/kids-girl-pencil-drawing-159823.jpeg" // Child drawing
  };

  const services = [
    {
      title: "Play Therapy",
      description: "Children express themselves best through play! We use toys, games, and art to help them share feelings.",
      icon: "🧸",
      image: images.playTherapy
    },
    {
      title: "Family Counseling",
      description: "Strengthen your family bonds through improved communication and understanding.",
      icon: "👨‍👩‍👧‍👦",
      image: images.familyTherapy
    },
    {
      title: "Mindfulness for Kids",
      description: "Fun activities to help children manage big emotions and feel calm.",
      icon: "🌈",
      image: images.mindfulness
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img
          src={images.heroBg}
          alt="Happy children playing in therapy center"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 z-10 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Helping Kids Shine <span className="text-yellow-300">Brighter</span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
            style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}
          >
            A playful approach to emotional wellness for children and families
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/918770953003?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-block shadow-lg"
            >
              Schedule a Consultation
            </a>
            <Link
              to="/about"
              className="border-2 border-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-block"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-4">Our Child-Centered Services</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            We make therapy fun and engaging while helping children develop important emotional skills
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-indigo-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} session`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center text-sm group"
                  >
                    Learn more 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">Our Playful Approach</h2>
              <p className="text-gray-700 mb-4 text-lg">
                At our practice, we believe children communicate best through play. Our colorful, welcoming space is designed to help kids feel comfortable and safe.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Our therapists specialize in child development and use evidence-based techniques tailored to each child's unique needs and personality.
              </p>
              <Link
                to="/about"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
              >
                Learn About Our Methods
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={images.artTherapy}
                  alt="Child engaged in art therapy"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white text-sm italic">"Play is the language of children"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-16">What Parents Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "My daughter actually looks forward to her sessions. The change in her confidence has been remarkable.",
                author: "Priya M., Mother of 7-year-old"
              },
              {
                quote: "The therapist made my son feel understood in ways we couldn't at home. We've learned so much.",
                author: "Rajesh K., Father of 9-year-old"
              },
              {
                quote: "The play-based approach helped our child open up when traditional talk therapy hadn't worked.",
                author: "Ananya & Sanjay, Parents of 6-year-old"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-indigo-50 p-6 rounded-xl border-l-4 border-yellow-400">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-indigo-900 font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Help Your Child Thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Every child deserves to feel happy and confident. Let's work together to support your child's emotional growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918770953003?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all"
            >
              Book an Appointment
            </a>
            <a
              href="tel:+918770953003"
              className="border-2 border-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Call: +91 8770953003
            </a>
          </div>
          <p className="mt-8 text-indigo-100">
            We offer flexible scheduling including after-school appointments
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;