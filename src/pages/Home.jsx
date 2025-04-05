import { Link } from 'react-router-dom';
import {
  Briefcase,
  Heart,
  Glasses,
  Utensils,
  Cake,
  Music,
  Check,
  Star,
  Users,
  ChefHat,
  CalendarCheck,
} from 'lucide-react';

const Home = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Raj Sharma',
      role: 'Wedding Client',
      message:
        'Culinary Canvas made our wedding day absolutely perfect! The food was amazing and the service was impeccable.',
    },
    {
      id: 2,
      name: 'Soham Malhotra',
      role: 'Corporate Event Manager',
      message:
        "We've used Culinary Canvas for multiple corporate events and they never disappoint. Professional, creative, and delicious every time!",
    },
    {
      id: 3,
      name: 'Aniket Verma',
      role: 'Birthday Party Host',
      message:
        'The team went above and beyond for my 50th birthday. My guests are still talking about the incredible food!',
    },
  ];

  const services = [
    {
      title: 'Corporate Events',
      description:
        'Professional catering for business meetings, conferences, and corporate celebrations.',
      icon: Briefcase,
      features: [
        'Breakfast and lunch options',
        'Coffee breaks and refreshments',
        'Formal dinner services',
        'Product launch catering',
        'Conference meal planning',
      ],
      image:
        'https://www.focuseventphotography.com/wp-content/uploads/2019/12/corporate-events-photographer-mirage-las-vegas.jpg',
    },
    {
      title: 'Weddings',
      description:
        'Memorable dining experiences for your special day, from elegant receptions to intimate gatherings.',
      icon: Heart,
      features: [
        'Custom menu planning',
        'Cocktail hour catering',
        'Plated dinner service',
        'Buffet options',
        'Cake and dessert tables',
      ],
      image:
        'https://i.pinimg.com/originals/89/4f/89/894f89d00fd7aa3692980efaa47cc681.jpg',
    },
    {
      title: 'Social Events',
      description:
        'Catering for birthdays, anniversaries, graduations, and other milestone celebrations.',
      icon: Glasses,
      features: [
        'Themed food stations',
        'Casual and formal options',
        'Customized menus',
        'Dessert bars',
        'Kid-friendly options',
      ],
      image:
        'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Private Dining',
      description:
        'Intimate dining experiences with personal chef service for small gatherings at your home.',
      icon: Utensils,
      features: [
        'In-home chef service',
        'Multi-course tasting menus',
        'Wine pairing options',
        'Kitchen cleanup included',
        'Personalized menu consultation',
      ],
      image:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Special Occasion Cakes',
      description:
        'Custom-designed cakes for weddings, birthdays, and other special occasions.',
      icon: Cake,
      features: [
        'Custom design consultation',
        'Variety of flavors and fillings',
        'Dietary accommodations available',
        'Delivery and setup',
        'Wedding cake tastings',
      ],
      image:
        'https://png.pngtree.com/background/20230424/original/pngtree-birthday-cake-with-candles-and-images-hd-picture-image_2455904.jpg',
    },
    {
      title: 'Event Planning',
      description:
        'Comprehensive event planning services to ensure your occasion is perfectly executed.',
      icon: Music,
      features: [
        'Venue coordination',
        'Vendor management',
        'Timeline creation',
        'Day-of coordination',
        'Full-service planning',
      ],
      image:
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div>
      {/* Hero Section with Background */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://hizonscatering.com/wp-content/uploads/2018/07/Background-for-Website.jpg')",
        }}

      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
            Welcome to Ashtavinayak Caterers
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Exquisite catering for every occasion. Taste the art of fine cuisine.
          </p>
          <Link
            to="/services"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-medium"
          >
            Explore Services
          </Link>
        </div>
      </section>

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



      {/* Catering Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Catering Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of catering services to meet all your event needs, from intimate gatherings to grand celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`${
                      index % 2 !== 0 ? 'order-2 md:order-1' : 'order-2'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg w-full h-auto object-cover shadow-md"
                    />
                  </div>
                  <div
                    className={`${
                      index % 2 !== 0 ? 'order-1 md:order-2' : 'order-1'
                    }`}
                  >
                    <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <Icon size={32} className="text-orange-500" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <h4 className="font-medium mb-4">What We Offer:</h4>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start">
                          <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                            <Check size={16} className="text-orange-500" />
                          </div>
                          <p className="text-gray-600">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/book"
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium transition-colors"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-10">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md text-left"
              >
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 mr-1" />
                  <Star className="text-yellow-400 mr-1" />
                  <Star className="text-yellow-400 mr-1" />
                  <Star className="text-yellow-400 mr-1" />
                  <Star className="text-yellow-400" />
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.message}"</p>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
