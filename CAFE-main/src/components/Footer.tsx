import { Coffee, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-950 to-orange-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="w-8 h-8 text-amber-400" />
              <h3 className="text-2xl font-bold">Star Café</h3>
            </div>
            <p className="text-amber-100 leading-relaxed">
              Your favorite destination for premium coffee and memorable moments in the heart of Hyderabad.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-amber-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-amber-100 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-amber-100 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reservation" className="text-amber-100 hover:text-white transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-amber-400">Opening Hours</h4>
            <ul className="space-y-3 text-amber-100">
              <li>Monday - Friday<br />8:00 AM - 11:00 PM</li>
              <li>Saturday - Sunday<br />9:00 AM - 12:00 AM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-amber-400">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-amber-100">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Banjara Hills, Road No. 12<br />Hyderabad, Telangana 500034</span>
              </li>
              <li className="flex items-center gap-2 text-amber-100">
                <Phone className="w-5 h-5" />
                <span>+91 9876 543 210</span>
              </li>
              <li className="flex items-center gap-2 text-amber-100">
                <Mail className="w-5 h-5" />
                <span>hello@starcafe.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-200">
          <p>© 2025 Star Café. All rights reserved. Made with love in Hyderabad.</p>
        </div>
      </div>
    </footer>
  );
}
