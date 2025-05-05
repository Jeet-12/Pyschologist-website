import { Link } from 'react-router-dom';
import profile from "../assests/profile.png"

// Using high-quality, child-friendly psychology images from Pexels
const images = {
  therapistPortrait: profile,
  therapySession: "https://images.pexels.com/photos/5720560/pexels-photo-5720560.jpeg",
  childTherapy: "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg",
  mindfulness: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
};

function About() {
  const qualifications = [
    { icon: "🎓", title: "Education", text: "PhD in Psychology, PRSU" },
    { icon: "📜", title: "Licenses", text: "Licensed in PRSU" },
    { icon: "⏳", title: "Experience", text: "3+ years clinical experience" },
    { icon: "🧘", title: "Specializations", text: "CBT, Mindfulness, Play Therapy" }
  ];

  const approachPrinciples = [
    { 
      title: "Evidence-Based", 
      description: "Using scientifically validated methods tailored to each client",
      icon: "🔬"
    },
    { 
      title: "Child-Centered", 
      description: "Playful approaches that make therapy engaging for children",
      icon: "🧸"
    },
    { 
      title: "Holistic Care", 
      description: "Addressing mind, body, and emotional wellbeing",
      icon: "🌿"
    },
    { 
      title: "Cultural Sensitivity", 
      description: "Respecting diverse backgrounds and family structures",
      icon: "🌎"
    },
    { 
      title: "Confidential", 
      description: "Safe space for open, judgment-free communication",
      icon: "🤫"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img
          src={images.childTherapy}
          alt="Child therapy session"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 15)' }}>About Dr. Adyasa</h1>
         
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-2/5">
            <div className="bg-white p-1 shadow-2xl rounded-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <img
                src={images.therapistPortrait}
                alt="Dr. Adyasa, Clinical Psychologist"
                className="w-full h-auto rounded-xl object-cover aspect-[3/4]"
              />
              <div className="p-6 text-center bg-gradient-to-r from-indigo-50 to-blue-50 rounded-b-xl"  >
                <h3 className="text-2xl font-bold text-indigo-900 mb-1"  >Dr. Adyasa Pattnayak</h3>
                <p className="text-indigo-600 mb-3" >PhD, Rehabilitation Psychologist</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">Professional Journey</h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                I'm Dr. Adyasa Pattnayak, a passionate Rehabilitation Psychologist specializing in child development and family wellness. My journey in psychology began with a deep curiosity about how children perceive and interact with the world around them.
              </p>
              <p>
                With over three years of clinical experience, I've had the privilege of helping hundreds of children and families navigate emotional, behavioral, and developmental challenges. My approach blends scientific rigor with compassionate understanding.
              </p>
              <p>
                I've conducted more than 100 workshops on child development and positive parenting, collaborating with schools and communities to promote mental health awareness. My research focuses on making psychological insights accessible and practical for everyday family life.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {qualifications.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md border border-indigo-50 hover:shadow-lg transition-shadow flex items-start"
                >
                  <span className="text-3xl mr-4 text-indigo-600">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-indigo-900">{item.title}</h4>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
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
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">My Therapeutic Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every child is unique, and so is their path to emotional wellbeing
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="grid md:grid-cols-2 gap-6">
                {approachPrinciples.map((principle, index) => (
                  <div 
                    key={index} 
                    className="bg-indigo-50 p-6 rounded-xl hover:bg-indigo-100 transition-colors"
                  >
                    <div className="text-3xl mb-3 text-indigo-600">{principle.icon}</div>
                    <h3 className="text-xl font-semibold text-indigo-900 mb-2">{principle.title}</h3>
                    <p className="text-gray-700">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={images.therapySession}
                  alt="Therapy session with child"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-lg italic">"Children communicate best through play and creative expression"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">My Commitment to Families</h3>
            <p className="text-lg mb-6">
              I promise to provide a safe, nurturing environment where children can express themselves freely and parents can find guidance without judgment. Together, we'll build strategies that foster long-term emotional resilience and family harmony.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>100+ Happy Families</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>Evidence-Based Methods</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>Child-First Approach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-900 to-purple-900 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Family's Wellness Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            The first step is often the hardest - let's take it together
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://wa.me/918770953003?text=Hi%20Dr.%20Adyasa,%20I%20would%20like%20to%20schedule%20a%20consultation%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479h.005c4.939 0 8.961-4.023 8.961-8.961 0-2.365-.92-4.59-2.589-6.269-1.668-1.675-3.892-2.6-6.263-2.6h-.004c-4.939 0-8.963 4.023-8.963 8.961 0 1.704.504 3.283 1.482 4.65l-1.073 3.923 3.942-1.032zm-3.944-7.25l-.139.242.208.77.054.209.145.221.215.197.239.14.23.047.256-.032.178-.153.115-.246.05-.346-1.858-6.386-.061-.22-.175-.194-.215-.141-.246-.058-.248.031-.229.139-.197.198-.115.253-.061.255.008.262.068.229.143.207.198.164.252.082.243-.009z"/>
              </svg>
              Message on WhatsApp
            </a>
            <a
              href="tel:+918770953003"
              className="border-2 border-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call +91 8770953003
            </a>
          </div>
          <p className="mt-8 text-indigo-200">
            Flexible appointments available, including evenings and weekends
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;