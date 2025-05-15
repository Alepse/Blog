import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import WeekNavButton from '../components/WeekNavButton';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Tag, ArrowUp, BookOpen, Code, Coffee } from 'lucide-react';
import Thumbnail from '../assets/Week2/ThumbnailWeek2.jpg'
import Week2Image1 from '../assets/Week2/week2.1.jpg'
import Week2Image2 from '../assets/Week2/week2.2.jpg'

const Week2 = () => {
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
              src={Thumbnail}
              alt="Week 2 - Project Progressions"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            {/* Animated background shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-color-3 text-bg-primary text-sm font-bold mb-4 border-l-2 border-b-2 border-bg-primary animate-fadeIn">
                  Week 2
                </span>
                <span className="inline-block px-4 py-1 bg-bg-tertiary/50 backdrop-blur-sm text-color-1 text-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  March 3-7, 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-color-1 mb-3 font-secondary animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                Project Progressions
              </h1>
              <p className="text-color-2 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                Making significant progress on our knowledge management portal project.
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
                        <span className="text-sm text-color-2">March 3-7, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Code className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Focus</span>
                        <span className="text-sm text-color-2">Frontend Development</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Coffee className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Skills</span>
                        <span className="text-sm text-color-2">React, UI Implementation</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Navigation Card */}
                <div className="bg-bg-secondary p-6 border-l border-t border-color-3 shadow-card">
                  <h3 className="text-lg font-bold text-color-1 mb-4 font-secondary">Weekly Navigation</h3>
                  <div className="space-y-3">
                    <WeekNavButton to="/week1" direction="prev" label="Previous Week" />
                    <WeekNavButton to="/week3" direction="next" label="Next Week" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <article className={`lg:col-span-3 order-1 lg:order-2 bg-bg-secondary p-10 border-l border-t border-color-3 shadow-card transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-wrap gap-4 text-sm text-color-2 mb-10 bg-bg-tertiary p-4 border-l border-color-3">
                <div className="flex items-center gap-1">
                  <Clock size={16} className="text-color-3" />
                  <span>4 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} className="text-color-3" />
                  <span>Kenneth Espela</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag size={16} className="text-color-3" />
                  <span>Development</span>
                </div>
              </div>

              <p className="text-lg text-color-1 mb-8 leading-relaxed border-l border-color-3 pl-6 py-3 bg-bg-tertiary/30">
                Week 2 was focused on making progress with our assigned projects. We started implementing the designs and wireframes created during the first week. The team collaboration was excellent, and we made significant strides in developing the knowledge management portal.
              </p>

              <h2 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Key Learnings</h2>

              <div className="bg-bg-tertiary p-8 my-10 border-l border-t border-color-3 shadow-soft">
                <ul className="space-y-3 text-color-2">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">01</span>
                    </div>
                    <span>Frontend development with React</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">02</span>
                    </div>
                    <span>UI implementation from wireframes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">03</span>
                    </div>
                    <span>Team Meetings</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Project Progress</h2>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                During the second week, we began implementing the UI designs for the knowledge management portal. I focused on creating responsive components that would work well across different devices. We established a component library to ensure consistency throughout the application.
              </p>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                We also had several meetings with stakeholders to gather feedback on our initial implementations. This feedback was invaluable in refining our approach and ensuring that we were meeting the client's expectations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week2Image1} className="w-full h-64 object-cover" alt="UI Implementation" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">UI Implementation</h4>
                    <p className="text-sm text-color-2">Converting wireframes into functional UI components.</p>
                  </div>
                </div>
                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week2Image2} className="w-full h-64 object-cover" alt="Team Collaboration" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Team Collaboration</h4>
                    <p className="text-sm text-color-2">Working together to implement the project requirements.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Implementation Challenges</h2>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                One of the challenges we faced was ensuring that the user interface was intuitive and accessible. We conducted several internal testing sessions to identify potential usability issues and made adjustments based on the feedback received.
              </p>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Another challenge was optimizing the performance of the application, especially when handling large amounts of data. We implemented lazy loading and pagination techniques to improve the user experience.
              </p>

          

              <h2 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Looking Forward</h2>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                As we move into Week 3, our focus will shift towards implementing more advanced features of the knowledge management portal. We plan to work on the search functionality, user authentication, and file upload capabilities.
              </p>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                I'm excited to continue learning and contributing to this project, and I look forward to overcoming new challenges in the coming weeks.
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

export default Week2;