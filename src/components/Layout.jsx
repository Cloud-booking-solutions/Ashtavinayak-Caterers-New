
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Layout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="font-playfair text-2xl font-bold text-gray-800">
              Ashtavinayak Caterers
          </Link>
          
          {/* Mobile menu button */}
          <button onClick={toggleNav} className="md:hidden">
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</Link>
            <Link to="/menu" className="text-gray-700 hover:text-orange-500 transition-colors">Menu</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
            <Link to="/book" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
              Book Now
            </Link>
          </nav>
        </div>
        
        {/* Mobile menu */}
        {isNavOpen && (
          <div className="md:hidden bg-white">
            <div className="container mx-auto px-4 py-4 space-y-4 flex flex-col">
              <Link to="/" onClick={toggleNav} className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
              <Link to="/about" onClick={toggleNav} className="text-gray-700 hover:text-orange-500 transition-colors">About</Link>
              <Link to="/services" onClick={toggleNav} className="text-gray-700 hover:text-orange-500 transition-colors">Services</Link>
              <Link to="/menu" onClick={toggleNav} className="text-gray-700 hover:text-orange-500 transition-colors">Menu</Link>
              <Link to="/contact" onClick={toggleNav} className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
              <Link to="/book" onClick={toggleNav} className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors inline-block text-center">
                Book Now
              </Link>
            </div>
          </div>
        )}
      </header>
      
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-xl font-bold mb-4">Ashtavinayak Caterers</h3>
              <p className="mb-4">We provide exceptional catering services for all your special occasions. From corporate events to weddings, we make every event memorable.</p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" className="hover:text-orange-500 transition-colors" aria-label="Instagram">
                  <Instagram />
                </a>
                <a href="https://facebook.com" className="hover:text-orange-500 transition-colors" aria-label="Facebook">
                  <Facebook />
                </a>
                <a href="https://twitter.com" className="hover:text-orange-500 transition-colors" aria-label="Twitter">
                  <Twitter />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-playfair text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="mr-2" size={48} />
                  <span>New Life Pathology Lab, Near, Dange Chowk Rd, near Hanuman Mandir, Bhatewara Nagar, Hinjawadi, Pimpri-Chinchwad, Pune, Maharashtra 411057</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" size={18} />
                  <span>+91 8379808489</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2" size={18} />
                  <span>caterersashtavinayak@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-playfair text-xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2">
                <p> Open 24 hours </p>
                <p> May be closed on Festival </p>
                
                
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Ashtavinayak Caterers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
