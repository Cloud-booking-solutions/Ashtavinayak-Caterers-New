import { Check, Award, Heart, Users } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Chef Michael Rodriguez",
      role: "Executive Chef",
      image: "http://www.bigbucksblogger.com/wp-content/uploads/2019/10/Catering-Waiter-201801.jpg",
      bio: "With over 15 years of culinary expertise, Chef Michael brings creativity and precision to every dish.",
    },
    {
      name: "Sofia Chen",
      role: "Event Director",
      image: "https://cater-waiters.com/wp-content/uploads/sites/3/2020/04/Experience-CaterWaiters-.jpeg",
      bio: "Sofia ensures that every event runs flawlessly, with attention to even the smallest details.",
    },
    {
      name: "James Wilson",
      role: "Pastry Chef",
      image: "https://media.istockphoto.com/id/1173212878/photo/one-man-only-waist-up-front-view-looking-at-camera-side-view-profile-view-of-20-29-years-old.jpg?s=1024x1024&w=is&k=20&c=U_d0Y9yYhKYH1pTTfX8AK_xgwTwn46X3PxpWkuaaJ4w=",
      bio: "James creates desserts that are as visually stunning as they are delicious, adding a sweet finish to every meal.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[50vh] flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl">A team of passionate culinary experts dedicated to creating memorable dining experiences.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">Ashtavinayak Caterers was born from a passion for exceptional food and unforgettable events. What began as a small family operation has grown into a premier catering service trusted by clients for all their special occasions.</p>
              <p className="text-gray-600 mb-6">We started with a simple mission: to create customized culinary experiences that reflect the unique vision of each client while maintaining the highest standards of quality and service.</p>
              <p className="text-gray-600">Over the years, we've had the privilege of catering hundreds of weddings, corporate gatherings, and special events. Each occasion has strengthened our expertise and deepened our commitment to culinary excellence.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1635363638580-c2809d049eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Chef preparing food" 
                className="rounded-lg w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Catering setup" 
                className="rounded-lg w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Fine dining" 
                className="rounded-lg w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1601314212732-047d4bdffd22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Event setup" 
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every aspect of our catering service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Award size={32} className="text-orange-500" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">We use only the freshest ingredients and finest techniques to create dishes that delight the senses.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Heart size={32} className="text-orange-500" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Passion</h3>
              <p className="text-gray-600">Our love for culinary arts shines through in everything we do, from meal planning to presentation.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Users size={32} className="text-orange-500" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Service</h3>
              <p className="text-gray-600">We pride ourselves on attentive, personalized service that exceeds expectations and creates memorable experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://josannecassar.com/wp-content/uploads/2017/06/Seashells-catering-team.jpg" 
                alt="Catering team working" 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-gray-600 mb-6">At Ashtavinayak Caterers, we understand that each event is unique. We work closely with you to create a customized menu that reflects your taste, preferences, and the nature of your occasion.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-orange-500" />
                  </div>
                  <p className="text-gray-600">Customized menus to suit your event and dietary requirements</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-orange-500" />
                  </div>
                  <p className="text-gray-600">Professional staff dedicated to excellent service</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-orange-500" />
                  </div>
                  <p className="text-gray-600">Locally sourced ingredients for the freshest flavors</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-orange-500" />
                  </div>
                  <p className="text-gray-600">Attention to detail in both food preparation and presentation</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                    <Check size={16} className="text-orange-500" />
                  </div>
                  <p className="text-gray-600">Comprehensive event planning and coordination services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The talented professionals who make your culinary dreams a reality.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-500 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;