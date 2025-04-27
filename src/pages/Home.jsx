import { Link } from 'react-router-dom';

function Home() {
  // Free-to-use image URLs from Pexels (download and add to your assets folder)
  const images = {
    heroBg: "https://images.pexels.com/photos/4058211/pexels-photo-4058211.jpeg",
    therapySession: "https://images.pexels.com/photos/5720560/pexels-photo-5720560.jpeg",
    mindfulness: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
    coupleTherapy: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg"
  };

  const services = [
    {
      title: "Individual Therapy",
      description: "Personalized one-on-one sessions to address anxiety, depression, and personal growth.",
      icon: "🧠",
      image: images.therapySession
    },
    {
      title: "Couples Counseling",
      description: "Strengthen your relationship through improved communication and understanding.",
      icon: "💑",
      image: images.coupleTherapy
    },
    {
      title: "Mindfulness Training",
      description: "Learn techniques to reduce stress and increase present-moment awareness.",
      icon: "🌿",
      image: images.mindfulness
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src={images.heroBg} 
          alt="Peaceful therapy environment" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Journey to <span className="text-blue-300">Mental Wellness</span> Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Compassionate care tailored to your unique needs
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">Our Therapeutic Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Take the First Step Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            You don't have to face your challenges alone. Let's work together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-800 hover:bg-blue-100 px-6 py-3 rounded-lg font-semibold"
            >
              Book an Appointment
            </Link>
            <a 
              href="tel:+00056857085" 
              className="border-2 border-white hover:bg-white hover:text-blue-800 px-6 py-3 rounded-lg font-semibold"
            >
              Call: (000) 5685-7085
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;