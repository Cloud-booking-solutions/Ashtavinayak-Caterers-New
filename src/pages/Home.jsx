
import { Link } from 'react-router-dom';
import { Star, Users, ChefHat, CalendarCheck } from 'lucide-react';

const Home = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Raj Sharma",
      role: "Wedding Client",
      message: "Culinary Canvas made our wedding day absolutely perfect! The food was amazing and the service was impeccable.",
    },
    {
      id: 2,
      name: "Soham Malhotra",
      role: "Corporate Event Manager",
      message: "We've used Culinary Canvas for multiple corporate events and they never disappoint. Professional, creative, and delicious every time!",
    },
    {
      id: 3,
      name: "Aniket Verma",
      role: "Birthday Party Host",
      message: "The team went above and beyond for my 50th birthday. My guests are still talking about the incredible food!",
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh] flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">Exceptional Catering<br />For Every Occasion</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Elevate your events with our gourmet catering services. We create culinary experiences that your guests will remember.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded text-lg font-medium transition-colors">
              Book Now
            </Link>
            <Link to="/menu" className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded text-lg font-medium transition-colors">
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer a range of professional catering services to meet all your event needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <ChefHat size={32} className="text-orange-500" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Corporate Events</h3>
              <p className="text-gray-600 mb-4">Impress clients and colleagues with our professional catering services for meetings, conferences, and corporate events.</p>
              <Link to="/services" className="text-orange-500 hover:text-orange-600 font-medium">Learn More →</Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users size={32} className="text-orange-500" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Wedding Catering</h3>
              <p className="text-gray-600 mb-4">Create memorable dining experiences for your special day with our customized wedding catering packages.</p>
              <Link to="/services" className="text-orange-500 hover:text-orange-600 font-medium">Learn More →</Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CalendarCheck size={32} className="text-orange-500" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Private Parties</h3>
              <p className="text-gray-600 mb-4">From intimate gatherings to grand celebrations, let us handle the food while you focus on enjoying the party.</p>
              <Link to="/services" className="text-orange-500 hover:text-orange-600 font-medium">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Featured Menu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our gourmet selections crafted with the freshest ingredients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Appetizers" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Gourmet Appetizers</h3>
              <p className="text-gray-600 mb-2">Start your event with our selection of delectable appetizers that set the tone for an exquisite dining experience.</p>
              <Link to="/menu" className="text-orange-500 hover:text-orange-600 font-medium">View Menu →</Link>
            </div>

            <div className="group">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Main Courses" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Main Courses</h3>
              <p className="text-gray-600 mb-2">Our main courses feature a fusion of flavors that cater to diverse palates, ensuring satisfaction for all your guests.</p>
              <Link to="/menu" className="text-orange-500 hover:text-orange-600 font-medium">View Menu →</Link>
            </div>

            <div className="group">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Desserts" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Decadent Desserts</h3>
              <p className="text-gray-600 mb-2">End your event on a sweet note with our handcrafted desserts, made with passion and the finest ingredients.</p>
              <Link to="/menu" className="text-orange-500 hover:text-orange-600 font-medium">View Menu →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear what our satisfied clients have to say about our catering services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.message}"</p>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded text-lg font-medium transition-colors">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
