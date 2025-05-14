import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import WeekNavButton from '../components/WeekNavButton';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Tag, ArrowUp, BookOpen, Code, Coffee } from 'lucide-react';
import Week8Image1 from '../assets/Week8/week8.1.jpg';
import Week8Image2 from '../assets/Week8/week8.2.jpg';
import Week8Image3 from '../assets/Week8/week8.3.jpg';

const Week8 = () => {
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
              src={Week8Image1}
              alt="Week 8 - Advanced Techniques"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            {/* Animated background shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-color-3 text-bg-primary text-sm font-bold mb-4 border-l-2 border-b-2 border-bg-primary animate-fadeIn">
                  Week 8
                </span>
                <span className="inline-block px-4 py-1 bg-bg-tertiary/50 backdrop-blur-sm text-color-1 text-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  April 14-18, 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-color-1 mb-3 font-secondary animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                Advanced Techniques
              </h1>
              <p className="text-color-2 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                Learning and implementing advanced development techniques during my eighth week.
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
                        <span className="text-sm text-color-2">April 14-18, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Code className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Focus</span>
                        <span className="text-sm text-color-2">Advanced Techniques</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Navigation Card */}
                <div className="bg-bg-secondary p-6 border-l border-t border-color-3 shadow-card">
                  <h3 className="text-lg font-bold text-color-1 mb-4 font-secondary">Weekly Navigation</h3>
                  <div className="space-y-3">
                    <WeekNavButton to="/week7" direction="prev" label="Previous Week" />
                    <WeekNavButton to="/week9" direction="next" label="Next Week" />
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
                  <Tag size={16} className="text-color-3" />
                  <span>Technical Skills</span>
                </div>
              </div>

              <p className="text-lg text-color-1 mb-8 leading-relaxed border-l border-color-3 pl-6 py-3 bg-bg-tertiary/30">
                During Week 8, I focused on learning and implementing advanced development techniques.
              </p>

              <p className="text-base text-color-2 mb-8">
                This week was dedicated to exploring more complex programming concepts and tools that would enhance our knowledge management portal's functionality and performance.
              </p>

              <h2 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Advanced Techniques Learned</h2>

              <div className="bg-bg-tertiary p-8 my-10 border-l border-t border-color-3 shadow-soft">
                <ul className="space-y-5 text-color-2 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">01</span>
                    </div>
                    <span>Advanced state management patterns for complex applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">02</span>
                    </div>
                    <span>Performance optimization techniques for React applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">03</span>
                    </div>
                    <span>Advanced API integration and data handling strategies</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week8Image1} alt="Advanced Development Techniques" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Technical Growth</h4>
                    <p className="text-sm text-color-2">Expanding my technical skills with advanced development concepts.</p>
                  </div>
                </div>
                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week8Image2} alt="Performance Optimization" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Performance Optimization</h4>
                    <p className="text-sm text-color-2">Implementing techniques to improve application performance.</p>
                  </div>
                </div>
                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week8Image3} alt="Advanced API Integration" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">API Integration</h4>
                    <p className="text-sm text-color-2">Working with complex API integrations and data handling.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Implementation Challenges</h2>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Implementing these advanced techniques presented several challenges. One of the most significant was optimizing the application's performance while maintaining a clean and maintainable codebase. We had to carefully balance technical complexity with code readability and long-term maintainability.
              </p>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Another challenge was integrating with complex APIs that required sophisticated error handling and data transformation. We implemented robust error handling strategies and created reusable utilities for data transformation to address these challenges.
              </p>

              <blockquote className="border-l-2 border-color-3 pl-4 py-2 my-6 bg-bg-tertiary/30 italic">
                "Advanced techniques are not about writing complex code, but about solving complex problems with elegant solutions."
                <cite className="block text-color-3 mt-2 not-italic">— Senior Developer</cite>
              </blockquote>

              <h2 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Key Learnings</h2>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                This week taught me the importance of continuous learning and staying updated with the latest development techniques. I also learned that advanced techniques should be applied judiciously, always considering the specific requirements and constraints of the project.
              </p>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Moving forward, I'll continue to explore and implement advanced techniques while maintaining a focus on code quality and user experience. The knowledge gained this week will be invaluable as we approach the final stages of our project development.
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

export default Week8
