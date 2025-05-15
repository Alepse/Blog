import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import WeekNavButton from '../components/WeekNavButton';
import Footer from '../components/Footer';
import { Calendar, Clock, User, ArrowUp, BookOpen, Coffee, Server, Users } from 'lucide-react';
import Week4Image1 from '../assets/Week4/week4.1.jpg';
import Week4Image2 from '../assets/Week4/week4.2.jpg';
import Week4Image3 from '../assets/Week4/week4.3.jpg';
import Week4Image4 from '../assets/Week4/week4.4.jpg';
import Week4Image5 from '../assets/Week4/week4.5.jpg';
import Week4Image6 from '../assets/Week4/week4.6.jpg';

const Week4 = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle scroll position based on navigation state
    if (location.state?.scrollToTop) {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-bg-primary pt-16">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className={`relative h-[550px] overflow-hidden border-l border-t border-color-3 shadow-card transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img
              src={Week4Image3}
              alt="Week 4 - Server Upgrades & Farewells"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            {/* Animated background shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-color-3 text-bg-primary text-sm font-bold mb-4 border-l-4 border-b-4 border-bg-primary animate-fadeIn">
                  Week 4
                </span>
                <span className="inline-block px-4 py-1 bg-bg-tertiary/50 backdrop-blur-sm text-color-1 text-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  March 17-21, 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-color-1 mb-3 font-secondary animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                Server Upgrades & Farewells
              </h1>
              <p className="text-color-2 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                Learning technical server skills and celebrating team connections through a special farewell.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className={`sticky top-24 space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Week Info Card */}
                <div className="bg-bg-secondary p-8 border-l border-t border-color-3 shadow-card">
                  <h3 className="text-lg font-bold text-color-1 mb-4 flex items-center font-secondary">
                    <BookOpen className="mr-2 text-color-3" size={18} />
                    Week Overview
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Calendar className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Date</span>
                        <span className="text-sm text-color-2">March 17-21, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Server className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Focus</span>
                        <span className="text-sm text-color-2">Server Upgrades & Team Events</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Navigation Card */}
                <div className="bg-bg-secondary p-6 border-l border-t border-color-3 shadow-card">
                  <h3 className="text-lg font-bold text-color-1 mb-4 font-secondary">Weekly Navigation</h3>
                  <div className="space-y-3">
                    <WeekNavButton to="/week3" direction="prev" label="Previous Week" />
                    <WeekNavButton to="/week5" direction="next" label="Next Week" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <article className={`lg:col-span-3 order-1 lg:order-2 bg-bg-secondary p-10 border-l border-t border-color-3 shadow-card transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-wrap gap-4 text-sm text-color-2 mb-10 bg-bg-tertiary p-4 border-l border-color-3">
                <div className="flex items-center gap-1">
                  <Clock size={16} className="text-color-3" />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} className="text-color-3" />
                  <span>Kenneth Espela</span>
                </div>
                <div className="flex items-center gap-1">
                  <Server size={16} className="text-color-3" />
                  <span>Server Upgrades</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} className="text-color-3" />
                  <span>Team Events</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-color-1 mt-12 mb-6 font-secondary">Server Upgrade Lecture & Team Events</h2>

              <p className="text-lg text-color-1 mb-8 leading-relaxed border-l border-color-3 pl-6 py-3 bg-bg-tertiary/30">
                Week 4 was highlighted by an insightful server upgrade lecture with our mentor and a special farewell celebration for one of our DOST-V colleagues who had been instrumental in helping with our agency application.
              </p>

              <p className="text-lg text-color-2 mb-8 leading-relaxed">
                This week brought valuable technical knowledge through specialized training sessions and strengthened our team bonds through shared experiences. The mix of professional development and social interaction created a well-rounded week of growth.
              </p>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Server Upgrade Lecture Highlights</h3>

              <div className="bg-bg-tertiary p-8 my-10 border-l border-t border-color-3 shadow-soft">
                <ul className="space-y-5 text-color-2 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">01</span>
                    </div>
                    <span>Comprehensive overview of server architecture and upgrade pathways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">02</span>
                    </div>
                    <span>Best practices for maintaining system stability during upgrades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">03</span>
                    </div>
                    <span>Hands-on demonstration of backup procedures and rollback strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">04</span>
                    </div>
                    <span>Performance optimization techniques for upgraded server environments</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week4Image2} alt="Server Upgrade Lecture" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Technical Training</h4>
                    <p className="text-sm text-color-2">Our mentor provided in-depth knowledge on server architecture and upgrade procedures.</p>
                  </div>
                </div>

                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week4Image6} alt="Hands-on Learning" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Hands-on Learning</h4>
                    <p className="text-sm text-color-2">Practical exercises helped solidify our understanding of server management concepts.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">DOST-V Colleague Farewell</h3>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                This week, we organized a special farewell celebration for our colleague from DOST-V who had been instrumental in helping with our agency application process. The small gathering allowed us to express our gratitude for their support and guidance during our time together. We shared food, stories, and well-wishes for their future endeavors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week4Image1} alt="Farewell Celebration" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Farewell Celebration</h4>
                    <p className="text-sm text-color-2">Sharing a meal together to celebrate our colleague's contributions.</p>
                  </div>
                </div>

                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week4Image4} alt="Team Bonding" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Team Bonding</h4>
                    <p className="text-sm text-color-2">Strengthening relationships through shared experiences.</p>
                  </div>
                </div>

                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week4Image5} alt="Food Sharing" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Food & Memories</h4>
                    <p className="text-sm text-color-2">Enjoying food together while creating lasting memories.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Key Learnings from Week 4</h3>

              

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Week 4 was a perfect blend of technical growth and interpersonal connection. The server upgrade lecture expanded my technical knowledge, while the farewell celebration reminded me of the importance of professional relationships. I'm grateful for both the technical skills and the human connections that continue to shape my internship experience.
              </p>
            </article>
          </div>
        </div>
      </main>

      <Footer />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-color-3 text-bg-primary rounded-full shadow-elevated hover:bg-color-accent-2 transition-all duration-normal hover:scale-110 z-40 border-l border-t border-bg-primary cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Week4;
