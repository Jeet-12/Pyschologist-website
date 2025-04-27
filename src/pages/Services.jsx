import { Link } from 'react-router-dom';

// Placeholder images - replace with your properly licensed images
const serviceImages = {
  individual: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80",
  couples: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80",
  adolescent: "https://images.unsplash.com/photo-1530036854756-14a4a7c01508?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80",
  anxiety: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80",
  stress: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80"
};

function Services() {
  const services = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your unique needs, helping you navigate personal challenges and achieve emotional wellbeing.",
      benefits: [
        "Address anxiety and depression",
        "Improve self-esteem",
        "Develop coping strategies",
        "Process trauma"
      ],
      image: serviceImages.individual,
      icon: "🧘"
    },
    {
      title: "Couples Counseling",
      description: "Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection.",
      benefits: [
        "Resolve conflicts constructively",
        "Rebuild trust",
        "Enhance intimacy",
        "Navigate life transitions"
      ],
      image: serviceImages.couples,
      icon: "💑"
    },
    {
      title: "Child & Adolescent Therapy",
      description: "Specialized support for young people dealing with emotional, behavioral, or social challenges.",
      benefits: [
        "Address school-related stress",
        "Manage anxiety/depression",
        "Improve family relationships",
        "Develop social skills"
      ],
      image: serviceImages.adolescent,
      icon: "👧"
    },
    {
      title: "Anxiety & Depression Management",
      description: "Evidence-based approaches to reduce symptoms and improve quality of life.",
      benefits: [
        "Cognitive Behavioral Therapy",
        "Mindfulness techniques",
        "Stress reduction tools",
        "Relapse prevention"
      ],
      image: serviceImages.anxiety,
      icon: "🧠"
    },
    {
      title: "Life Transitions Support",
      description: "Guidance through major life changes like career shifts, relationships, or personal growth phases.",
      benefits: [
        "Career counseling",
        "Grief and loss support",
        "Identity exploration",
        "Decision-making strategies"
      ],
      image: serviceImages.stress,
      icon: "🔄"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Therapeutic Services</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Evidence-based approaches tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <h2 className="text-2xl font-bold text-blue-900">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <h3 className="font-semibold text-blue-800 mb-2">Benefits Include:</h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">My Therapeutic Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Evidence-Based</h3>
              <p className="text-gray-600">Using therapies scientifically proven to be effective</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Client-Centered</h3>
              <p className="text-gray-600">Tailored to your unique needs and goals</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Confidential</h3>
              <p className="text-gray-600">Safe space for open, honest discussion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            I offer free 15-minute consultations to discuss your needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule Consultation
            </Link>
            <a 
              href="tel:+15551234567" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;