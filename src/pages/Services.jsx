import { Link } from 'react-router-dom';

// High-quality therapy images from Pexels
const serviceImages = {
  individual: "https://images.pexels.com/photos/5720560/pexels-photo-5720560.jpeg",
  couples: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg",
  adolescent: "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg",
  anxiety: "https://images.pexels.com/photos/4058211/pexels-photo-4058211.jpeg",
  stress: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
};

function Services() {
  const services = [
    {
      title: "Individual Therapy",
      description: "Personalized one-on-one sessions to help you navigate life's challenges and achieve emotional wellbeing in a safe, confidential space.",
      benefits: [
        "Address anxiety and depression",
        "Improve self-esteem and confidence",
        "Develop healthy coping mechanisms",
        "Process trauma and emotional wounds",
        "Enhance self-awareness"
      ],
      image: serviceImages.individual,
      icon: "🧘‍♀️",
      color: "bg-purple-100"
    },
    {
      title: "Couples Counseling",
      description: "Strengthen your relationship through improved communication, deeper emotional connection, and constructive conflict resolution.",
      benefits: [
        "Rebuild trust and intimacy",
        "Navigate major life transitions",
        "Improve communication patterns",
        "Develop shared goals and values",
        "Enhance emotional attunement"
      ],
      image: serviceImages.couples,
      icon: "💞",
      color: "bg-pink-100"
    },
    {
      title: "Child & Adolescent Therapy",
      description: "Specialized play-based and talk therapy approaches designed to help young people express themselves and develop resilience.",
      benefits: [
        "Address school-related stress",
        "Manage anxiety and depression",
        "Improve family relationships",
        "Develop social skills",
        "Process behavioral challenges"
      ],
      image: serviceImages.adolescent,
      icon: "🧒",
      color: "bg-blue-100"
    },
    {
      title: "Anxiety & Stress Management",
      description: "Evidence-based techniques to reduce symptoms, build resilience, and restore balance to your daily life.",
      benefits: [
        "Cognitive Behavioral Therapy (CBT)",
        "Mindfulness and relaxation techniques",
        "Stress reduction strategies",
        "Emotional regulation skills",
        "Prevention of burnout"
      ],
      image: serviceImages.anxiety,
      icon: "🧠",
      color: "bg-green-100"
    },
    {
      title: "Life Transitions Support",
      description: "Guidance through major changes like career shifts, relationships, grief, or personal identity exploration.",
      benefits: [
        "Career counseling and coaching",
        "Grief and loss processing",
        "Identity and purpose exploration",
        "Decision-making frameworks",
        "Building resilience through change"
      ],
      image: serviceImages.stress,
      icon: "🔄",
      color: "bg-yellow-100"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img
          src="https://images.pexels.com/photos/4058211/pexels-photo-4058211.jpeg"
          alt="Therapy session"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,1)' }}>
            Therapeutic Services
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-indigo-100" style={{ textShadow: '1px 1px 2px rgba(0,0,0,1)' }}>
            Evidence-based approaches tailored to your unique needs and goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">Specialized Therapy Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each service is carefully designed to address specific challenges while promoting overall wellbeing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 ${service.color.replace('bg', 'border')}`}
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md">
                  <span className="text-2xl">{service.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-5">{service.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-indigo-700 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Key Benefits:
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-indigo-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">My Therapeutic Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining scientific rigor with compassionate care to create meaningful change
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-Based</h3>
              <p className="text-gray-600">
                Using therapies scientifically validated through rigorous research and clinical practice
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-Centered</h3>
              <p className="text-gray-600">
                Tailoring each session to your unique personality, needs, and therapeutic goals
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Confidential</h3>
              <p className="text-gray-600">
                Providing a safe, judgment-free space where you can explore challenges openly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Healing Journey Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            I offer free 15-minute consultations to ensure we're the right fit for your needs
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://wa.me/918770953003?text=Hi%20Dr.%20Adyasa,%20I'd%20like%20to%20schedule%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479h.005c4.939 0 8.961-4.023 8.961-8.961 0-2.365-.92-4.59-2.589-6.269-1.668-1.675-3.892-2.6-6.263-2.6h-.004c-4.939 0-8.963 4.023-8.963 8.961 0 1.704.504 3.283 1.482 4.65l-1.073 3.923 3.942-1.032zm-3.944-7.25l-.139.242.208.77.054.209.145.221.215.197.239.14.23.047.256-.032.178-.153.115-.246.05-.346-1.858-6.386-.061-.22-.175-.194-.215-.141-.246-.058-.248.031-.229.139-.197.198-.115.253-.061.255.008.262.068.229.143.207.198.164.252.082.243-.009z"/>
              </svg>
              Message on WhatsApp
            </a>
            <a
              href="tel:+918770953003"
              className="border-2 border-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call +91 8770953003
            </a>
          </div>
          <p className="mt-8 text-indigo-200">
            Flexible scheduling available, including evenings and weekends
          </p>
        </div>
      </section>
    </div>
  );
}

export default Services;