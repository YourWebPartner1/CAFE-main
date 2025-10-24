import { Wifi, Home, ShoppingBag, Gift } from 'lucide-react';

const features = [
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'Stay connected with high-speed internet throughout your visit'
  },
  {
    icon: Home,
    title: 'Cozy Ambiance',
    description: 'Relax in our warm, inviting atmosphere designed for comfort'
  },
  {
    icon: ShoppingBag,
    title: 'Takeaway Service',
    description: 'Enjoy your favorites on the go with our quick takeaway options'
  },
  {
    icon: Gift,
    title: 'Loyalty Program',
    description: 'Earn rewards with every visit and enjoy exclusive member benefits'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-100 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 mb-4">
            Why Choose Star Café
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Experience exceptional service and amenities that make every visit memorable
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Join Our Loyalty Program Today
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get 10% off on your first order when you sign up, and earn points with every purchase to unlock exclusive rewards
          </p>
          <button className="bg-white text-amber-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-amber-50 transition-colors duration-300 transform hover:scale-105 shadow-lg">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
}
