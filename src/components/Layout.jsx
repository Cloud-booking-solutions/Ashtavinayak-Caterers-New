import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, MapPin, Phone, Mail, PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';


const Layout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  
  const phoneNumber = "+91 9021470231";  // Replace with your actual phone number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.location.href = `https://wa.me/${phoneNumber.replace('+', '')}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="font-playfair text-2xl font-bold text-gray-800">
            Shivtej Caterers
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
      
      {/* Fixed Contact Buttons */}
      <div className="fixed left-0 top-1/2 z-40 flex flex-col gap-2 ml-2">
        <button 
          onClick={handleCall}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors shadow-lg"
          aria-label="Call us"
        >
          <PhoneCall size={24} />
        </button>
        <button 
          onClick={handleWhatsApp}
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors shadow-lg"
          aria-label="Message on WhatsApp"
        >
          <FaWhatsapp size={24} />
        </button>
      </div>
      
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-xl font-bold mb-4">Shivtej Caterers</h3>
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
                  <MapPin className="mr-2" size={18} />
                  <span>Punawale, Kate Wasti Chowk, Pimpri-Chinchwad, Maharashtra, 411033</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" size={18} />
                  <a href="+91 9021470231" className="hover:text-orange-500 transition-colors underline">
                     +91 9021470231
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2" size={18} />
                  <a href="shivtejcaterers@gmail.com" className="hover:text-orange-500 transition-colors underline">
                      shivtejcaterers@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-playfair text-xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2">
                <p>Open 24 hours<br></br>
                May be closed on Festival</p>
               
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Shivtej Caterers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;