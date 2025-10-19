import { Link } from 'react-router-dom';
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Shield, Award, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black dark:from-gray-950 dark:to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-himalayan-blue" />
              <span className="text-xl font-bold">Himalayan Safari</span>
            </div>
            <p className="text-gray-400 mb-4">
              Experience the majestic Himalayas with expert guides and unforgettable trekking adventures across Nepal.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-himalayan-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-himalayan-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-himalayan-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about-us" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#treks" className="text-gray-400 hover:text-white transition-colors">
                  Our Treks
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Treks</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/trek/ghorepani-poon-hill" className="text-gray-400 hover:text-white transition-colors">
                  Ghorepani Poon Hill
                </Link>
              </li>
              <li>
                <Link to="/trek/everest-base-camp" className="text-gray-400 hover:text-white transition-colors">
                  Everest Base Camp
                </Link>
              </li>
              <li>
                <Link to="/trek/annapurna-base-camp" className="text-gray-400 hover:text-white transition-colors">
                  Annapurna Base Camp
                </Link>
              </li>
              <li>
                <Link to="/trek/mardi-himal" className="text-gray-400 hover:text-white transition-colors">
                  Mardi Himal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-himalayan-blue" />
                <span>Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0 text-himalayan-blue" />
                <a href="tel:+977123456789" className="hover:text-white transition-colors">
                  +977 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0 text-himalayan-blue" />
                <a href="mailto:info@himalayansafari.com" className="hover:text-white transition-colors">
                  info@himalayansafari.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Certified & Trusted</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
              <Shield className="h-12 w-12 text-himalayan-blue mb-2" />
              <p className="text-xs text-gray-400 text-center">Government Licensed</p>
              <p className="text-xs font-semibold text-white mt-1">Tourism Board</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
              <Award className="h-12 w-12 text-yellow-500 mb-2" />
              <p className="text-xs text-gray-400 text-center">ISO Certified</p>
              <p className="text-xs font-semibold text-white mt-1">Quality Assured</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
              <Star className="h-12 w-12 text-green-500 mb-2" />
              <p className="text-xs text-gray-400 text-center">4.9/5 Rating</p>
              <p className="text-xs font-semibold text-white mt-1">TripAdvisor</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
              <Mountain className="h-12 w-12 text-blue-500 mb-2" />
              <p className="text-xs text-gray-400 text-center">15+ Years</p>
              <p className="text-xs font-semibold text-white mt-1">Experience</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Himalayan Safari. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
