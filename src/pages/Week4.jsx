import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import WeekNavButton from '../components/WeekNavButton';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Tag, ArrowUp, BookOpen, Code, Coffee } from 'lucide-react';
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
              src={Week4Image1}
              alt="Week 4 - Team Collaboration"
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
                Team Collaboration
              </h1>
              <p className="text-color-2 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                Working with the team on collaborative projects and learning from peers.
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
                      <Code className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Status</span>
                        <span className="text-sm text-color-2">Coming Soon</span>
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
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} className="text-color-3" />
                  <span>Kenneth Espela</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag size={16} className="text-color-3" />
                  <span>Collaboration</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-color-1 mt-12 mb-6 font-secondary">Team Collaboration</h2>

              <p className="text-lg text-color-1 mb-8 leading-relaxed border-l border-color-3 pl-6 py-3 bg-bg-tertiary/30">
                Week 4 was all about team collaboration and working together to solve complex problems. I had the opportunity to work closely with other team members on our knowledge management portal project.
              </p>

              <p className="text-lg text-color-2 mb-8 leading-relaxed">
                This week, we focused on integrating our individual components into a cohesive system. The collaborative environment allowed us to share ideas, provide feedback, and learn from each other's expertise.
              </p>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Collaborative Achievements</h3>

              <div className="bg-bg-tertiary p-8 my-10 border-l border-t border-color-3 shadow-soft">
                <ul className="space-y-5 text-color-2 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">01</span>
                    </div>
                    <span>Successfully integrated frontend components with backend APIs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">02</span>
                    </div>
                    <span>Implemented real-time collaboration features for document editing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">03</span>
                    </div>
                    <span>Resolved cross-browser compatibility issues through team problem-solving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">04</span>
                    </div>
                    <span>Conducted peer code reviews to ensure quality and knowledge sharing</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week4Image2} alt="Team Meeting" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Team Meetings</h4>
                    <p className="text-sm text-color-2">Daily stand-ups helped us stay aligned and address challenges quickly.</p>
                  </div>
                </div>

                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week4Image3} alt="Pair Programming" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Pair Programming</h4>
                    <p className="text-sm text-color-2">Working together on complex problems improved our code quality.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-color-1 mt-12 mb-6 font-secondary">Collaborative Tools & Techniques</h3>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                We utilized various tools and techniques to enhance our collaboration. Git for version control, Jira for task management, and Slack for communication were essential to our workflow. We also implemented agile methodologies, including daily stand-ups and sprint planning.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week4Image4} alt="Code Review" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Code Reviews</h4>
                    <p className="text-sm text-color-2">Regular peer reviews improved code quality.</p>
                  </div>
                </div>

                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week4Image5} alt="Sprint Planning" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Sprint Planning</h4>
                    <p className="text-sm text-color-2">Setting clear goals for each sprint period.</p>
                  </div>
                </div>

                <div className="bg-bg-tertiary/30 border-l border-t border-color-3 overflow-hidden">
                  <img src={Week4Image6} alt="Knowledge Sharing" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-color-1 mb-2">Knowledge Sharing</h4>
                    <p className="text-sm text-color-2">Learning from each other's expertise and experiences.</p>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-2 border-color-3 pl-4 py-2 my-6 bg-bg-tertiary/30 italic">
                "Talent wins games, but teamwork and intelligence win championships."
                <cite className="block text-color-3 mt-2 not-italic">— Michael Jordan</cite>
              </blockquote>

              <p className="text-base text-color-2 mb-8 leading-relaxed">
                The collaborative experience this week has been invaluable. I've learned that effective communication and mutual respect are key to successful team projects. As we move forward, I'm excited to continue building on these relationships and further enhancing our collaborative processes.
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
