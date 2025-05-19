import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import WeekNavButton from '../components/WeekNavButton';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Tag, ArrowUp, BookOpen, Code, Bug, Settings } from 'lucide-react';
import Week12Image from '../assets/Week12/week12.1.png';

const Week12 = () => {
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
              src={Week12Image}
              alt="Week 12 - Final Debugging"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            {/* Animated background shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-color-3 text-bg-primary text-sm font-bold mb-4 border-l-2 border-b-2 border-bg-primary animate-fadeIn">
                  Week 12
                </span>
                <span className="inline-block px-4 py-1 bg-bg-tertiary/50 backdrop-blur-sm text-color-1 text-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  May 12-16, 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-color-1 mb-3 font-secondary animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                Debugging & UI Polishing
              </h1>
              <p className="text-color-2 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                Debugging and fine-tuning UI/UX components in the HR and IT admin interfaces to ensure a polished final product.
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
                        <span className="text-sm text-color-2">May 12-16, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Bug className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Focus</span>
                        <span className="text-sm text-color-2">Debugging & UI/UX Refinement</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Navigation Card */}
                <div className="bg-bg-secondary p-6 border-l border-t border-color-3 shadow-card">
                  <h3 className="text-lg font-bold text-color-1 mb-4 font-secondary">Weekly Navigation</h3>
                  <div className="space-y-3">
                    <WeekNavButton to="/week11" direction="prev" label="Previous Week" />
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
                  <span>Debugging</span>
                </div>
                <div className="flex items-center gap-1">
                  <Settings size={16} className="text-color-3" />
                  <span>UI/UX</span>
                </div>
              </div>

              <div className="mb-10 bg-gradient-to-r from-bg-tertiary/80 to-transparent p-6 border-l-2 border-color-3 rounded-r-md">
                <p className="text-lg text-color-1 leading-relaxed">
                  In my final week of internship, I focused on debugging and fine-tuning the UI/UX components in both the HR and IT admin interfaces to ensure a polished final product.
                </p>
              </div>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Week 12 marked the final stretch of my internship journey. With most of the development work completed, this week was dedicated to identifying and fixing bugs, improving user interface elements, and ensuring a consistent user experience across all parts of the application. I worked closely with the team to address feedback and make final adjustments before project completion.
              </p>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary relative pl-4 border-l-2 border-color-3">
                <span className="bg-gradient-to-r from-color-3 to-color-3/50 bg-clip-text text-transparent">Debugging HR Interface Components</span>
              </h3>

              <div className="bg-bg-tertiary/50 p-8 my-10 border-l-2 border-color-3 rounded-r-md shadow-soft">
                <ul className="space-y-4 text-color-2 text-base list-disc pl-5">
                  <li className="pl-2">
                    <span>Fixed responsive layout issues in the employee management dashboard</span>
                  </li>
                  <li className="pl-2">
                    <span>Resolved data loading and display bugs in HR analytics components</span>
                  </li>
                  <li className="pl-2">
                    <span>Improved form validation and error handling in employee data entry forms</span>
                  </li>
                  <li className="pl-2">
                    <span>Enhanced navigation and menu interactions for better user flow</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary relative pl-4 border-l-2 border-color-3">
                <span className="bg-gradient-to-r from-color-3 to-color-3/50 bg-clip-text text-transparent">UI/UX Refinements in IT Admin Interface</span>
              </h3>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                The IT admin interface required several UI/UX adjustments to improve usability and visual consistency. I focused on creating a more intuitive experience while maintaining the design language established throughout the application.
              </p>

              <div className="bg-bg-tertiary/50 p-8 my-10 border-l-2 border-color-3 rounded-r-md shadow-soft">
                <ul className="space-y-4 text-color-2 text-base list-disc pl-5">
                  <li className="pl-2">
                    <span>Standardized button styles and interactive elements across all admin pages</span>
                  </li>
                  <li className="pl-2">
                    <span>Improved dashboard layout for better information hierarchy and readability</span>
                  </li>
                  <li className="pl-2">
                    <span>Enhanced data visualization components with better color contrast and accessibility</span>
                  </li>
                  <li className="pl-2">
                    <span>Refined animation and transition effects for a more polished user experience</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-tertiary/50 p-8 my-10 border-l-2 border-color-3 rounded-r-md shadow-soft">
                <ul className="space-y-4 text-color-2 text-base list-disc pl-5">
                  <li className="pl-2">
                    <span><strong className="text-color-1 font-medium">HR Interface Debugging:</strong> Identifying and fixing issues in the HR dashboard components.</span>
                  </li>
                  <li className="pl-2">
                    <span><strong className="text-color-1 font-medium">IT Admin UI Refinements:</strong> Polishing the user interface for the IT administration section.</span>
                  </li>
                  <li className="pl-2">
                    <span><strong className="text-color-1 font-medium">Publication Approvals:</strong> Debugging and refining the publication approval workflow in both interfaces.</span>
                  </li>
                  <li className="pl-2">
                    <span><strong className="text-color-1 font-medium">Dashboard Components:</strong> Ensuring consistent UI elements and responsive behavior across all dashboard sections.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary relative pl-4 border-l-2 border-color-3">
                <span className="bg-gradient-to-r from-color-3 to-color-3/50 bg-clip-text text-transparent">Cross-Browser Testing and Optimization</span>
              </h3>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                To ensure a consistent experience across different browsers and devices, I conducted thorough testing and made necessary adjustments. This involved checking for rendering issues, performance bottlenecks, and interaction inconsistencies across various platforms.
              </p>

              <div className="bg-bg-tertiary/50 p-8 my-10 border-l-2 border-color-3 rounded-r-md shadow-soft">
                <ul className="space-y-4 text-color-2 text-base list-disc pl-5">

                  <li className="pl-2">
                    <span>Verified responsive behavior across desktop, tablet, and mobile viewports</span>
                  </li>
                  <li className="pl-2">
                    <span>Improved loading performance by optimizing component rendering</span>
                  </li>
                  <li className="pl-2">
                    <span>Addressed accessibility concerns to ensure inclusive user experience</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary relative pl-4 border-l-2 border-color-3">
                <span className="bg-gradient-to-r from-color-3 to-color-3/50 bg-clip-text text-transparent">Final Reflections</span>
              </h3>

              <div className="bg-gradient-to-b from-bg-tertiary/30 to-transparent p-6 rounded-md border-l-2 border-color-3 mb-8">
                <p className="text-base text-color-2 leading-relaxed">
                  As my internship comes to a close with this final week, I'm grateful for the opportunity to have contributed to this project from start to finish. The debugging and UI/UX refinement work during Week 12 allowed me to apply all the skills I've developed throughout my internship while ensuring the delivery of a high-quality product.
                </p>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-base text-color-2 leading-relaxed">
                    Working on the HR and IT admin interfaces has given me valuable experience in frontend development, debugging, and user experience design. I've learned the importance of attention to detail, cross-browser compatibility, and creating intuitive user interfaces. These skills will undoubtedly serve me well in my future career as a developer.
                  </p>
                </div>
              </div>
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

export default Week12;