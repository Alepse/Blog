import React, { useState, useEffect } from 'react';
import Nav from '../components/nav';
import WeekNavButton from '../components/WeekNavButton';
import WeekProgress from '../components/WeekProgress';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Tag, ArrowUp, BookOpen, Code, Coffee } from 'lucide-react';
import Thumbnail from '../assets/ThumbnailWeek1.jpg'
import pic1 from '../assets/week1.1.jpg'
import pic2 from '../assets/week1.2.jpg'
import pic3 from '../assets/week1.3.jpg'
import pic4 from '../assets/week1.4.jpg'
import pic5 from '../assets/week1.5.jpg'

const Week1 = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className={`relative h-[450px] overflow-hidden border-l-4 border-t-4 border-color-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img
              src={Thumbnail}
              alt="Week 1 - Getting Started"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            {/* Animated background shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-color-3/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-color-3 text-bg-primary text-sm font-bold mb-4 border-l-4 border-b-4 border-bg-primary animate-fadeIn">
                  Week 1
                </span>
                <span className="inline-block px-4 py-1 bg-bg-tertiary/50 backdrop-blur-sm text-color-1 text-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  February 24-28, 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-color-1 mb-3 font-secondary animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                Getting Started
              </h1>
              <p className="text-color-2 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                My first week as an intern was filled with excitement and new experiences at DOST-V.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className={`sticky top-24 space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Week Info Card */}
                <div className="bg-bg-secondary p-6 border-l-4 border-t-4 border-color-3 shadow-card">
                  <h3 className="text-lg font-bold text-color-1 mb-4 flex items-center font-secondary">
                    <BookOpen className="mr-2 text-color-3" size={18} />
                    Week Overview
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Calendar className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Date</span>
                        <span className="text-sm text-color-2">February 24-28, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Code className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Focus</span>
                        <span className="text-sm text-color-2">Orientation & Onboarding</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Coffee className="mr-2 text-color-3 mt-1" size={16} />
                      <div>
                        <span className="block text-sm font-medium text-color-1">Skills</span>
                        <span className="text-sm text-color-2">UI/UX, Wireframing</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Progress Tracker */}
                <WeekProgress currentWeek={1} />

                {/* Navigation Card */}
                <div className="bg-bg-secondary p-6 border-l-4 border-t-4 border-color-3 shadow-card">
                  <h3 className="text-lg font-bold text-color-1 mb-4 font-secondary">Weekly Navigation</h3>
                  <div className="space-y-3">
                    <WeekNavButton to="/" direction="prev" label="Back to Home" />
                    <WeekNavButton to="/week2" direction="next" label="Next Week" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <article className={`lg:col-span-3 order-1 lg:order-2 bg-bg-secondary p-8 border-l-4 border-t-4 border-color-3 shadow-card transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-wrap gap-4 text-sm text-color-2 mb-8 bg-bg-tertiary p-3 border-l-4 border-color-3">
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
                  <span>Orientation</span>
                </div>
              </div>

              <p className="text-lg text-color-1 mb-6 leading-relaxed border-l-4 border-color-3 pl-4 py-2 bg-bg-tertiary/30">
                My first week as an intern was filled with excitement and new experiences.
                The orientation process helped me understand the company culture and meet the staffs of DOST-V.
                Each day brought new learnings and opportunities to grow professionally.
              </p>

              <h2 className="text-2xl font-bold text-color-1 mt-8 mb-4 font-secondary bg-bg-tertiary px-4 py-2 border-l-4 border-color-3 inline-block">Key Learnings</h2>

              <div className="bg-bg-tertiary p-6 my-8 border-l-4 border-t-4 border-color-3">
                <ul className="space-y-3 text-color-2">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">01</span>
                    </div>
                    <span>Company orientation and team units introductions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">02</span>
                    </div>
                    <span>Project tasks assigned</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-color-3 flex items-center justify-center text-bg-primary flex-shrink-0 mt-1">
                      <span className="text-xs">03</span>
                    </div>
                    <span>Wireframing and prototyping</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-color-1 mt-8 mb-4 font-secondary bg-bg-tertiary px-4 py-2 border-l-4 border-color-3 inline-block">Orientation Day</h2>

              <p className="text-base text-color-2 mb-6 border-l-4 border-color-3/30 pl-4 py-2">
                The first day was all about getting to know the organization. We had a comprehensive orientation session where we learned about DOST-V's mission, vision, and the various projects they're working on. The staff was welcoming and made sure we understood our roles and responsibilities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="border-l-4 border-t-4 border-color-3 overflow-hidden">
                  <img src={pic1} className="object-cover w-full h-64" alt="Orientation Day" />
                </div>
                <div className="border-l-4 border-t-4 border-color-3 overflow-hidden">
                  <img src={pic2} className="object-cover w-full h-64" alt="Team Introduction" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-color-1 mt-8 mb-4 font-secondary bg-bg-tertiary px-4 py-2 border-l-4 border-color-3 inline-block">Team Building Activities</h2>

              <p className="text-base text-color-2 mb-6 border-l-4 border-color-3/30 pl-4 py-2">
                We participated in several team-building activities designed to help us get to know each other better. These activities were not only fun but also helped us understand the importance of collaboration and communication in a professional setting.
              </p>

              <div className="border-l-4 border-t-4 border-color-3 overflow-hidden my-8">
                <img src={pic3} className="object-cover w-full h-64" alt="Team Building" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="border-l-4 border-t-4 border-color-3 overflow-hidden">
                  <img src={pic4} className="object-cover w-full h-64" alt="Collaboration" />
                </div>
                <div className="border-l-4 border-t-4 border-color-3 overflow-hidden">
                  <img src={pic5} className="object-cover w-full h-64" alt="Project Discussion" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-color-1 mt-8 mb-4 font-secondary bg-bg-tertiary px-4 py-2 border-l-4 border-color-3 inline-block">Start Of Productivity Experiences</h2>

              <p className="text-base text-color-2 mb-6 border-l-4 border-color-3/30 pl-4 py-2">
                During the first week, we were introduced to the projects that we'll be working on and a group of 3 for each project will be assigned to us, I was assigned to be one of the frontend developer and ui/ux designer.
              </p>

              <p className="text-base text-color-2 mb-6 border-l-4 border-color-3/30 pl-4 py-2">
                We spent time understanding the flow of our assigned projects and how we'll be working on it, the assigned tasks to us is a knowledge management portal designed to facilitate easy access, sharing, and organization of knowledge resources within an organization. The platform's core concept is training material sharing, enabling employees to upload materials after specific training sessions so others can learn from them. It also provides progress tracking and restore points, allowing users to resume learning from where they left off.
              </p>

              <p className="text-base text-color-2 mb-6 border-l-4 border-color-3/30 pl-4 py-2">
                A whole week of my week 1 was wireframing and prototyping of the possible design of our knowledge management portal for our client.
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
          className="fixed bottom-6 right-6 p-3 bg-color-3 text-bg-primary rounded-full shadow-elevated hover:bg-color-accent-2 transition-all duration-normal hover:scale-110 z-40 border-l-4 border-t-4 border-bg-primary"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Week1;