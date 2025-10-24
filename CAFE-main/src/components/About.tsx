import { Heart, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-amber-900 mb-6">
              Our Story
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Nestled in the vibrant heart of Hyderabad, Star Café is more than just a coffee shop – it's a sanctuary for coffee lovers and food enthusiasts. Since our inception, we've been dedicated to serving the finest coffee beans sourced from premium estates, expertly roasted to perfection.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our cozy atmosphere, combined with exceptional service and mouthwatering treats, creates the perfect setting for meetings, casual catch-ups, or peaceful moments alone. Every cup tells a story, and every visit creates a memory.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transform hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-800">Made with Love</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transform hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-800">Premium Quality</p>
              </div>

              <div className="text-center">
                <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transform hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-800">Community Hub</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cozy café interior"
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border-4 border-amber-500">
              <p className="text-4xl font-bold text-amber-900">5+</p>
              <p className="text-sm text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
