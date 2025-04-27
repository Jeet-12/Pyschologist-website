import { Link } from 'react-router-dom';

// Using placeholder images from placeholder.com (replace with your licensed images)
const therapistImg = "https://via.placeholder.com/400x500.png?text=Therapist+Portrait";
const therapySessionImg = "https://via.placeholder.com/800x500.png?text=Therapy+Session";

function About() {
  const qualifications = [
    { icon: "🎓", text: "PhD in Clinical Psychology, Stanford University" },
    { icon: "📜", text: "Licensed in California (PSY12345)" },
    { icon: "⏳", text: "12+ years of clinical experience" },
    { icon: "🧘", text: "Certified in CBT and Mindfulness Therapies" }
  ];

  const approachPrinciples = [
    "Evidence-based treatment plans",
    "Client-centered therapy",
    "Cultural sensitivity",
    "Holistic mind-body approach",
    "Strict confidentiality"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Adyasa</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Licensed Clinical Psychologist | Mental Health Advocate
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5">
            <div className="bg-white p-1 shadow-xl rounded-lg">
              <img 
                src={therapistImg} 
                alt="Adyasa, Clinical Psychologist" 
                className="w-full h-auto rounded-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-blue-800">Adyasa</h3>
                <p className="text-gray-600">Licensed Clinical Psychologist</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Professional Background</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                I'm a licensed clinical psychologist dedicated to helping individuals navigate life's challenges with evidence-based, compassionate care. My practice focuses on creating a safe, non-judgmental space for healing and growth.
              </p>
              <p>
                After completing my doctoral training at Stanford University, I've worked in various clinical settings including hospitals, community clinics, and private practice, helping clients with anxiety, depression, trauma, and relationship issues.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {qualifications.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start">
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">My Therapeutic Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every individual's journey is unique, and so is their path to healing
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src={therapySessionImg} 
                alt="Therapy session in progress" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="lg:w-1/2">
              <ul className="space-y-5">
                {approachPrinciples.map((principle, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">{principle}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">My Promise to You</h3>
                <p className="text-gray-700">
                  I commit to providing a safe, confidential space where you can explore challenges without judgment. Together, we'll work towards meaningful, lasting change using approaches tailored to your specific needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Taking the first step is often the hardest part. I'm here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule a Consultation
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

export default About;