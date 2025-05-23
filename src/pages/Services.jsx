
import { Link } from 'react-router-dom';
import { Check, BriefcaseIcon, HeartIcon, GlassesIcon, UtensilsIcon, CakeIcon, MusicIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Corporate Events",
      description: "Professional catering for business meetings, conferences, and corporate celebrations.",
      icon: BriefcaseIcon,
      features: [
        "Breakfast and lunch options",
        "Coffee breaks and refreshments",
        "Formal dinner services",
        "Product launch catering",
        "Conference meal planning"
      ],
      image: "https://plus.unsplash.com/premium_photo-1723867267202-169dfe3b197a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
    },
    {
      title: "Weddings",
      description: "Memorable dining experiences for your special day, from elegant receptions to intimate gatherings.",
      icon: HeartIcon,
      features: [
        "Custom menu planning",
        "Cocktail hour catering",
        "Plated dinner service",
        "Buffet options",
        "Cake and dessert tables"
      ],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGNhdGVyaW5nfGVufDB8fDB8fHww"
    },
    {
      title: "Social Events",
      description: "Catering for birthdays, anniversaries, graduations, and other milestone celebrations.",
      icon: GlassesIcon,
      features: [
        "Themed food stations",
        "Casual and formal options",
        "Customized menus",
        "Dessert bars",
        "Kid-friendly options"
      ],
      image: "https://plus.unsplash.com/premium_photo-1722945724739-80938c50f65a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29jaWFsJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Private Dining",
      description: "Intimate dining experiences with personal chef service for small gatherings at your home.",
      icon: UtensilsIcon,
      features: [
        "In-home chef service",
        "Multi-course tasting menus",
        "Wine pairing options",
        "Kitchen cleanup included",
        "Personalized menu consultation"
      ],
      image: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvdXAlMjBkaW5uZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Special Occasion Cakes",
      description: "Custom-designed cakes for weddings, birthdays, and other special occasions.",
      icon: CakeIcon,
      features: [
        "Custom design consultation",
        "Variety of flavors and fillings",
        "Dietary accommodations available",
        "Delivery and setup",
        "Wedding cake tastings"
      ],
      image: "https://images.unsplash.com/photo-1604702433171-33756f3f3825?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlZGRpbmclMjBjYWtlfGVufDB8fDB8fHww"
    },
    {
      title: "Event Planning",
      description: "Comprehensive event planning services to ensure your occasion is perfectly executed.",
      icon: MusicIcon,
      features: [
        "Venue coordination",
        "Vendor management",
        "Timeline creation",
        "Day-of coordination",
        "Full-service planning"
      ],
      image: "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[50vh] flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576842546422-60562b9242ae?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl">Comprehensive catering solutions for every occasion, tailored to your unique needs.</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Catering Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer a comprehensive range of catering services to meet all your event needs, from intimate gatherings to grand celebrations.</p>
          </div>

          <div className="grid grid-cols-1 gap-24">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'order-2 md:order-1' : 'order-2'}`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg w-full h-auto object-cover shadow-md"
                  />
                </div>
                <div className={`${index % 2 !== 0 ? 'order-1 md:order-2' : 'order-1'}`}>
                  <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-orange-500" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mb-3">{service.title}</h3>
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
                  
                  <Link to="/book" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium transition-colors">
                    Request a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We make planning your event catering simple and stress-free with our streamlined process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 -left-4 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="font-playfair text-xl font-bold mb-3">Consultation</h3>
              <p className="text-gray-600">We meet to discuss your event, preferences, and requirements to understand your vision.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 -left-4 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="font-playfair text-xl font-bold mb-3">Proposal</h3>
              <p className="text-gray-600">We create a customized catering proposal including menu options and pricing.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 -left-4 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="font-playfair text-xl font-bold mb-3">Tasting</h3>
              <p className="text-gray-600">Sample your selected menu items and make any adjustments to ensure perfection.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 -left-4 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <h3 className="font-playfair text-xl font-bold mb-3">Execution</h3>
              <p className="text-gray-600">We handle all aspects of food preparation, delivery, setup, service, and cleanup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let us help you create a memorable culinary experience for your next occasion.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded text-lg font-medium transition-colors">
              Book Now
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-white/10 border-2 border-white px-8 py-3 rounded text-lg font-medium transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
