import { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#reservation' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <Coffee className={`w-8 h-8 transition-colors ${
              isScrolled ? 'text-amber-600' : 'text-amber-300'
            } group-hover:rotate-12 transition-transform`} />
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-amber-900' : 'text-white'
            }`}>
              Star Café
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservation"
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-amber-500 text-white hover:bg-amber-600'
                  : 'bg-white text-amber-900 hover:bg-amber-50'
              }`}
            >
              Book Now
            </a>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-amber-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg mt-2 rounded-b-2xl overflow-hidden">
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 rounded-lg hover:bg-amber-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#reservation"
                className="bg-amber-500 text-white hover:bg-amber-600 font-semibold py-3 px-4 rounded-lg text-center transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
