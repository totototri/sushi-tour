import React, { useState } from 'react';
import { Calendar, Clock, Mail, MapPin } from 'lucide-react';

const SushiTourWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Tokyo Sushi Experience</h1>
            <div className="space-x-6">
              <button onClick={() => setActiveSection('home')} className="hover:text-gray-300">Home</button>
              <button onClick={() => setActiveSection('tours')} className="hover:text-gray-300">Tours</button>
              <button onClick={() => setActiveSection('about')} className="hover:text-gray-300">About</button>
              <button onClick={() => setShowBookingForm(true)} className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">
                Book Now
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-12">
            <section className="text-center">
              <h2 className="text-4xl font-bold mb-4">Discover Authentic Sushi Culture</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the rich tradition of Tokyo's finest sushi establishments, including the legendary Kijushi with over 100 years of history.
              </p>
            </section>

            {/* Tour Options */}
            {/* Tour Options */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
              {/* Standard Tours */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2">Historical Sushi Tour</h3>
                <p className="text-gray-600 mb-4">
                  Visit century-old sushi restaurants and learn about their unique traditions and techniques.
                </p>
                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>3 hours</span>
                  </div>
                  <span className="font-bold">$70</span>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2">Master Craftsman Experience</h3>
                <p className="text-gray-600 mb-4">
                  Watch master sushi chefs at work and learn about their dedication to their craft.
                </p>
                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>4 hours</span>
                  </div>
                  <span className="font-bold">$70</span>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  Premium
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Health-Conscious Experience</h3>
                <p className="text-gray-600 mb-4">
                  A revolutionary sushi experience tailored to your health profile through blood work analysis.
                </p>
                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Special Session</span>
                  </div>
                  <span className="font-bold">$700</span>
                </div>
              </div>
            </section>

            {/* Sushi Chronicles Section */}
            <section className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Sushi Chronicles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">The Origins of Sushi</h4>
                  <p className="text-gray-600">
                    Sushi&#39;s origins date back to Southeast Asia in the 4th century BC. Initially, it was a preservation method 
                    where salted fish was fermented with rice. This preservation technique spread to Japan during the Nara period.
                  </p>
                  <p className="text-gray-600">
                    During the Edo period (1603-1867), sushi evolved into its modern form. Fast-eating &#34;hayazushi&#34; was invented, 
                    and later, &#34;nigirizushi&#34; emerged, combining raw fish with vinegared rice.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">The Art of Sushi Rice</h4>
                  <p className="text-gray-600">
                    The choice between red and white vinegar reflects a rich cultural heritage. Red vinegar (akazu), made from sake lees, 
                    was traditionally used in Edo-mae sushi, creating a deeper, more complex flavor profile.
                  </p>
                  <p className="text-gray-600">
                    Today&#39;s sushi rice is typically served at body temperature or slightly below (35-37°C), 
                    a practice that enhances both taste and texture.
                  </p>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">About Your Guide</h3>
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/3 text-center">
                  <div className="mt-4">
                    <a 
                      href="https://www.instagram.com/yarikirenai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg"
                    >
                      Follow me on Instagram
                      <span className="block text-sm mt-1">@yarikirenai</span>
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h4 className="text-xl font-bold mb-2">Atsushi Morishita</h4>
                  <p className="text-gray-600">
                    A 32-year-old sushi chef and writer originally from Tottori Prefecture, now based in Shinjuku, Tokyo. 
                    Combining traditional sushi craftsmanship with innovative approaches to create unique culinary experiences.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Booking Form */}
        {showBookingForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4">Book Your Sushi Experience</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:tawatokyo@gmail.com`;
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full p-2 border rounded" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full p-2 border rounded" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Tour Type</label>
                    <select className="w-full p-2 border rounded" required>
                      <option>Historical Sushi Tour ($70)</option>
                      <option>Master Craftsman Experience ($70)</option>
                      <option>Custom Health-Conscious Experience ($700)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      className="w-full p-2 border rounded" 
                      min={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                      required 
                    />
                  </div>
                  <p className="text-sm text-gray-500">Booking required at least 1 week in advance</p>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                  <button 
                    type="button" 
                    onClick={() => setShowBookingForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:tawatokyo@gmail.com">tawatokyo@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Shinjuku, Tokyo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SushiTourWebsite;
