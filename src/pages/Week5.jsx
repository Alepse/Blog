import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import WeekNavButton from '../components/WeekNavButton';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Tag, ArrowUp, BookOpen, Code, Coffee } from 'lucide-react';
import Week5Image1 from '../assets/Week5/week5.1.jpg';
import Week5Image2 from '../assets/Week5/week5.2.jpg';

const Week5 = () => {
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
              src={Week5Image1}
              alt="Week 5 - Project Milestones"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            {/* Animated background shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-color-3 text-bg-primary text-sm font-bold mb-4 border-l-2 border-b-2 border-bg-primary animate-fadeIn">
                  Week 5
                </span>
                <span className="inline-block px-4 py-1 bg-bg-tertiary/50 backdrop-blur-sm text-color-1 text-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  March 24-28, 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-color-1 mb-3 font-secondary animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                Project Milestones
              </h1>
              <p className="text-color-2 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                Reaching important milestones in my assigned projects.
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
                        <span className="text-sm text-color-2">March 24-28, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Code className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Focus</span>
                        <span className="text-sm text-color-2">Project Milestones</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Navigation Card */}
                <div className="bg-bg-secondary p-6 border-l border-t border-color-3 shadow-card">
                  <h3 className="text-lg font-bold text-color-1 mb-4 font-secondary">Weekly Navigation</h3>
                  <div className="space-y-3">
                    <WeekNavButton to="/week4" direction="prev" label="Previous Week" />
                    <WeekNavButton to="/week6" direction="next" label="Next Week" />
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
                  <span>Milestones</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-color-1 mt-12 mb-6 font-secondary">Project Milestones</h2>

              <p className="text-lg text-color-1 mb-8 leading-relaxed border-l border-color-3 pl-6 py-3 bg-bg-tertiary/30">
                Week 5 marked significant progress in our knowledge management portal project. We reached several important milestones that brought us closer to our final goals.
              </p>

              <p className="text-lg text-color-2 mb-8 leading-relaxed">
                This week was particularly rewarding as we completed key features and received positive feedback from stakeholders. The team's hard work and dedication were evident in the quality of our deliverables.
              </p>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Key Milestones Achieved</h3>

              <div className="bg-bg-tertiary p-8 my-10 border-l border-t border-color-3 shadow-soft">
                <ul className="space-y-5 text-color-2 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">01</span>
                    </div>
                    <span>Completed the user authentication and authorization system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">02</span>
                    </div>
                    <span>Implemented the document management functionality with version control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">03</span>
                    </div>
                    <span>Developed the search and filtering capabilities for knowledge resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">04</span>
                    </div>
                    <span>Successfully conducted the first round of user acceptance testing</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week5Image1} alt="Project Dashboard" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Project Dashboard</h4>
                    <p className="text-sm text-color-2">The completed dashboard interface for the knowledge portal.</p>
                  </div>
                </div>

                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week5Image2} alt="User Testing" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">User Testing</h4>
                    <p className="text-sm text-color-2">Conducting user acceptance testing with stakeholders.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Stakeholder Feedback</h3>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                The stakeholder review session was a success. The clients were impressed with our progress and provided valuable feedback for further improvements. They particularly appreciated the intuitive user interface and the robust search functionality.
              </p>

              <blockquote className="border-l-2 border-color-3 pl-4 py-2 my-6 bg-bg-tertiary/30 italic">
                "The knowledge management portal is shaping up to be exactly what we envisioned. The team has done an excellent job implementing our requirements."
                <cite className="block text-color-3 mt-2 not-italic">— Client Feedback</cite>
              </blockquote>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                As we move into Week 6, our focus will shift to addressing the feedback received and implementing additional features requested by the stakeholders. We're on track to deliver the project on schedule, and the team is motivated by the positive response to our work so far.
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

export default Week5;
