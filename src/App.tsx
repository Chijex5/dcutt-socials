import { useState, useEffect } from 'react';
import { Instagram, Mail, Phone, MessageSquare, MapPin, Scissors, ArrowRight, Calendar, Clock } from 'lucide-react';

export function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('socials');
  const [animatedItems, setAnimatedItems] = useState([]);
  const [bookingName, setBookingName] = useState('');
  const [bookingService, setBookingService] = useState('Haircut');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 600);
    
    // Staggered animations for social items
    if (loaded) {
      const itemTimer = setInterval(() => {
        setAnimatedItems(prev => {
          if (prev.length >= socialLinks.length) {
            clearInterval(itemTimer);
            return prev;
          }
          return [...prev, prev.length];
        });
      }, 150);
      
      return () => {
        clearInterval(itemTimer);
      };
    }
    
    return () => clearTimeout(timer);
  }, [loaded]);

  // Logo component with animated scissors
  const SalonLogo = () => (
    <div className="relative flex items-center justify-center">
      <div className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
        D'CUTT
      </div>
      <div className="absolute -right-8 top-1 transform rotate-45">
        <Scissors size={24} className="text-yellow-400 animate-pulse" />
      </div>
    </div>
  );
  
  // Define time slots for the new UI
  const timeSlots = [
    // Morning
    { time: '9:00 AM', available: true, period: 'morning' },
    { time: '9:30 AM', available: true, period: 'morning' },
    { time: '10:00 AM', available: true, period: 'morning' },
    { time: '10:30 AM', available: true, period: 'morning' },
    { time: '11:00 AM', available: true, period: 'morning' },
    { time: '11:30 AM', available: true, period: 'morning' },
    // Afternoon
    { time: '12:00 PM', available: true, period: 'afternoon' },
    { time: '12:30 PM', available: true, period: 'afternoon' },
    { time: '1:00 PM', available: true, period: 'afternoon' },
    { time: '1:30 PM', available: true, period: 'afternoon' },
    { time: '2:00 PM', available: true, period: 'afternoon' },
    { time: '2:30 PM', available: true, period: 'afternoon' },
    // Evening
    { time: '3:00 PM', available: true, period: 'evening' },
    { time: '3:30 PM', available: true, period: 'evening' },
    { time: '4:00 PM', available: true, period: 'evening' },
    { time: '4:30 PM', available: true, period: 'evening' },
    { time: '5:00 PM', available: true, period: 'evening' },
    { time: '5:30 PM', available: true, period: 'evening' },
    { time: '6:00 PM', available: true, period: 'evening' },
    { time: '6:30 PM', available: true, period: 'evening' }
  ];
  
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram />,
      link: "https://www.instagram.com/dcuttsalon?igsh=MXRwc25raXYxbnVtdA%3D%3D&utm_source=qr",
      handle: "@dcutt",
      color: "from-yellow-500 to-amber-700"
    },
    {
      name: "Email",
      icon: <Mail />,
      link: "mailto:puduak42@gmail.com",
      handle: "puduak42@gmail.com",
      color: "from-amber-400 to-yellow-600"
    },
    {
      name: "Phone",
      icon: <Phone />,
      link: "tel:+2349160229551",
      handle: "+234 916 022 9551",
      color: "from-yellow-600 to-amber-500" 
    },
    {
      name: "WhatsApp",
      icon: <MessageSquare />,
      link: "https://wa.me/2349068383256",
      handle: "+234 906 838 3256",
      color: "from-amber-500 to-yellow-400"
    },
    {
      name: "Location",
      icon: <MapPin />,
      link: "https://maps.google.com/?q=1 Edun Street Shogunle Lagos",
      handle: "1 Edun Street, Shogunle, Lagos",
      color: "from-yellow-400 to-amber-600"
    }
  ];

  const servicesList = [
    "Nails",
    "Lash Extensions",
    "Braiding",
    "Hair Styling",
    "Pedicure",
    "Barbing"
  ];
  
  // Filter times by period for the new time selector UI
  const [activePeriod, setActivePeriod] = useState('morning');
  const filteredTimeSlots = timeSlots.filter(slot => slot.period === activePeriod);
  
  // WhatsApp booking function
  const handleBookNow = () => {
    if (showBookingForm) {
      // Validate form
      if (!bookingName || !bookingService || !bookingDate || !bookingTime) {
        alert("Please fill in all booking details");
        return;
      }
      
      // Format the message for WhatsApp
      const message = `*New Booking Request*%0A
Name: ${bookingName}%0A
Service: ${bookingService}%0A
Date: ${bookingDate}%0A
Time: ${bookingTime}%0A
---
Sent from D'CUTT website`;
      
      
      window.open(`https://wa.me/2349068383256?text=${message}`, '_blank');
      
      
      setBookingName('');
      setBookingService('Premium Haircuts');
      setBookingDate('');
      setBookingTime('');
      setShowBookingForm(false);
    } else {
      setShowBookingForm(true);
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-black p-4 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full max-w-md relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 z-0"></div>
        
        {/* Golden decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-700 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-yellow-300 to-amber-600 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Content container */}
        <div className="relative z-10 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow-900/30 shadow-2xl">
          {/* Header */}
          <div className="relative h-40 flex items-center justify-center overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-black">
              <div className="absolute inset-0 opacity-20">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute bg-gradient-to-r from-yellow-400 to-amber-600 h-px" 
                    style={{
                      left: 0,
                      right: 0,
                      top: `${i * 15 + 10}%`,
                      transform: `rotate(${i % 2 ? -3 : 3}deg)`,
                      opacity: 0.3 + (i * 0.1)
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Logo */}
            <div className="relative z-10 transform transition-all duration-700">
              <SalonLogo />
              <p className="text-yellow-100/70 text-sm mt-2 text-center tracking-widest">UNISEX SALON</p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex border-b border-yellow-900/30">
            <button 
              onClick={() => {
                setActiveSection('socials');
                setShowBookingForm(false);
              }}
              className={`flex-1 py-3 text-sm font-medium transition-all duration-300 ${activeSection === 'socials' ? 'text-yellow-400 border-b-2 border-yellow-500' : 'text-yellow-100/50 hover:text-yellow-100'}`}
            >
              CONNECT
            </button>
            <button 
              onClick={() => {
                setActiveSection('services');
                setShowBookingForm(false);
              }}
              className={`flex-1 py-3 text-sm font-medium transition-all duration-300 ${activeSection === 'services' ? 'text-yellow-400 border-b-2 border-yellow-500' : 'text-yellow-100/50 hover:text-yellow-100'}`}
            >
              SERVICES
            </button>
            <button 
              onClick={() => {
                setActiveSection('booking');
                setShowBookingForm(true);
              }}
              className={`flex-1 py-3 text-sm font-medium transition-all duration-300 ${activeSection === 'booking' ? 'text-yellow-400 border-b-2 border-yellow-500' : 'text-yellow-100/50 hover:text-yellow-100'}`}
            >
              BOOK
            </button>
          </div>
          
          {/* Main content */}
          <div className="p-6">
            {activeSection === 'socials' ? (
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-yellow-300 mb-6 text-center">Follow & Contact Us</h2>
                
                {socialLinks.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className={`flex items-center p-4 rounded-lg bg-gradient-to-r ${item.color} bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm transition-all duration-500 transform ${animatedItems.includes(index) ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black/30 mr-4 text-yellow-400">
                      {item.icon}
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-yellow-100 text-sm font-medium">{item.name}</span>
                      <span className="text-yellow-100/70 text-sm">{item.handle}</span>
                    </div>
                    <ArrowRight size={16} className="text-yellow-400/50 group-hover:text-yellow-400 transition-all duration-300" />
                  </a>
                ))}
              </div>
            ) : activeSection === 'services' ? (
              <div className="py-2">
                <h2 className="text-lg font-medium text-yellow-300 mb-6 text-center">Our Premium Services</h2>
                <ul className="space-y-3">
                  {servicesList.map((service, index) => (
                    <li 
                      key={index} 
                      className={`p-3 pl-4 border-l-2 border-yellow-600/50 rounded bg-yellow-900/10 text-yellow-100/90 transform transition-all duration-500 ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center mt-8">
                  <button 
                    onClick={() => {
                      setActiveSection('booking');
                      setShowBookingForm(true);
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-yellow-600 to-amber-700 rounded-full text-black font-medium hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300 flex items-center gap-2"
                  >
                    <Calendar size={16} />
                    Book Now
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-4">
                <h2 className="text-lg font-medium text-yellow-300 mb-6 text-center">Book Your Appointment</h2>
                
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="block text-yellow-100 text-sm">Your Name</label>
                    <input
                      type="text"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full p-3 bg-black/40 border border-yellow-900/30 rounded-lg text-yellow-100 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-yellow-100 text-sm">Service</label>
                    <select
                      value={bookingService}
                      onChange={(e) => setBookingService(e.target.value)}
                      className="w-full p-3 bg-black/40 border border-yellow-900/30 rounded-lg text-yellow-100 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                      required
                    >
                      {servicesList.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-yellow-100 text-sm">Preferred Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full p-3 bg-black/40 border border-yellow-900/30 rounded-lg text-yellow-100 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                      required
                    />
                  </div>
                  
                  {/* New Improved Time Selection UI */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="block text-yellow-100 text-sm">Preferred Time</label>
                      <div className="flex items-center text-yellow-300 text-xs">
                        <Clock size={14} className="mr-1" />
                        <span>{bookingTime ? bookingTime : 'Select a time'}</span>
                      </div>
                    </div>
                    
                    {/* Time Period Selector */}
                    <div className="flex p-1 bg-black/40 rounded-lg border border-yellow-900/30">
                      {['morning', 'afternoon', 'evening'].map((period) => (
                        <button
                          key={period}
                          type="button"
                          onClick={() => setActivePeriod(period)}
                          className={`flex-1 py-2 text-xs font-medium transition-all duration-300 rounded ${
                            activePeriod === period
                              ? 'bg-gradient-to-r from-yellow-600 to-amber-700 text-black'
                              : 'text-yellow-100/70 hover:text-yellow-100'
                          }`}
                        >
                          {period.charAt(0).toUpperCase() + period.slice(1)}
                        </button>
                      ))}
                    </div>
                    
                    {/* Visual Time Slots */}
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {filteredTimeSlots.map((slot, index) => (
                        <button
                          key={index}
                          type="button"
                          disabled={!slot.available}
                          onClick={() => setBookingTime(slot.time)}
                          className={`
                            relative p-3 rounded-lg text-center text-sm transition-all duration-300
                            ${bookingTime === slot.time 
                              ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-medium ring-2 ring-yellow-400'
                              : slot.available 
                                ? 'bg-yellow-900/20 text-yellow-100 hover:bg-yellow-900/30'
                                : 'bg-gray-900/40 text-gray-500 cursor-not-allowed'
                            }
                          `}
                        >
                          {slot.time}
                          {!slot.available && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                              <span className="text-xs text-red-400">Booked</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      onClick={handleBookNow}
                      className="w-full py-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg text-black font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300"
                    >
                      <MessageSquare size={18} />
                      Book via WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="px-6 py-4 bg-black/40 border-t border-yellow-900/20">
            <p className="text-yellow-500/70 text-xs text-center">
              © {new Date().getFullYear()} D'CUTT • Luxury Hair Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}