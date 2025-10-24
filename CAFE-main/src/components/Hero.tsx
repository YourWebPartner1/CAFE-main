import { Coffee, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-orange-800/85 to-amber-950/90 z-10"></div>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      ></div>

      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Coffee className="w-20 h-20 text-amber-300 animate-bounce-slow" strokeWidth={1.5} />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Star Café
          </h1>

          <p className="text-2xl md:text-4xl text-amber-100 font-light mb-8 leading-relaxed">
            Fresh Coffee, Happy Moments in Hyderabad
          </p>

          <p className="text-lg md:text-xl text-amber-50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience the perfect blend of premium coffee, delicious treats, and warm hospitality in the heart of the city
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#menu"
              className="group bg-amber-500 hover:bg-amber-400 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            >
              Explore Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#reservation"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-50 to-transparent z-20"></div>
    </section>
  );
}
