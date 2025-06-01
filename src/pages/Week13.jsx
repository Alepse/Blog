import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import WeekNavButton from '../components/WeekNavButton';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Tag, ArrowUp, BookOpen, Code, Bug, Settings, Database } from 'lucide-react';
// You'll need to add a Week13 image to your assets folder
import Week13Image from '../assets/Week13/week13.jpg';

const Week13 = () => {
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
              src={Week13Image}
              alt="Week 13 - UI Adjustments & API Integration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            {/* Animated background shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-color-3 text-bg-primary text-sm font-bold mb-4 border-l-2 border-b-2 border-bg-primary animate-fadeIn">
                  Week 13
                </span>
                <span className="inline-block px-4 py-1 bg-bg-tertiary/50 backdrop-blur-sm text-color-1 text-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  May 19-23, 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-color-1 mb-3 font-secondary animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                UI Refinement & API Integration
              </h1>
              <p className="text-color-2 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                Fine-tuning the Employee Dashboard UI and debugging API integrations to ensure seamless data flow and user experience.
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
                        <span className="text-sm text-color-2">May 19-23, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Database className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Focus</span>
                        <span className="text-sm text-color-2">UI Refinement & API Integration</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Navigation Card */}
                <div className="bg-bg-secondary p-6 border-l border-t border-color-3 shadow-card">
                  <h3 className="text-lg font-bold text-color-1 mb-4 font-secondary">Weekly Navigation</h3>
                  <div className="space-y-3">
                    <WeekNavButton to="/week12" direction="prev" label="Previous Week" />
                    <WeekNavButton to="/" direction="next" label="Back to Home" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <article className={`lg:col-span-3 order-1 lg:order-2 bg-bg-secondary p-10 border-l border-t border-color-3 shadow-card transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-wrap gap-4 text-sm text-color-2 mb-10 bg-bg-tertiary p-4 border-l border-color-3">
                <div className="flex items-center gap-1">
                  <Clock size={16} className="text-color-3" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} className="text-color-3" />
                  <span>Kenneth Espela</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bug size={16} className="text-color-3" />
                  <span>API Integration</span>
                </div>
                <div className="flex items-center gap-1">
                  <Settings size={16} className="text-color-3" />
                  <span>UI/UX</span>
                </div>
              </div>

              <div className="mb-10 bg-gradient-to-r from-bg-tertiary/80 to-transparent p-6 border-l-2 border-color-3 rounded-r-md">
                <p className="text-lg text-color-1 leading-relaxed">
                  In Week 13, I focused on refining the Employee Dashboard UI components and debugging API integrations to ensure a seamless user experience and reliable data flow.
                </p>
              </div>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Following the debugging and UI polishing work from Week 12, this week was dedicated to making final adjustments to the Employee Dashboard interface and resolving API integration issues. Working closely with the backend team, I identified and fixed several data synchronization problems and optimized the UI for better performance and usability.
              </p>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary relative pl-4 border-l-2 border-color-3">
                <span className="bg-gradient-to-r from-color-3 to-color-3/50 bg-clip-text text-transparent">Employee Dashboard UI Refinements</span>
              </h3>

              <div className="bg-bg-tertiary/50 p-8 my-10 border-l-2 border-color-3 rounded-r-md shadow-soft">
                <ul className="space-y-4 text-color-2 text-base list-disc pl-5">
                  <li className="pl-2">
                    <span>Enhanced responsive design for better mobile and tablet experiences</span>
                  </li>
                  <li className="pl-2">
                    <span>Improved data visualization components for employee performance metrics</span>
                  </li>
                  <li className="pl-2">
                    <span>Refined notification system UI for better user engagement</span>
                  </li>
                  <li className="pl-2">
                    <span>Implemented accessibility improvements across all dashboard components</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary relative pl-4 border-l-2 border-color-3">
                <span className="bg-gradient-to-r from-color-3 to-color-3/50 bg-clip-text text-transparent">API Integration Debugging</span>
              </h3>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                The Employee Dashboard relies heavily on API integrations to display real-time data. This week, I focused on identifying and resolving several critical issues affecting data synchronization and display.
              </p>

              <div className="bg-bg-tertiary/50 p-8 my-10 border-l-2 border-color-3 rounded-r-md shadow-soft">
                <ul className="space-y-4 text-color-2 text-base list-disc pl-5">
                  <li className="pl-2">
                    <span><strong className="text-color-1 font-medium">Data Fetching Optimization:</strong> Implemented better error handling and loading states for API requests.</span>
                  </li>
                  <li className="pl-2">
                    <span><strong className="text-color-1 font-medium">Real-time Updates:</strong> Fixed WebSocket connection issues for live data updates.</span>
                  </li>
                  <li className="pl-2">
                    <span><strong className="text-color-1 font-medium">Authentication Flow:</strong> Resolved token refresh issues causing intermittent API failures.</span>
                  </li>
                  <li className="pl-2">
                    <span><strong className="text-color-1 font-medium">Data Caching:</strong> Implemented efficient caching strategies to reduce API calls and improve performance.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary relative pl-4 border-l-2 border-color-3">
                <span className="bg-gradient-to-r from-color-3 to-color-3/50 bg-clip-text text-transparent">Performance Optimization</span>
              </h3>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Beyond visual refinements and API fixes, I also focused on optimizing the overall performance of the Employee Dashboard to ensure a smooth user experience even with large datasets.
              </p>

              <div className="bg-bg-tertiary/50 p-8 my-10 border-l-2 border-color-3 rounded-r-md shadow-soft">
                <ul className="space-y-4 text-color-2 text-base list-disc pl-5">
                  <li className="pl-2">
                    <span>Implemented virtualized lists for handling large data sets efficiently</span>
                  </li>
                  <li className="pl-2">
                    <span>Optimized component rendering to reduce unnecessary re-renders</span>
                  </li>
                  <li className="pl-2">
                    <span>Added lazy loading for dashboard modules to improve initial load time</span>
                  </li>
                  <li className="pl-2">
                    <span>Refined state management to prevent memory leaks and improve stability</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary relative pl-4 border-l-2 border-color-3">
                <span className="bg-gradient-to-r from-color-3 to-color-3/50 bg-clip-text text-transparent">Final Reflections</span>
              </h3>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Week 13 represented the culmination of our efforts to create a robust, user-friendly Employee Dashboard. By addressing UI refinements and API integration issues, we've delivered a polished product that meets both functional requirements and user expectations. The collaborative approach between frontend and backend teams was crucial in identifying and resolving complex integration challenges.
              </p>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                As we prepare for the final handover, I'm confident that the Employee Dashboard will provide significant value to the organization, offering intuitive access to critical information and streamlining day-to-day operations for employees across all departments.
              </p>
            </article>
          </div>
        </div>
      </main>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 bg-color-3 text-bg-primary p-3 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <Footer />
    </div>
  );
};

export default Week13;