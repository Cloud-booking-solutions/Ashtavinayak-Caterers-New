import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // ✅ WhatsApp icon from react-icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const phoneNumber = "+91 9021470231"; 
  const emailAddress = "shivtejcaterers@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.location.href = `https://wa.me/${phoneNumber.replace('+', '')}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[40vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661438404948-3f90203f5a39?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            We'd love to hear from you. Get in touch with our team for inquiries or to schedule a consultation.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <MapPin className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Location</h3>
                    <p className="text-gray-600">Punawale, Kate Wasti Chowk, Pimpri-Chinchwad, Maharashtra, 411033</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Phone className="text-orange-500" />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <h3 className="font-bold mb-1">Phone Number</h3>
                      <p className="text-gray-600">+91 9021470231</p>
                    </div>
                    <div className="flex ml-4 gap-2">
                      <button
                        onClick={handleCall}
                        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors"
                        aria-label="Call us"
                      >
                        <PhoneCall size={20} />
                      </button>
                      <button
                        onClick={handleWhatsApp}
                        className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
                        aria-label="Message on WhatsApp"
                      >
                        <FaWhatsapp size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Mail className="text-orange-500" />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <h3 className="font-bold mb-1">Email Address</h3>
                      <p className="text-gray-600">shivtejcaterers@gmail.com</p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={handleEmail}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
                        aria-label="Send email"
                      >
                        <Mail size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Clock className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                    Open 24 hours<br></br>May be closed on Festival
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8546233202833!2d73.73091837496557!3d18.6256074824885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e1971e5aa5%3A0xd9c6545e72bd9bbf!2sShivtej%20Caterer!5e0!3m2!1sen!2sin!4v1747997052814!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                />

              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-playfair text-3xl font-bold mb-6">Send Us a Message</h2>

              {formSubmitted && (
                <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
                  Thank you for your message! We'll get back to you as soon as possible.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <Send className="mr-2" size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to some of the most common questions about our catering services.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">How far in advance should I book your catering services?</h3>
              <p className="text-gray-600">We recommend booking our services at least 4-6 weeks in advance for most events. However, for weddings and large corporate events, 3-6 months notice is preferred to ensure availability.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Do you accommodate dietary restrictions and allergies?</h3>
              <p className="text-gray-600">Yes, we can accommodate various dietary needs including vegetarian, vegan, gluten-free, and most food allergies. Please inform us of any dietary restrictions during the consultation process.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">What is your cancellation policy?</h3>
              <p className="text-gray-600">Our standard policy requires a 50% deposit to secure your date, which is non-refundable within 14 days of the event. Cancellations made more than 30 days before the event may be eligible for a partial refund.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Do you provide rental equipment like tables, chairs, and linens?</h3>
              <p className="text-gray-600">While our focus is on food and service, we can coordinate equipment rentals through our trusted partners at an additional cost. We'll discuss your specific needs during the planning process.</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;


