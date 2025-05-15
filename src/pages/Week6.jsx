import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import WeekNavButton from '../components/WeekNavButton';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Tag, ArrowUp, BookOpen, Code, Coffee } from 'lucide-react';
import Week6Image1 from '../assets/Week6/week6.1.jpg';
import Week6Image2 from '../assets/Week6/week6.2.jpg';

const Week6 = () => {
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
              src={Week6Image1}
              alt="Week 6 - Problem Solving"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            {/* Animated background shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-color-3 text-bg-primary text-sm font-bold mb-4 border-l-2 border-b-2 border-bg-primary animate-fadeIn">
                  Week 6
                </span>
                <span className="inline-block px-4 py-1 bg-bg-tertiary/50 backdrop-blur-sm text-color-1 text-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  March 31-April 4, 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-color-1 mb-3 font-secondary animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                Next.js & TypeScript
              </h1>
              <p className="text-color-2 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                Migrating our project to Next.js and learning TypeScript during my sixth week.
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
                        <span className="text-sm text-color-2">March 31-April 4, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Code className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Focus</span>
                        <span className="text-sm text-color-2">Next.js & TypeScript</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Navigation Card */}
                <div className="bg-bg-secondary p-6 border-l border-t border-color-3 shadow-card">
                  <h3 className="text-lg font-bold text-color-1 mb-4 font-secondary">Weekly Navigation</h3>
                  <div className="space-y-3">
                    <WeekNavButton to="/week5" direction="prev" label="Previous Week" />
                    <WeekNavButton to="/week7" direction="next" label="Next Week" />
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
                  <span>Next.js & TypeScript</span>
                </div>
              </div>

              <p className="text-lg text-color-1 mb-8 leading-relaxed border-l border-color-3 pl-6 py-3 bg-bg-tertiary/30">
                During Week 6, we faced the challenge of migrating our project to Next.js and implementing TypeScript, which provided valuable learning opportunities.
              </p>

              <p className="text-base text-color-2 mb-8">
                This week was particularly challenging as we undertook the significant task of migrating our existing project to the Next.js tech stack while simultaneously implementing TypeScript. The migration was necessary because our backend developer was facing difficulties connecting Laravel and React.js together, which was hindering our progress. Despite the challenges of learning new technologies, these changes allowed me to expand my technical skills and gain valuable experience with modern web development frameworks.
              </p>

              <h2 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Key Challenges</h2>

              <div className="bg-bg-tertiary p-8 my-10 border-l border-t border-color-3 shadow-soft">
                <ul className="space-y-5 text-color-2 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">01</span>
                    </div>
                    <span>Migrating our project to Next.js tech stack</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">02</span>
                    </div>
                    <span>Learning and implementing TypeScript in our codebase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">03</span>
                    </div>
                    <span>Debugging complex integration issues between frontend and backend systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">04</span>
                    </div>
                    <span>Optimizing database queries for better performance</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week6Image1} alt="Problem Solving Session" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Collaborative Problem Solving</h4>
                    <p className="text-sm text-color-2">Working with the team to tackle complex technical challenges.</p>
                  </div>
                </div>
                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week6Image2} alt="Technical Solutions" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Technical Solutions</h4>
                    <p className="text-sm text-color-2">Implementing solutions to overcome project challenges.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Next.js Migration & TypeScript Implementation</h2>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                One of the major challenges this week was migrating our project to the Next.js tech stack. This decision was primarily made because our backend developer was experiencing significant difficulties connecting Laravel and React.js together. The integration issues between these technologies were causing development delays and technical roadblocks. By migrating to Next.js, we aimed to solve these connection problems while also leveraging Next.js's server-side rendering capabilities, improved routing, and better performance optimization. Although challenging, this migration provided an excellent opportunity to learn and implement modern web development practices.
              </p>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Alongside the Next.js migration, we also incorporated TypeScript into our codebase. Learning TypeScript was initially challenging, but it quickly proved valuable for catching type-related errors early in the development process and improving code maintainability through better documentation and intellisense support.
              </p>

              <h2 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Problem-Solving Approach</h2>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Our approach to problem-solving involved breaking down complex issues into smaller, manageable components. We used a combination of pair programming, code reviews, and regular team discussions to identify and resolve issues efficiently. For the Next.js migration specifically, we created a step-by-step plan to gradually move components and functionality over to the new framework.
              </p>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                When implementing TypeScript, we started by adding type definitions to our most critical components and gradually expanded coverage throughout the codebase. This incremental approach allowed us to maintain functionality while improving type safety.
              </p>

              <h2 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Lessons Learned</h2>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                This week taught me the importance of systematic problem-solving and the value of collaborative approaches. I learned that even the most complex technical challenges can be overcome with persistence, creativity, and teamwork. The Next.js migration and TypeScript implementation significantly expanded my technical skills and understanding of modern web development frameworks.
              </p>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Learning TypeScript has been particularly valuable, as it has improved my understanding of type systems and how they can enhance code quality and developer experience. I'm now more confident in working with strongly-typed languages and appreciate the benefits they bring to large-scale applications.
              </p>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                Moving forward, I'll be applying these new skills and problem-solving techniques to other aspects of the project, particularly as we continue to enhance our application with the improved tech stack.
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

export default Week6
