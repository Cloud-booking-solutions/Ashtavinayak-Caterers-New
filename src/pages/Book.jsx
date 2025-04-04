
import { useState } from 'react';
import { Calendar, Users, Clock, UtensilsCrossed, CheckSquare } from 'lucide-react';

const Book = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: '',
    guestCount: '',
    eventDate: '',
    eventTime: '',
    location: '',
    name: '',
    email: '',
    phone: '',
    additionalNotes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    setFormSubmitted(true);
    window.scrollTo(0, 0);
  };

  const eventTypes = [
    { value: 'wedding', label: 'Wedding' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'birthday', label: 'Birthday Party' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'graduation', label: 'Graduation' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[40vh] flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Book Our Services</h1>
          <p className="text-xl max-w-2xl">Let us cater your next event with our exceptional culinary offerings and service.</p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {formSubmitted ? (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-green-100 text-green-700 p-6 rounded-md mb-6 inline-flex items-center">
                  <CheckSquare size={32} className="mr-2" />
                  <span className="text-lg font-medium">Thank you for your booking request!</span>
                </div>
                <h2 className="font-playfair text-3xl font-bold mb-4">We've Received Your Request</h2>
                <p className="text-gray-600 mb-8">
                  Our team will review your information and contact you within 24-48 business hours to discuss the details of your event and provide a customized quote.
                </p>
                <p className="text-gray-700 mb-8">
                  If you have any immediate questions, please feel free to call us at <span className="font-medium">(555) 123-4567</span>.
                </p>
                <button
                  onClick={() => window.location.href = '/'}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Back to Home
                </button>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md">
                {/* Progress Steps */}
                <div className="flex justify-between items-center mb-8">
                  <div className={`flex flex-col items-center ${step >= 1 ? 'text-orange-500' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-orange-500 bg-orange-100' : 'border-gray-300'}`}>
                      1
                    </div>
                    <span className="text-sm mt-1">Event Details</span>
                  </div>
                  <div className={`h-1 flex-1 mx-2 ${step >= 2 ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
                  <div className={`flex flex-col items-center ${step >= 2 ? 'text-orange-500' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-orange-500 bg-orange-100' : 'border-gray-300'}`}>
                      2
                    </div>
                    <span className="text-sm mt-1">Contact Info</span>
                  </div>
                  <div className={`h-1 flex-1 mx-2 ${step >= 3 ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
                  <div className={`flex flex-col items-center ${step >= 3 ? 'text-orange-500' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-orange-500 bg-orange-100' : 'border-gray-300'}`}>
                      3
                    </div>
                    <span className="text-sm mt-1">Confirm</span>
                  </div>
                </div>

                <h2 className="font-playfair text-3xl font-bold mb-6">
                  {step === 1 && "Event Information"}
                  {step === 2 && "Your Contact Information"}
                  {step === 3 && "Review & Submit"}
                </h2>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Event Details */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="eventType" className="block text-gray-700 mb-2">Event Type *</label>
                        <div className="relative">
                          <UtensilsCrossed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          >
                            <option value="">Select Event Type</option>
                            {eventTypes.map((type) => (
                              <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="guestCount" className="block text-gray-700 mb-2">Number of Guests *</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="number"
                            id="guestCount"
                            name="guestCount"
                            value={formData.guestCount}
                            onChange={handleChange}
                            placeholder="Estimated guest count"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                            min="1"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="eventDate" className="block text-gray-700 mb-2">Event Date *</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="date"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="eventTime" className="block text-gray-700 mb-2">Event Time *</label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="time"
                            id="eventTime"
                            name="eventTime"
                            value={formData.eventTime}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="location" className="block text-gray-700 mb-2">Event Location *</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Venue name and address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={nextStep}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Contact Information */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
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
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="additionalNotes" className="block text-gray-700 mb-2">Additional Information</label>
                        <textarea
                          id="additionalNotes"
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleChange}
                          rows="4"
                          placeholder="Tell us about your event, food preferences, special requests, etc."
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        ></textarea>
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-medium transition-colors"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Review & Submit */}
                  {step === 3 && (
                    <div>
                      <div className="bg-gray-50 p-6 rounded-md mb-6">
                        <h3 className="font-bold text-lg mb-4">Booking Summary</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Event Type</p>
                            <p className="font-medium">
                              {eventTypes.find(type => type.value === formData.eventType)?.label || formData.eventType}
                            </p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500">Number of Guests</p>
                            <p className="font-medium">{formData.guestCount}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500">Event Date</p>
                            <p className="font-medium">{new Date(formData.eventDate).toLocaleDateString()}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500">Event Time</p>
                            <p className="font-medium">{formData.eventTime}</p>
                          </div>
                          
                          <div className="md:col-span-2">
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-medium">{formData.location}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500">Full Name</p>
                            <p className="font-medium">{formData.name}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500">Email Address</p>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500">Phone Number</p>
                            <p className="font-medium">{formData.phone}</p>
                          </div>
                        </div>
                        
                        {formData.additionalNotes && (
                          <div className="mt-4">
                            <p className="text-sm text-gray-500">Additional Notes</p>
                            <p className="font-medium">{formData.additionalNotes}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="mb-6">
                        <div className="bg-orange-50 border border-orange-200 p-4 rounded-md">
                          <p className="text-sm text-gray-700">
                            By submitting this form, you are making a request for our catering services. This is not a confirmed booking. Our team will review your request and contact you within 24-48 business hours to discuss details and provide a quote.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-medium transition-colors"
                        >
                          Previous
                        </button>
                        <button
                          type="submit"
                          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
                        >
                          Submit Booking Request
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from clients who have experienced our catering services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/65.jpg" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Jennifer W.</h4>
                  <p className="text-gray-500 text-sm">Wedding Client</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Culinary Canvas catered our wedding last summer, and they exceeded all our expectations. The food was amazing, and their team was professional and attentive. Our guests are still talking about the meal!"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Robert T.</h4>
                  <p className="text-gray-500 text-sm">Corporate Event</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We've hired Culinary Canvas for multiple corporate events, and they always deliver. Their attention to detail, flexibility, and delicious food have made them our go-to catering service."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/28.jpg" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Sofia M.</h4>
                  <p className="text-gray-500 text-sm">Birthday Party</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I cannot recommend Culinary Canvas enough! They catered my 40th birthday party, and everything was perfect. Chef Michael created a custom menu that wowed all my guests."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
